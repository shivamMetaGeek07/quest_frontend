"use client";
import { fetchQuestById } from "@/redux/reducer/questSlice";
import { completeTask, fetchTaskById } from "@/redux/reducer/taskSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Completion
{
  user: string;
  completedAt: string;
  submission: string;
}

interface CardData
{
  _id: string;
  image: string;
  name: string;
  description: string;
  type: string;
  category: string;
  visitLink?: string;
  question?: string;
  options?: string[];
  correctAnswer?: string;
  inviteLink?: string;
  uploadLink?: string;
  completions: Completion[];
}

const QuestPage = ( { params }: { params: { slug: string; }; } ) =>
{
  const dispatch:AppDispatch = useDispatch();
  const questId: string = params.slug;
  const [ selectedCard, setSelectedCard ] = useState<CardData | null>( null );
  const [ submission, setSubmission ] = useState( "" );
  const user = useSelector( ( state: RootState ) => state.login.user );
  const tasks = useSelector( ( state: any ) => state.task.currentTask );

  useEffect( () =>
  {
    console.log("this is useeffect console")
    dispatch( fetchTaskById( questId ) );
  }, [dispatch,selectedCard] );

  const handleCardClick = ( card: CardData ) =>
  {
    setSelectedCard( card );
    setSubmission( "" );
  };

  const handleClosePopup = () =>
  {
    setSelectedCard( null );
    setSubmission( "" );
  };

  const handleSubmission = ( taskId: string | any ) =>
  {

    try {
      const data: {
        taskId: string;
        userId: string | undefined;
        userName: string | undefined;
        submission: string;
      } = { taskId, submission, userId:user?._id, userName: user?.displayName };
// console.log(data)
      dispatch( completeTask( data ) )
      
    } catch (error) {
      console.log( "error in complting the task :-", error )
    }
    handleClosePopup();
  };


  const isTaskCompleted = ( task: CardData ) =>
  {
    return task.completions?.some( completion => completion?.user === user?._id );
  };

  return (
    <div className="bg-[#000000] text-white h-full">
      <div className="mx-4 lg:mx-20">
        <div className="text-2xl pt-10 font-bold">
          <h1>My Quest</h1>
        </div>
        <div className="max-w-[600px] pt-4 text-white">
          <p>Complete the following tasks to progress in your quest.</p>
        </div>

        { tasks && tasks?.length > 0 && (

          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="max-w-[600px] pt-4 text-gray-400 flex justify-end">
              <p className="text-white mb-6">Monitor task completions and submissions.</p>
            </div>

            <div className="md:pt-6 md:inline-block">
              <button className="bg-gray-700 hover:bg-gray-900 text-white font-medium w-full md:w-auto px-5 py-2 rounded-3xl"
               onClick={()=>window.history.back()}
              >
                Go Back 
              </button>
            </div>
          </div>
        ) }

        { ( tasks.length == 0 ) && (
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
              <button className="bg-gray-700 hover:bg-gray-900 text-white font-medium w-full md:w-auto px-5 py-2 rounded-3xl"
 >
                Go Back
              </button>
            </div>
          </div>
        ) }

        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 text-white">
          { tasks.map( ( task: CardData, index: number ) => (
            <div
              key={ index }
              className={ `border border-gray-200 bg-white/5 sm:p-2 lg:py-4 rounded-xl h-full w-full shadow-lg group hover:scale-105 hover:bg-white/10 ${ isTaskCompleted( task ) ? 'opacity-50' : ''
                }` }
              onClick={ () => handleCardClick( task ) }
            >
              <div className="flex gap-3 items-center justify-between mx-2">
                <div className="text-xl font-medium basis-[65%]">
                  <h1>{ task.type }</h1>
                </div>
                <div className="basis-[25%]">
                  <div className="relative flex justify-center">
                    <img
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
      </div>

      { selectedCard && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-[#282828] rounded-3xl shadow text-white">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div className="flex items-center">
                  <div className="mx-2">
                    <h3 className="text-lg font-semibold text-white">
                      { selectedCard.name }
                    </h3>
                  </div>
                </div>
                <button
                  onClick={ handleClosePopup }
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
                { isTaskCompleted( selectedCard ) ? (
                  <div className="text-green-400 text-center py-4">
                    You have already completed this task!
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-gray-100 mb-4">
                      { selectedCard.description }
                    </p>
                    { selectedCard.type === "Visit Link" && (
                      <div>
                        <a
                          href={selectedCard.visitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white underline"
                          onClick={() => setSubmission(selectedCard?.visitLink)}
                        >
                          Visit this link
                        </a>
                       
                      </div>
                    )}
                { selectedCard.type === "Poll" && (
                  <div>
                    <p className="mb-2">{ selectedCard.question }</p>
                    { selectedCard.options?.map( ( option, index ) => (
                      <div key={ index } className="mb-2">
                        <input
                          type="radio"
                          id={ `option-${ index }` }
                          name="pollOption"
                          value={ option }
                          onChange={ ( e ) => setSubmission( e.target.value ) }
                          className="mr-2"
                        />
                        <label htmlFor={ `option-${ index }` }>{ option }</label>
                      </div>
                    ) ) }
                  </div>
                ) }
                { selectedCard.type === "Quiz" && (
                  <div>
                    <p className="mb-2">{ selectedCard.question }</p>
                    { selectedCard.options?.map( ( option, index ) => (
                      <div key={ index } className="mb-2">
                        <input
                          type="radio"
                          id={ `option-${ index }` }
                          name="quizOption"
                          value={ option }
                          onChange={ ( e ) => setSubmission( e.target.value ) }
                          className="mr-2"
                        />
                        <label htmlFor={ `option-${ index }` }>{ option }</label>
                      </div>
                    ) ) }
                  </div>
                ) }
                { selectedCard.type === "Invites" && (
                  <div>
                    <p>Share this invite link:</p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg mt-2 bg-[#282828]"
                      value={ selectedCard.inviteLink }
                      readOnly
                    />
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg mt-2 bg-[#282828]"
                      placeholder="Enter invited user's username"
                      value={ submission }
                      onChange={ ( e ) => setSubmission( e.target.value ) }
                    />
                  </div>
                ) }
                { selectedCard.type === "File upload" && (
                  <div>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                      placeholder="Enter upload link"
                      value={ submission }
                      onChange={ ( e ) => setSubmission( e.target.value ) }
                    />
                  </div>
                ) }
                <button
                  className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                  onClick={ () => handleSubmission( selectedCard._id ) }
                >
                  Submit
                </button>
              </>
                )}
            </div>
          </div>
        </div>
        </div>
  )
}
    </div >
  );
};

export default QuestPage;