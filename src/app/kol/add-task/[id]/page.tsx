"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getTaskOptionsSuccess } from "@/redux/reducer/taskOptionSlice";
import { createTask } from "@/redux/reducer/taskSlice";
import { fetchUserData } from "@/redux/reducer/authSlice";
import { useProtectedRoute } from "@/utils/privateRoute";
import { AppDispatch } from "@/redux/store";

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


  const [ quizzes, setQuizzes ] = useState<Array<{ question: string, options: { text: string; }[], correctAnswer: string; }>>( [ { question: "", options: [ { text: "" }, { text: "" }, { text: "" }, { text: "" } ], correctAnswer: "" } ] );
  const [ polls, setPolls ] = useState<Array<{ question: string, options: { text: string; }[]; }>>( [ { question: "", options: [ { text: "" }, { text: "" } ] } ] );

  const [ taskName, setTaskName ] = useState( "" );
  const [ taskDescription, setTaskDescription ] = useState( "" );

  const { taskOptions, categories } = useSelector( ( state: any ) => state.taskOption );
  const KolId = useSelector( ( state: any ) => state?.login?.user?._id );

  // useSelector( ( state: any ) => console.log( state ) );

  useEffect( () =>
  {
    dispatch( fetchUserData() );
    dispatch( getTaskOptionsSuccess() );
  }, [ dispatch ] );

  const toggleModal = () => setIsOpen( !isOpen );

  const openTaskModal = ( task: TaskOption ) =>
  {
    setSelectedTask( task );
    if ( task.name === "Poll" )
    {
      setPolls( [ { question: "", options: [ { text: "" }, { text: "" } ] } ] );
    }
    else if ( task.name === "Quiz" )
    {
      setQuizzes( [ { question: "", options: [ { text: "" }, { text: "" }, { text: "" }, { text: "" } ], correctAnswer: "" } ] );
    }
  };

  const closeTaskModal = () =>
  {
    setSelectedTask( null );
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
      // case 'file upload':
      //   updatedField = { uploadLink: value };
      //   break;
      case 'quiz':
        updatedField = { correctAnswer: value };
        break;
      // case 'text':
      //   updatedField = { response: value };
      //   break;
      // case 'number':
      //   updatedField = { response: value };
      //   break;
      // case 'url':
      //   updatedField = { response: value };
      //   break;
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
      taskName,
      taskDescription,
    };

    let taskData;
    switch ( selectedTask.name.toLowerCase() )
    {
      case 'visit link':
        taskData = { ...baseTask, visitLink: selectedTask.visitLink };
        break;
      case 'invites':
        taskData = { ...baseTask, inviteLink: selectedTask.inviteLink };
        break;
      case 'poll':
        taskData = {
          ...baseTask,
          polls: polls.map( poll => ( {
            question: poll.question,
            options: poll.options.map( option => option.text ),
          } ) ),
        };
        break;
      case 'quiz':
        taskData = {
          ...baseTask,
          quizzes: quizzes.map( quiz => ( {
            question: quiz.question,
            options: quiz.options.map( option => option.text ),
            correctAnswer: quiz.correctAnswer,
          } ) ),
        };
        break;


      default:
        taskData = { ...baseTask };
        break;
    }

    console.log( "Adding task:", taskData );

    try
    {
      const response = await dispatch( createTask( taskData ) );
      console.log( "Task created successfully:", response?.payload?.new_task );
      alert( response?.payload?.msg || "Task created successfully" );

      closeTaskModal();
      // toggleModal();
    } catch ( error )
    {
      console.error( "Error creating task:", error );
      alert( "Error creating task" );
      // Handle the error (e.g., show an error message to the user)
    }
    // closeTaskModal();
    // toggleModal();
  };

  const addNewQuiz = () =>
  {
    setQuizzes( [ ...quizzes, { question: "", options: [ { text: "" }, { text: "" }, { text: "" }, { text: "" } ], correctAnswer: "" } ] );
  };

  const addNewPoll = () =>
  {
    setPolls( [ ...polls, { question: "", options: [ { text: "" }, { text: "" } ] } ] );
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
    newQuizzes[ quizIndex ].options[ optionIndex ].text = value;
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
    newPolls[ pollIndex ].options[ optionIndex ].text = value;
    setPolls( newPolls );
  };

  const addPollOption = ( pollIndex: number ) =>
  {
    const newPolls = [ ...polls ];
    newPolls[ pollIndex ].options.push( { text: "" } );
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
      {/* provide me button at center of screen with */ }
      { !isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-
                    50"
        >
          <button
            onClick={ toggleModal }
            className="text-white justify-center bg-gray-900 hover:bg-gray-600 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 bg-center w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 mx-4 my-4 sm:my-8"
          >
            Add Task
          </button>
        </div>
      ) }

      { isOpen && (
        <div className=" inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
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
                                <img
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
                                <img
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
        <div className="fixed inset-0 z-50 overflow-y-auto scroll-auto  bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-gray-600 rounded-lg shadow text-white">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">

                <div className="flex items-center ">
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
              <div className="space-y-4 mb-7 grid gap-4 sm:grid-cols-1">
                {/* Add two inputs for asking for taskName and taskDescription */ }
                <div>
                  <label htmlFor="taskName" className="block text-white mb-1">Task Name</label>
                  <input
                    id="taskName"
                    type="text"
                    className="w-full p-2 border rounded-lg bg-[#282828] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the task name"
                    onChange={ ( e ) => setTaskName( e.target.value ) }
                  />
                </div>
                <div>
                  <label htmlFor="taskDescription" className="block text-white mb-1">Task Description</label>
                  <textarea
                    id="taskDescription"
                    className="w-full p-2 border rounded-lg bg-[#282828] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the task description"
                    onChange={ ( e ) => setTaskDescription( e.target.value ) }
                    rows="4"
                  />
                </div>
              </div>


              <div className="p-4 md:p-5">
                <p className="text-sm text-gray-100 mb-4">
                  { selectedTask.description }
                </p>

                { selectedTask.name === "Visit Link" && (
                  <div >
                    <input
                      type="url"
                      className="w-full p-2 border rounded-lg  mb-2 bg-[#282828]"
                      placeholder="https:/"
                      onChange={ handleInputChange }
                    />
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848] "
                      onClick={ handleAddTask }
                    >
                      Add Visit Link
                    </button>
                  </div>
                ) }

                { selectedTask.name === "Invites" && (
                  <div >
                    <p
                      className="text-white text-center text-lg mb-2"
                    >
                      In this task user can Invite to other user
                    </p>
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848] "
                      onClick={ handleAddTask }
                    >
                      Add Task to Invite others
                    </button>
                  </div>
                ) }


                { selectedTask.name === "File upload" && (
                  <div >
                    <p
                      className="text-white text-center text-lg mb-2"
                    >
                      In this task user can upload a file
                    </p>
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848] "
                      onClick={ handleAddTask }
                    >
                      Add Task to Upload file
                    </button>
                  </div>
                ) }

                { selectedTask.name === "Poll" && (
                  <div className="space-y-6">
                    { polls.map( ( poll, pollIndex ) => (
                      <div key={ pollIndex } className="bg-[#1E1E1E] p-4 rounded-lg">
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg flex items-center mb-2 mr-2 bg-[#282828]"
                          placeholder="Enter poll question"
                          value={ poll.question }
                          onChange={ ( e ) => handlePollQuestionChange( pollIndex, e.target.value ) }
                        />
                        { poll.options.map( ( option, optionIndex ) => (
                          <div key={ optionIndex } className="flex items-center mb-2">
                            <input
                              type="text"
                              className="w-full p-2 border rounded-lg bg-[#282828]"
                              placeholder={ `Option ${ optionIndex + 1 }` }
                              value={ option.text }
                              onChange={ ( e ) => handlePollOptionChange( pollIndex, optionIndex, e.target.value ) }
                            />
                            { optionIndex > 1 && (
                              <button
                                onClick={ () => removePollOption( pollIndex, optionIndex ) }
                                className="ml-2 text-red-500"
                              >
                                Remove
                              </button>
                            ) }
                          </div>
                        ) ) }
                        <button
                          onClick={ () => addPollOption( pollIndex ) }
                          className="mt-2 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                        >
                          Add Option
                        </button>
                      </div>
                    ) ) }
                    <button onClick={ addNewPoll } className="mt-2 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]">
                      Add Poll Question
                    </button>
                    <div className="flex justify-evenly">
                      <button
                        className="mt-4 bg-[#ff2e2e] text-white px-4 py-2 rounded hover:bg-[#862727]"
                        onClick={ closeTaskModal }
                      >
                        Cancel
                      </button>
                      <button
                        className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                        onClick={ handleAddTask }
                      >
                        Add Poll Task
                      </button>
                    </div>
                  </div>
                ) }

                { selectedTask.name === "Quiz" && (
                  <div className="space-y-6">
                    { quizzes.map( ( quiz, quizIndex ) => (
                      <div key={ quizIndex }>
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                          placeholder="Enter quiz question"
                          value={ quiz.question }
                          onChange={ ( e ) => handleQuizQuestionChange( quizIndex, e.target.value ) }
                        />
                        { quiz.options.map( ( option, optionIndex ) => (
                          <div key={ optionIndex } className="flex items-center mb-2">
                            <input
                              type="text"
                              className="w-full p-2 border rounded-lg bg-[#282828]"
                              placeholder={ `Choice ${ optionIndex + 1 }` }
                              value={ option.text }
                              onChange={ ( e ) => handleQuizOptionChange( quizIndex, optionIndex, e.target.value ) }
                            />
                          </div>
                        ) ) }
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                          placeholder="Correct answer"
                          value={ quiz.correctAnswer }
                          onChange={ ( e ) => handleQuizCorrectAnswerChange( quizIndex, e.target.value ) }
                        />
                      </div>
                    ) ) }
                    <button onClick={ addNewQuiz } className="mt-2 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]">
                      Add Quiz Question
                    </button>
                    <div className="flex justify-evenly">
                      <button
                        className="mt-4 bg-[#ff2e2e] text-white px-4 py-2 rounded hover:bg-[#862727]"
                        onClick={ closeTaskModal }
                      >
                        Cancel
                      </button>
                      <button
                        className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                        onClick={ handleAddTask }
                      >
                        Add Quiz Task
                      </button>
                    </div>
                  </div>
                ) }

                { ( selectedTask.name === "Text" || selectedTask.name === "Number" || selectedTask.name === "URL" ) && (
                  <div >
                    <p
                      className="text-white text-center text-lg mb-2"
                    >
                      In this task user will response with a { selectedTask.name }
                    </p>
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848] "
                      onClick={ handleAddTask }
                    >
                      Add Task
                    </button>
                  </div>
                ) }


                { selectedTask.name !== "Poll" && selectedTask.name !== "Quiz" && selectedTask.name != "Visit Link" && selectedTask.name !== "Invites" && selectedTask.name !== "File upload" && selectedTask.name !== "Text" && selectedTask.name !== "Number" && selectedTask.name !== "URL" && (
                  <>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg  mb-2 bg-[#282828]"
                      placeholder={ `Enter ${ selectedTask.name.toLowerCase() } details...` }
                      onChange={ handleInputChange }

                    />

                    <button
                      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"

                      disabled

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
    </>
  );
};

export default AddTask;