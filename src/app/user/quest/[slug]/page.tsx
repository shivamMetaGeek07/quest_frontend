"use client";
import QuizPollCarousel from "@/app/components/QuizPollCarousel";
import { fetchTaskById, completeTask } from "@/redux/reducer/taskSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { notify } from "@/utils/notify";
import { Progress } from "@nextui-org/react";
import axios from "axios";
import { warning } from "framer-motion/dom";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

// types.ts

export interface QuizQuestion
{
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface PollQuestion
{
  question: string;
  options: string[];
}

export interface Completion
{
  user: string;
  completedAt: string;
  submission: string;
}

export interface CardData
{
  _id: string;
  image: string;
  name: string;
  taskName: string;
  taskDescription: string;
  description: string;
  type: string;
  category: string;
  visitLink?: string;
  quizzes?: QuizQuestion[];
  polls?: PollQuestion[];
  inviteLink?: string;
  uploadLink?: string;
  completions: Completion[];
}

const QuestPage: React.FC<{ params: { slug: string; }; }> = ( { params } ) =>
{
  const dispatch: AppDispatch = useDispatch();
  const questId: string = params.slug;
  const [ referral, setReferral ] = useState<string>( 'Please Generate Referral' );
  const [ selectedCard, setSelectedCard ] = useState<CardData | null>( null );
  const [ submissions, setSubmissions ] = useState<{ [ key: string ]: string | File; }>( {} );
  const [ progress, setProgress ] = useState<any>( 0 );
  const [ allTasksCompletedCalled, setAllTasksCompletedCalled ] = useState<boolean>( false );

  const user = useSelector( ( state: RootState ) => state.login.user );
  const tasks = useSelector( ( state: RootState ) => state.task.currentTask );

  useEffect( () =>
  {
    dispatch( fetchTaskById( questId ) );
  }, [ dispatch, questId ] );

  useEffect( () =>
  {
    const completedTasks = tasks.filter( ( task ) => isTaskCompleted( task ) ).length;
    const progressPercentage = ( ( completedTasks / tasks.length ) * 100 );
    
    setProgress( progressPercentage.toFixed(2) );
    if ( progressPercentage === 100 && !allTasksCompletedCalled )
    {
      handleAllTasksCompleted();
    }
  }, [ tasks, allTasksCompletedCalled ] );

  const handleCardClick = useCallback( ( card: CardData ) =>
  {
    setSelectedCard( card );
    setSubmissions( {} );
  }, [] );

  const handleClosePopup = useCallback( () =>
  {
    setSelectedCard( null );
    setSubmissions( {} );
  }, [] );

  const handleSubmission = useCallback( async ( taskId: string, submissionData?: { [ key: string ]: string; } ) =>
  {
    try
    {
      let submission = submissionData || submissions[ taskId ];
      console.log( "submission from submission" );
      // Validate submission based on task type
      if ( !validateSubmission( selectedCard?.type, submission ) )
      {
        console.log(submission)
        notify( "warn","Invalid submission. Please check your input." );
        return;
      }

      if ( selectedCard?.type === "File upload" && submissions[ taskId ] instanceof File )
      {
        const uploadSuccess = await handleUpload( submissions[ taskId ] as File );

        if ( !uploadSuccess )
        {
          console.error( "File upload failed" );
          notify( "error","File upload failed" );
          return;
        }

        const uploadLink = `https://${ process.env.NEXT_PUBLIC_S3_BUCKET_NAME }.s3.amazonaws.com/taskByUser/${ ( submissions[ taskId ] as File ).name }`;
        submission = uploadLink;
      }

      const data = {
        taskId,
        userId: user?._id,
        userName: user?.displayName,
        submission: JSON.stringify( submission ),
      };
      await dispatch( completeTask( data ) );
      window.location.reload();
    } catch ( error )
    {
      console.log( "Error in completing the task:", error );
      notify( "error","An error occurred while submitting the task. Please try again." );
    }
  }, [ dispatch, selectedCard, submissions, user ] );

  const handleFileInputChange = useCallback( ( taskId: string, file: File ) =>
  {
    setSubmissions( prev => ( { ...prev, [ taskId ]: file } ) );
  }, [] );

  const validateSubmission = ( taskType: string | undefined, submission: any ): boolean =>
  {

    switch ( taskType )
    {
      case "Text":
        return typeof submission === 'string' && submission.trim().length > 0;
      case "Number":
        return !isNaN( Number( submission ) ) && submission !== '';
      case "URL":
        const urlPattern = /^(http)/;
        return urlPattern.test( submission );
      case "File upload":
        return submission instanceof File && submission.size > 0;
      case "Invites":
        return typeof submission === 'string' && submission.trim().length > 0;
      case "Visit Link":
        return true;
      case "Poll":
      case "Quiz":
        return typeof submission === 'object' && Object.keys( submission ).length > 0;
      default:
        console.log( "validation is complete" );
        return false;
    }
  };


  const handleGenerateReferral = useCallback( async () =>
  {
    try
    {
      const formData = {
        userId: user?._id,
        questId,
        taskId: selectedCard?._id,
        expireDate: 5
      };
      const response = await axios.post( `${ process.env.NEXT_PUBLIC_SERVER_URL }/task/get/referral`, formData, {
        withCredentials: true,
      } );
      setReferral( response.data );
    } catch ( error )
    {
      console.error( "Error generating referral:", error );
    }
  }, [ user?._id, questId, selectedCard?._id ] );

  const getUploadUrl = useCallback( async ( fileName: string ) =>
  {
    try
    {
      const response = await axios.post( `${ process.env.NEXT_PUBLIC_SERVER_URL }/aws/generate-upload-url`, {
        folder: 'taskByUser',
        fileName,
      } );
      return response.data.url;
    } catch ( error )
    {
      console.error( 'Error getting upload URL:', error );
      throw error;
    }
  }, [] );

  const handleUpload = useCallback( async ( file: File ) =>
  {
    if ( !file ) return false;
    try
    {
      const uploadUrl = await getUploadUrl( file.name );
      if ( !uploadUrl ) return false;
      const res = await axios.put( uploadUrl, file, {
        headers: { 'Content-Type': file.type },
      } );
      return res.status === 200;
    } catch ( error )
    {
      console.log( 'Error uploading file:', error );
      return false;
    }
  }, [ getUploadUrl ] );

  const handleInputChange = useCallback( ( questionIndex: string, value: string ) =>
  {
    setSubmissions( prev => ( { ...prev, [ questionIndex ]: value } ) );
  }, [] );

  const isTaskCompleted = useCallback( ( task: CardData ) =>
  {
    return task.completions?.some( completion => completion?.user === user?._id );
  }, [ user?._id ] );

  const handleAllTasksCompleted = useCallback( async () =>
  {
    if ( allTasksCompletedCalled ) return;
    setAllTasksCompletedCalled( true );
    try
    {
      const response = await axios.post( `${ process.env.NEXT_PUBLIC_SERVER_URL }/task/claim`, {
        userId: user?._id,
        questId,
      } );
      console.log( "All tasks completed response:", response.data );
      // Reset the flag if you want to allow future calls
      // setAllTasksCompletedCalled(false);
    } catch ( error ) 
    {
      console.error( "Error making POST request for completed tasks:", error );
      setAllTasksCompletedCalled( false ); // Reset on error to allow retry
    }
  }, [ questId, user?._id, allTasksCompletedCalled ] );

  return (
    <div className="bg-[#000000] text-white h-full">
      <div className="mx-4 lg:mx-20">
        <Header />
        { tasks.length > 0 ? (
          <>
            <StatusBar progress={ progress } />
            <TaskCards tasks={ tasks } isTaskCompleted={ isTaskCompleted } onCardClick={ handleCardClick } />
          </>
        ) : (
          <NoTasks />
        ) }
      </div>
      { selectedCard && (
        <Popup
          selectedCard={ selectedCard }
          isCompleted={ isTaskCompleted( selectedCard ) }
          submissions={ submissions }
          onClose={ handleClosePopup }
          onSubmit={ handleSubmission }
          onFileInputChange={ handleFileInputChange }
          onInputChange={ handleInputChange }
          onGenerateReferral={ handleGenerateReferral }
          referral={ referral }
          validateSubmission={ validateSubmission }
        />
      ) }
    </div>
  );
};


const Header: React.FC = () => (
  <>
    <div className="text-2xl pt-10 font-bold">
      <h1>My Quest</h1>
    </div>
    <div className="max-w-[600px] pt-4 text-white">
      <p>Complete the following tasks to progress in your quest.</p>
    </div>
  </>
);

const StatusBar: React.FC<{ progress: number; }> = ( { progress } ) => (
  <>
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className="max-w-[600px] pt-4 text-gray-400 flex justify-end">
        <p className="text-white mb-6">Monitor task completions and submissions.</p>
      </div>
      <div className="md:pt-6 md:inline-block">
        <button
          className="bg-gray-700 hover:bg-gray-900 text-white font-medium w-full md:w-auto px-5 py-2 rounded-3xl"
          onClick={ () => window.history.back() }
        >
          Go Back
        </button>
      </div>
    </div>

    <div className="banner ">
      <h1 className="text-2xl inline mr-8 pb-10 ">Getting started</h1>
      <span className="text-sm font-medium text-green-700 pb-10 dark:text-white">
        { progress }%
      </span>
      <Progress
        isStriped
        aria-label="Loading..."
        color="success"
        value={ progress }
      />
    </div>

  </>
);


const NoTasks: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-[60vh]">
    <div className="text-center bg-white/5 p-8 rounded-xl shadow-lg max-w-md w-full">
      <svg
        className="mx-auto h-12 w-12 text-gray-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
      <h3 className="text-xl font-medium text-white mb-2">No tasks available</h3>
      <p className="text-gray-400 mb-6">Get started by creating a new task for this quest.</p>
      <button
        className="bg-gray-700 hover:bg-gray-900 text-white font-medium w-full md:w-auto px-5 py-2 rounded-3xl"
        onClick={ () => window.history.back() }
      >
        Go Back
      </button>
    </div>
  </div>
);

