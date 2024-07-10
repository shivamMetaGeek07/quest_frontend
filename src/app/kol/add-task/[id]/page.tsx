"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getTaskOptionsSuccess } from "@/redux/reducer/taskOptionSlice";
import { createTask } from "@/redux/reducer/taskSlice";
import { fetchUserData } from "@/redux/reducer/authSlice";
import { useProtectedRoute } from "@/utils/privateRoute";
import { AppDispatch } from "@/redux/store";
import { useRouter } from 'next/navigation';

interface TaskOption
{
  name: string;
  icon: string;
  description: string;
  category: string;
  visitLink?: string;
  question?: string;
  options?: string[];
  correctAnswer?: string;
  inviteLink?: string;
  uploadLink?: string;
  response?: string | number;
}

interface PollOption
{
  text: string;
}

const AddTask = ( { params }: { params: { id: string; }; } ) =>
{
  useProtectedRoute( "kol" );
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const [ isOpen, setIsOpen ] = useState( true );
  const [ selectedTask, setSelectedTask ] = useState<TaskOption | null>( null );
  const [ createdTasks, setCreatedTasks ] = useState<any[]>( [] );

  const [ pollTasks, setPollTasks ] = useState<{ question: string; options: PollOption[]; }[]>( [] );
  const [ quizTasks, setQuizTasks ] = useState<{ question: string; options: { text: string; }[]; correctAnswer: string; }[]>( [] );

  const { taskOptions, categories } = useSelector( ( state: any ) => state.taskOption );
  const KolId = useSelector( ( state: any ) => state?.login?.user?._id );

  useEffect( () =>
  {
    dispatch( fetchUserData() );
    dispatch( getTaskOptionsSuccess() );
  }, [ dispatch ] );

  const toggleModal = () =>
  {
    if ( isOpen )
    {
      router.back(); 
    } else
    {
      setIsOpen( true );
    }
  };

  const openTaskModal = ( task: TaskOption ) =>
  {
    setSelectedTask( task );
    if ( task.name === "Poll" )
    {
      setPollTasks( [ { question: "", options: [ { text: "" }, { text: "" } ] } ] );
    } else if ( task.name === "Quiz" )
    {
      setQuizTasks( [ { question: "", options: [ { text: "" }, { text: "" }, { text: "" }, { text: "" } ], correctAnswer: "" } ] );
    }
  };

  const closeTaskModal = () =>
  {
    setSelectedTask( null );
    setPollTasks( [] );
    setQuizTasks( [] );
  };

  const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>
  {
    if ( !selectedTask ) return;

    const value = e.target.value;
    let updatedField = {};
    switch ( selectedTask.name.toLowerCase() )
    {
      case 'visit link':
        updatedField = { visitLink: value };
        break;
      case 'invites':
        updatedField = { inviteLink: value };
        break;
      case 'quiz':
        updatedField = { correctAnswer: value };
        break;
      default:
        updatedField = {};
    }

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
    };

    let taskData;
    switch ( selectedTask.name.toLowerCase() )
    {
      case 'poll':
        taskData = pollTasks.map( poll => ( {
          ...baseTask,
          question: poll.question,
          options: poll.options.map( option => option.text ),
          correctAnswer: ""
        } ) );
        break;
      case 'quiz':
        taskData = quizTasks.map( quiz => ( {
          ...baseTask,
          question: quiz.question,
          options: quiz.options.map( option => option.text ),
          correctAnswer: quiz.correctAnswer
        } ) );
        break;
      case 'visit link':
        taskData = { ...baseTask, visitLink: selectedTask.visitLink };
        break;
      case 'invites':
        taskData = { ...baseTask, inviteLink: selectedTask.inviteLink };
        break;
      case 'file upload':
      case 'text':
      case 'number':
      case 'url':
        taskData = { ...baseTask };
        break;
      default:
        taskData = { ...baseTask };
        break;
    }

    try
    {
      if ( Array.isArray( taskData ) )
      {
        for ( const task of taskData )
        {
          const response = await dispatch( createTask( task ) );
          console.log( "Task created successfully:", response?.payload?.new_task );
          setCreatedTasks( prev => [ ...prev, response?.payload?.new_task ] );
        }
      } else
      {
        const response = await dispatch( createTask( taskData ) );
        console.log( "Task created successfully:", response?.payload?.new_task );
        setCreatedTasks( prev => [ ...prev, response?.payload?.new_task ] );
      }
      alert( "Tasks created successfully" );
      closeTaskModal();
    } catch ( error )
    {
      console.error( "Error creating task:", error );
      alert( "Error creating task" );
    }
  };

  const addNewPoll = () =>
  {
    setPollTasks( [ ...pollTasks, { question: "", options: [ { text: "" }, { text: "" } ] } ] );
  };

  const addNewQuiz = () =>
  {
    setQuizTasks( [ ...quizTasks, { question: "", options: [ { text: "" }, { text: "" }, { text: "" }, { text: "" } ], correctAnswer: "" } ] );
  };

  const updatePoll = ( index: number, updatedPoll: { question: string; options: PollOption[]; } ) =>
  {
    const newPolls = [ ...pollTasks ];
    newPolls[ index ] = updatedPoll;
    setPollTasks( newPolls );
  };

  const updateQuiz = ( index: number, updatedQuiz: { question: string; options: { text: string; }[]; correctAnswer: string; } ) =>
  {
    const newQuizzes = [ ...quizTasks ];
    newQuizzes[ index ] = updatedQuiz;
    setQuizTasks( newQuizzes );
  };

  return (
    <>
      { !isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-50">
          <button
            onClick={ toggleModal }
            className="text-white justify-center bg-gray-900 hover:bg-gray-600 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 bg-center w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 mx-4 my-4 sm:my-8"
          >
            Add Task
          </button>
        </div>
      ) }

      { isOpen && (
        <div className="inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative p-4 lg:w-3/4 w-full sm:h-full">
            <div className="relative bg-[#121212] rounded-3xl shadow-lg">
              <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-700 bg-[#282828] rounded-xl">
                <h3 className="text-lg font-semibold text-gray-300">
                  Find a task type
                </h3>
                <button
                  onClick={ toggleModal }
                  className="text-white bg-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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

              <div className="flex flex-col md:flex-row">
                { categories.map( ( category: string, categoryIndex: number ) => (
                  <div key={ category } className={ `p-4 md:p-5 flex flex-col gap-4 bg-[#141414] text-white w-full ${ categoryIndex < Math.ceil( categories.length / 2 ) ? 'md:w-1/2' : 'md:w-1/2' }` }>
                    <div className="mx-4">
                      <h4 className="text-xl font-medium mb-2 text-gray-400">{ category }</h4>
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
                            <div className="flex items-center justify-center mr-3">
                              <img
                                src={ task.icon }
                                alt={ task.name }
                                className="flex-shrink-0 h-12 w-12 rounded-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3>{ task.name }</h3>
                              <div className="text-sm">
                                <p className="text-gray-400">{ task.description }</p>
                              </div>
                            </div>
                          </div>
                        ) ) }
                    </div>
                  </div>
                ) ) }
              </div>
            </div>
          </div>
        </div>
      ) }

      { selectedTask && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-gray-600 rounded-lg shadow text-white">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div className="flex items-center">
                  <img
                    src={ selectedTask.icon }
                    alt=""
                    className="h-10 w-10 object-cover rounded-full"
                  />
                  <div className="mx-2">
                    <h3 className="text-lg font-semibold dark:text-white">
                      { selectedTask.name }
                    </h3>
                  </div>
                </div>
                <button
                  onClick={ closeTaskModal }
                  className="text-gray-100 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                <p className="text-sm text-gray-100 mb-4">
                  { selectedTask.description }
                </p>

                { selectedTask.name === "Visit Link" && (
                  <div>
                    <input
                      type="url"
                      className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                      placeholder="https://"
                      onChange={ handleInputChange }
                    />
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                      onClick={ handleAddTask }
                    >
                      Add Visit Link
                    </button>
                  </div>
                ) }

                { selectedTask.name === "Invites" && (
                  <div>
                    <p className="text-white text-center text-lg mb-2">
                      In this task user can Invite to other user
                    </p>
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                      onClick={ handleAddTask }
                    >
                      Add Task to Invite others
                    </button>
                  </div>
                ) }

                { selectedTask.name === "File upload" && (
                  <div>
                    <p className="text-white text-center text-lg mb-2">
                      In this task user can upload a file
                    </p>
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                      onClick={ handleAddTask }
                    >
                      Add Task to Upload file
                    </button>
                  </div>
                ) }

                { selectedTask.name === "Poll" && (
                  <div>
                    { pollTasks.map( ( poll, pollIndex ) => (
                      <div key={ pollIndex } className="mb-4">
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                          placeholder="Enter poll question"
                          value={ poll.question }
                          onChange={ ( e ) => updatePoll( pollIndex, { ...poll, question: e.target.value } ) }
                        />
                        { poll.options.map( ( option, optionIndex ) => (
                          <div key={ optionIndex } className="flex items-center mb-2">
                            <input
                              type="text"
                              className="w-full p-2 border rounded-lg bg-[#282828]"
                              placeholder={ `Option ${ optionIndex + 1 }` }
                              value={ option.text }
                              onChange={ ( e ) =>
                              {
                                const newOptions = [ ...poll.options ];
                                newOptions[ optionIndex ] = { text: e.target.value };
                                updatePoll( pollIndex, { ...poll, options: newOptions } );
                              } }
                            />
                            { optionIndex > 1 && (
                              <button
                                onClick={ () =>
                                {
                                  const newOptions = poll.options.filter( ( _, index ) => index !== optionIndex );
                                  updatePoll( pollIndex, { ...poll, options: newOptions } );
                                } }
                                className="ml-2 text-red-500"
                              >
                                Remove
                              </button>
                            ) }
                          </div>
                        ) ) }
                        <button
                          onClick={ () =>
                          {
                            const newOptions = [ ...poll.options, { text: "" } ];
                            updatePoll( pollIndex, { ...poll, options: newOptions } );
                          } }
                          className="mt-2 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                        >
                          Add Option
                        </button>
                      </div>
                    ) ) }
                    <div className="flex justify-around">
                      <button
                        onClick={ addNewPoll }
                        className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                      >
                        Add Another Poll
                      </button>
                      <button
                        className="mt-4 bg-[#231b1b] text-white px-4 py-2 rounded hover:bg-[#484848]"
                        onClick={ handleAddTask }
                      >
                        Save All Polls
                      </button>
                    </div>
                  </div>
                ) }

                { selectedTask.name === "Quiz" && (
                  <div>
                    { quizTasks.map( ( quiz, quizIndex ) => (
                      <div key={ quizIndex } className="mb-4">
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                          placeholder="Enter quiz question"
                          value={ quiz.question }
                          onChange={ ( e ) => updateQuiz( quizIndex, { ...quiz, question: e.target.value } ) }
                        />
                        { quiz.options.map( ( option, optionIndex ) => (
                          <div key={ optionIndex } className="flex items-center mb-2">
                            <input
                              type="text"
                              className="w-full p-2 border rounded-lg bg-[#282828]"
                              placeholder={ `Choice ${ optionIndex + 1 }` }
                              value={ option.text }
                              onChange={ ( e ) =>
                              {
                                const newOptions = [ ...quiz.options ];
                                newOptions[ optionIndex ] = { text: e.target.value };
                                updateQuiz( quizIndex, { ...quiz, options: newOptions } );
                              } }
                            />
                          </div>
                        ) ) }
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                          placeholder="Correct Answer"
                          value={ quiz.correctAnswer }
                          onChange={ ( e ) => updateQuiz( quizIndex, { ...quiz, correctAnswer: e.target.value } ) }
                        />
                      </div>
                    ) ) }
                    <div className="flex justify-around">
                      <button
                        onClick={ addNewQuiz }
                        className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                      >
                        Add Another Quiz
                      </button>
                      <button
                        className="mt-4 bg-[#231b1b] text-white px-4 py-2 rounded hover:bg-[#484848]"
                        onClick={ handleAddTask }
                      >
                        Save All Quizzes
                      </button>
                    </div>
                  </div>
                ) }

                { ( selectedTask.name === "Text" || selectedTask.name === "Number" || selectedTask.name === "URL" ) && (
                  <div>
                    <p className="text-white text-center text-lg mb-2">
                      In this task user will response with a { selectedTask.name }
                    </p>
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                      onClick={ handleAddTask }
                    >
                      Add Task
                    </button>
                  </div>
                ) }

                { selectedTask.name !== "Poll" && selectedTask.name !== "Quiz" && selectedTask.name !== "Visit Link" && selectedTask.name !== "Invites" && selectedTask.name !== "File upload" && selectedTask.name !== "Text" && selectedTask.name !== "Number" && selectedTask.name !== "URL" && (
                  <>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                      placeholder={ `Enter ${ selectedTask.name.toLowerCase() } details...` }
                      onChange={ handleInputChange }
                    />
                    <button
                      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      onClick={ handleAddTask }
                    >
                      Add Task
                    </button>
                  </>
                ) }
              </div>
            </div>
          </div>
        </div>
      ) }

      { createdTasks.length > 0 && (
        <div className="fixed top-0 left-0 right-0 bg-gray-800 p-4">
          <h3 className="text-white text-lg mb-2">Created Tasks:</h3>
          <ul className="list-disc pl-5 text-white">
            { createdTasks.map( ( task, index ) => (
              <li key={ index }>{ task.type }: { task.question || task.visitLink || 'Task created' }</li>
            ) ) }
          </ul>
        </div>
      ) }
    </>
  );
};

export default AddTask;