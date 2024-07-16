"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskOptionsSuccess } from "@/redux/reducer/taskOptionSlice";
import { createTask } from "@/redux/reducer/taskSlice";
import { fetchUserData } from "@/redux/reducer/authSlice";
import { useProtectedRoute } from "@/utils/privateRoute";
import { AppDispatch } from "@/redux/store";
import { notify } from "@/utils/notify";
import Image from "next/image";

interface IQuiz
{
  question: string;
  options: string[];
  correctAnswer: string;
}

interface IPoll
{
  question: string;
  options: string[];
}

interface TaskOption
{
  name: string;
  icon: string;
  description: string;
  category: string;
  referral: string;
  visitLink?: string;
  quizzes?: IQuiz[];
  polls?: IPoll[];
  inviteLink?: string;
  uploadLink?: string;
  response?: string | number;
}

const AddTask = ( { params }: { params: { id: string; }; } ) =>
{
  useProtectedRoute( "kol" );
  const dispatch: AppDispatch = useDispatch();
  const [ isOpen, setIsOpen ] = useState( true );
  const [ selectedTask, setSelectedTask ] = useState<TaskOption | null>( null );
  const [ quizzes, setQuizzes ] = useState<Array<IQuiz>>( [
    { question: "", options: [ "", "", "", "" ], correctAnswer: "" },
  ] );
  const [ polls, setPolls ] = useState<Array<IPoll>>( [
    { question: "", options: [ "", "" ] },
  ] );
  const [ taskName, setTaskName ] = useState( "" );
  const [ taskDescription, setTaskDescription ] = useState( "" );

  const { taskOptions, categories } = useSelector( ( state: any ) => state.taskOption );
  const KolId = useSelector( ( state: any ) => state?.login?.user?._id );

  useEffect( () =>
  {
    dispatch( fetchUserData() );
    dispatch( getTaskOptionsSuccess() );
  }, [ dispatch ] );

  const openTaskModal = ( task: TaskOption ) =>
  {
    setSelectedTask( task );
    if ( task.name === "Poll" )
    {
      setPolls( [ { question: "", options: [ "", "" ] } ] );
    } else if ( task.name === "Quiz" )
    {
      setQuizzes( [ { question: "", options: [ "", "", "", "" ], correctAnswer: "" } ] );
    }
  };
  const closeTaskModal = () => setSelectedTask( null );

  const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>
  {
    if ( !selectedTask ) return;

    const value = e.target.value;

  //   // Regular expression to validate URL format
  //   const urlPattern = new RegExp(
  //     '^(http)'  // protocol
  //     // '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
  //     // '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  //     // '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  //     // '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  //     // '(\\#[-a-z\\d_]*)?$', 'i' // fragment locator
  //   );

  //   if ( urlPattern.test( value ) ) 
  //   {
  //     const updatedField = {
  //       "Visit Link": { visitLink: value },
  //     }[ selectedTask.name ] || {};

  //     setSelectedTask( { ...selectedTask, ...updatedField } );
  //   } else
  //   {
  //     // Handle invalid URL, e.g., show an error message
  //     notify('error', "Please enter a valid url")
  //     console.error( 'Invalid URL' );
  //     return
  //   }
  // };

  const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>
  {
    if ( !selectedTask ) return;
    const value = e.target.value;
    const updatedField = {
      "Visit Link": { visitLink: value },
    }[ selectedTask.name ] || {};
    setSelectedTask( { ...selectedTask, ...updatedField } );
  };


  const handleAddTask = async () =>
  {
    if ( !selectedTask ) return;

    const baseTask = {
      type: selectedTask.name,
      category: selectedTask.category,
      questId: params.id,
      creator: KolId,
      taskName,
      taskDescription,
    };

    const taskDataMap = {
      "Visit Link": { ...baseTask, visitLink: selectedTask.visitLink },
      "Poll": {
        ...baseTask,
        polls: polls.map( poll => ( {
          question: poll.question,
          options: poll.options,
        } ) ),
      },
      "Quiz": {
        ...baseTask,
        quizzes: quizzes.map( quiz => ( {
          question: quiz.question,
          options: quiz.options,
          correctAnswer: quiz.correctAnswer,
        } ) ),
      },
    };

    const taskData = taskDataMap[ selectedTask.name ] || baseTask;

    try
    {
      const response = await dispatch( createTask( taskData ) );
      notify( "success", response?.payload?.msg || "Task created successfully" );
      closeTaskModal();
    } catch ( error )
    {
      console.error( "Error creating task:", error );
      notify( "error", "Error creating task" );
    }
  };

  const addNewQuiz = () =>
  {
    setQuizzes( [ ...quizzes, { question: "", options: [ "", "", "", "" ], correctAnswer: "" } ] );
  };

  const addNewPoll = () =>
  {
    setPolls( [ ...polls, { question: "", options: [ "", "" ] } ] );
  };

  const handleQuizQuestionChange = ( quizIndex: number, value: string ) =>
  {
    const newQuizzes = [ ...quizzes ];
    newQuizzes[ quizIndex ].question = value;
    setQuizzes( newQuizzes );
  };

  const handleQuizOptionChange = ( quizIndex: number, optionIndex: number, value: string ) =>
  {
    const newQuizzes = [ ...quizzes ];
    newQuizzes[ quizIndex ].options[ optionIndex ] = value;
    setQuizzes( newQuizzes );
  };

  const handleQuizCorrectAnswerChange = ( quizIndex: number, value: string ) =>
  {
    const newQuizzes = [ ...quizzes ];
    newQuizzes[ quizIndex ].correctAnswer = value;
    setQuizzes( newQuizzes );
  };

  const handlePollQuestionChange = ( pollIndex: number, value: string ) =>
  {
    const newPolls = [ ...polls ];
    newPolls[ pollIndex ].question = value;
    setPolls( newPolls );
  };

  const handlePollOptionChange = ( pollIndex: number, optionIndex: number, value: string ) =>
  {
    const newPolls = [ ...polls ];
    newPolls[ pollIndex ].options[ optionIndex ] = value;
    setPolls( newPolls );
  };

  const addPollOption = ( pollIndex: number ) =>
  {
    const newPolls = [ ...polls ];
    newPolls[ pollIndex ].options.push( "" );
    setPolls( newPolls );
  };

  const removePollOption = ( pollIndex: number, optionIndex: number ) =>
  {
    const newPolls = [ ...polls ];
    if ( newPolls[ pollIndex ].options.length > 2 )
    {
      newPolls[ pollIndex ].options.splice( optionIndex, 1 );
      setPolls( newPolls );
    }
  };

  return (
    <>


      { isOpen && (
        <div className=" inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative p-4 w-full max-w-4xl">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl">
              <div className="flex items-center justify-between p-5 border-b border-gray-700 bg-gray-800 rounded-t-3xl">
                <h3 className="text-2xl font-bold text-white">Find a task type</h3>
                <button
                  onClick={ () => window.history.back() }
                  className="text-gray-400 bg-transparent hover:bg-gray-700 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>


              <div className="flex flex-col md:flex-row">
                <div
                  className="p-4 md:p-5 flex flex-col gap-4 bg-[#141414] text-white w-full md:w-1/2" >
                  { categories.slice( 0, Math.ceil( categories.length / 2 ) ).map( ( category: string ) => (
                    <div key={ category }>

                      <div className="mx-4">
                        <h4 className="text-xl font-medium mb-2 text-gray-400 ">{ category }</h4>
                      </div>
                      <div className="space-y-2 mb-7 grid gap-4 sm:grid-cols-1">
                        { taskOptions
                          .filter( ( task: any ) => task.category === category )
                          .map( ( task: any, index: any ) => (
                            <div
                              key={ index }
                              className="flex items-center p-3 text-base font-medium rounded-3xl dark:text-white cursor-pointer hover:bg-[#272A2A] text-white shadow"
                              onClick={ () => openTaskModal( task ) }
                            >

                              <div className="flex items-center justify-center  mr-3">
                                <Image
                                  src={ task.icon }
                                  alt={ task.name }
                                  // width={40}
                                  // height={40}
                                  className="flex-shrink-0 h-12 w-12 rounded-full object-cover"
                                />
                              </div>

                              <div className="flex-1 ">
                                <h3>{ task.name }</h3>
                                <div className="text-sm  ">
                                  <p className="text-gray-400"> { task.description } </p>
                                </div>
                              </div>
                            </div>

                          ) ) }
                      </div>
                    </div>
                  )
                  ) }
                </div>

                <div
                  className="p-4 md:p-5 flex flex-col gap-4 bg-[#141414] text-white w-full md:w-1/2" >
                  { categories.slice( Math.ceil( categories.length / 2 ) ).map( ( category: string ) => (
                    <div key={ category }>

                      <div className="mx-4">
                        <h4 className="text-xl font-medium mb-2 text-gray-400 ">{ category }</h4>
                      </div>

                      <div className="space-y-2 mb-7 grid gap-4 sm:grid-cols-1">
                        { taskOptions
                          .filter( ( task: any ) => task.category === category )
                          .map( ( task: any, index: any ) => (
                            <div
                              key={ index }
                              className="flex items-center p-3 text-base font-medium rounded-3xl dark:text-white cursor-pointer hover:bg-[#272A2A] text-white shadow"
                              onClick={ () => openTaskModal( task ) }
                            >

                              <div className="flex items-center justify-center  mr-3">
                                <Image
                                  src={ task.icon }
                                  alt={ task.name }
                                  // width={40}
                                  // height={40}
                                  className="flex-shrink-0 h-12 w-12 rounded-full object-cover"
                                />
                              </div>

                              <div className="flex-1 ">
                                <h3>{ task.name }</h3>
                                <div className="text-sm  ">
                                  <p className="text-gray-400"> { task.description } </p>
                                </div>
                              </div>
                            </div>

                          ) ) }
                      </div>
                    </div>
                  )
                  ) }
                </div>
              </div>
            </div>
          </div>
        </div>
      ) }

      { selectedTask && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative p-4 w-full max-w-md max-h-[90vh] flex">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl text-white w-full flex flex-col">
              <div className="flex items-center justify-between p-5 border-b border-gray-700">
                <div className="flex items-center">
                  <Image
                    src={ selectedTask.icon }
                    alt=""
                    className="h-12 w-12 object-cover rounded-full mr-4"
                  />
                  <h3 className="text-2xl font-bold">{ selectedTask.name }</h3>
                </div>
                <button
                  onClick={ closeTaskModal }
                  className="text-gray-400 bg-transparent hover:bg-gray-700 hover:text-white rounded-lg text-sm p-1.5"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>

              <div className="p-6 space-y-6 overflow-y-auto flex-grow">
                <p className="text-gray-300">{ selectedTask.description }</p>

                <div className="space-y-4">
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                    placeholder="Task Name"
                    onChange={ ( e ) => setTaskName( e.target.value ) }
                  />
                  <textarea
                    className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                    placeholder="Task Description"
                    onChange={ ( e ) => setTaskDescription( e.target.value ) }
                    rows={ 4 }
                  />
                </div>

                {/* Task-specific inputs */ }
                { selectedTask.name === "Visit Link" && (
                  <input
                    type="url"
                    className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                    placeholder="https://"
                    onChange={ handleInputChange }
                  />
                ) }

                { selectedTask.name === "Poll" && (
                  <div className="space-y-4">
                    { polls.map( ( poll, pollIndex ) => (
                      <div key={ pollIndex } className="bg-gray-800 p-4 rounded-lg space-y-3">
                        <h3 className="text-lg font-bold">Question { pollIndex + 1 }</h3>
                        <input
                          type="text"
                          className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                          placeholder="Enter poll question"
                          value={ poll.question }
                          onChange={ ( e ) => handlePollQuestionChange( pollIndex, e.target.value ) }
                        />
                        { poll.options.map( ( option, optionIndex ) => (
                          <div key={ optionIndex } className="flex items-center space-x-2">
                            <input
                              type="text"
                              className="flex-grow p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                              placeholder={ `Option ${ optionIndex + 1 }` }
                              value={ option }
                              onChange={ ( e ) => handlePollOptionChange( pollIndex, optionIndex, e.target.value ) }
                            />
                            { optionIndex > 1 && (
                              <button
                                onClick={ () => removePollOption( pollIndex, optionIndex ) }
                                className="p-2 bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                              </button>
                            ) }
                          </div>
                        ) ) }
                        <button
                          onClick={ () => addPollOption( pollIndex ) }
                          className="mt-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                        >
                          Add Option
                        </button>
                      </div>
                    ) ) }
                    <button
                      onClick={ addNewPoll }
                      className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                      Add Poll Question
                    </button>
                  </div>
                ) }

                { selectedTask.name === "Quiz" && (
                  <div className="space-y-6">
                    { quizzes.map( ( quiz, quizIndex ) => (
                      <div key={ quizIndex } className="bg-gray-800 p-4 rounded-lg space-y-3">
                        <h3 className="text-lg font-bold">Question { quizIndex + 1 }</h3>
                        <input
                          type="text"
                          className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                          placeholder="Enter quiz question"
                          value={ quiz.question }
                          onChange={ ( e ) => handleQuizQuestionChange( quizIndex, e.target.value ) }
                        />
                        { quiz.options.map( ( option, optionIndex ) => (
                          <input
                            key={ optionIndex }
                            type="text"
                            className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                            placeholder={ `Choice ${ optionIndex + 1 }` }
                            value={ option }
                            onChange={ ( e ) => handleQuizOptionChange( quizIndex, optionIndex, e.target.value ) }
                          />
                        ) ) }
                        <input
                          type="text"
                          className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
                          placeholder="Correct answer"
                          value={ quiz.correctAnswer }
                          onChange={ ( e ) => handleQuizCorrectAnswerChange( quizIndex, e.target.value ) }
                        />
                      </div>
                    ) ) }
                    <button
                      onClick={ addNewQuiz }
                      className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                      Add Quiz Question
                    </button>
                  </div>
                ) }

                { ( selectedTask.name === "Text" || selectedTask.name === "Number" || selectedTask.name === "URL" ) && (
                  <p className="text-center text-lg">
                    In this task, the user will respond with a { selectedTask.name.toLowerCase() }.
                  </p>
                ) }

                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                    onClick={ closeTaskModal }
                  >
                    Cancel
                  </button>
                  <button
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                    onClick={ handleAddTask }
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      ) }
    </>
  );
};


export default AddTask;