const TaskCards: React.FC<{
  tasks: CardData[],
  isTaskCompleted: ( task: CardData ) => boolean,
  onCardClick: ( task: CardData ) => void;
}> = ( { tasks, isTaskCompleted, onCardClick } ) => (
  <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 text-white">
    { tasks.map( ( task: CardData, index: number ) => (
      <div
        key={ task._id || index }
        className={ `border border-gray-200 bg-white/5 sm:p-2 lg:py-4 rounded-xl h-full w-full shadow-lg group hover:scale-105 hover:bg-white/10 ${ isTaskCompleted( task ) ? 'opacity-50' : ''
          }` }
        onClick={ () => onCardClick( task ) }
      >
        <div className="flex gap-3 items-center justify-between mx-2">
          <div className="basis-[65%]">
            <h1 className="text-lg font-semibold text-gray-200 group-hover:text-white">
              { task.taskName || task.type }
            </h1>
            <p className="text-sm text-gray-400">
              { task.taskDescription || 'No description' }
            </p>
          </div>
          <div className="basis-[25%]">
            <div className="relative flex justify-center">
              <Image
                src={ task.image || "https://zealy.io/nstatic/xp-reward.webp" }
                alt="Task Image"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 bg-purple-500 opacity-40 text-white px-2 rounded-lg flex justify-center mr-2.5">
                <p>{ task?.category }</p>
              </div>
            </div>
          </div>
        </div>
        { isTaskCompleted( task ) && (
          <div className="mt-2 text-green-400 text-sm">Completed</div>
        ) }
      </div>
    ) ) }
  </div>
);

const Popup: React.FC<{
  selectedCard: CardData;
  isCompleted: boolean;
  submissions: { [ key: string ]: string | File; };
  referral: string;
  onGenerateReferral: () => void;
  onClose: () => void;
  onSubmit: ( taskId: string, submissionData?: { [ key: string ]: string; } ) => void;
  onFileInputChange: ( taskId: string, file: File ) => void;
  onInputChange: ( questionIndex: string, value: string ) => void;
  validateSubmission: ( taskType: string | undefined, submission: any ) => boolean;
}> = ( {
  selectedCard,
  isCompleted,
  submissions,
  onClose,
  onSubmit,
  onFileInputChange,
  onInputChange,
  onGenerateReferral,
  referral,
  validateSubmission
} ) =>
  {

    const handleSubmit = () =>
    {
      if ( validateSubmission( selectedCard.type, submissions[ selectedCard._id ] ) )
      {
        onSubmit( selectedCard._id );
      } else
      {
        notify( "warn","Invalid input.Please check your submission." );
        console.log(
          "Submission is invalid. Please check the submission and try again."
        );
      }
    };

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative p-4 w-full max-w-md">
          <div className="relative bg-[#282828] rounded-3xl shadow text-white">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <div className="flex items-center">
                <div className="mx-2">
                  <h3 className="text-lg font-semibold text-white">
                    { selectedCard.taskName }
                  </h3>
                </div>
              </div>
              <button
                onClick={ onClose }
                className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              { isCompleted ? (
                <div className="text-green-400 text-center py-4">
                  You have already completed this task!
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-100 mb-4">
                    { selectedCard.taskDescription }
                  </p>

                  { selectedCard.type === "Visit Link" && (
                    <div>
                      <a
                        href={ selectedCard.visitLink }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline"
                        onClick={ () => onSubmit( selectedCard._id, { visited: "true" } ) }
                      >
                        Visit this link
                      </a>
                    </div>
                  ) }

                  { ( selectedCard.type === "Poll" || selectedCard.type === "Quiz" ) && (
                    <QuizPollCarousel
                      selectedCard={ selectedCard }
                      handleSubmit={ ( answers ) => onSubmit( selectedCard._id, answers ) }
                    />
                  ) }

                    { selectedCard.type === "Invites" && (
                      <div className="flex flex-col">
                        <p>Referral Code:</p>
                        <div className="flex justify-center items-center space-x-2 my-2">
                          <input
                            type="text"
                            value={ referral }
                            readOnly
                            className="text-xl font-bold bg-gray-800 text-white border border-gray-700 rounded px-3 py-2 w-full"
                          />
                          <button
                            onClick={ () =>
                            {
                              navigator.clipboard.writeText( referral );
                              notify( "default",'Referral code copied to clipboard!' );
                            } }
                            className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </div>
                        <button
                          className="p-2 rounded-2xl bg-purple-600 text-white px-4 m-3 hover:bg-purple-700 transition-colors duration-300"
                          onClick={ onGenerateReferral }
                        >
                          Generate Referral
                        </button>
                      </div>
                    ) }

                  { selectedCard.type === "File upload" && (
                    <div>
                      <input
                        type="file"
                        className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                        onChange={ ( e ) =>
                        {
                          const file = e.target.files?.[ 0 ];
                          if ( file ) onFileInputChange( selectedCard._id, file );
                        } }
                      />
                    </div>
                  ) }

                  { ( selectedCard.type === "Text" || selectedCard.type === "Number" ) && (
                    <input
                      type={ `${ selectedCard.type.toLowerCase() }` }
                      className="w-full p-2 border rounded-lg mt-2 bg-[#282828]"
                      placeholder={ `Please Enter ${ selectedCard.type }` }
                      value={ submissions[ selectedCard._id ] as string || '' }
                      onChange={ ( e ) => onInputChange( selectedCard._id, e.target.value ) }
                    />
                  ) }


                  { selectedCard.type === "URL" && (
                    <input
                      type="url"
                      className="w-full p-2 border rounded-lg mt-2 bg-[#282828]"
                      placeholder="https://"
                      // value={ submissions[ selectedCard._id ] as string || '' }
                      onChange={ ( e ) =>
                        onInputChange( selectedCard._id, e.target.value )

                      }
                    />
                  ) }

                  <button
                    className="m-4 bg-[#ff2a2a] text-white px-4 py-2 rounded hover:bg-[#484848]"
                    onClick={ onClose }
                  >
                    Cancel
                  </button>

                  { selectedCard.type !== "Visit Link" && selectedCard.type !== "Poll" && selectedCard.type !== "Quiz" && selectedCard.type !== "Invites" && (
                    <button
                      className="m-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                      onClick={ handleSubmit }
                    >
                      Submit
                    </button>
                  ) }
                </>
              ) }
            </div>
          </div>
        </div>
      </div >
    );
  };

export default QuestPage;