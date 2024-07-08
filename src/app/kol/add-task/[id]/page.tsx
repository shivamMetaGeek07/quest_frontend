"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getTaskOptionsSuccess } from "@/redux/reducer/taskOptionSlice";
import { createTask } from "@/redux/reducer/taskSlice";
import { fetchUserData } from "@/redux/reducer/auth";



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
  const dispatch = useDispatch();
  const [ isOpen, setIsOpen ] = useState( true );
  const [ selectedTask, setSelectedTask ] = useState<TaskOption | null>( null );
  const [ pollQuestion, setPollQuestion ] = useState( "" );
  const [ pollOptions, setPollOptions ] = useState<PollOption[]>( [
    { text: "" },
    { text: "" },
  ] );

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
      setPollQuestion( "" );
      setPollOptions( [ { text: "" }, { text: "" } ] );
    }
  };

  const closeTaskModal = () =>
  {
    setSelectedTask( null );
    setPollQuestion( "" );
    setPollOptions( [ { text: "" }, { text: "" } ] );
  };

  const handlePollQuestionChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>
  {
    setPollQuestion( e.target.value );
  };

  const handlePollOptionChange = ( index: number, value: string ) =>
  {
    const newOptions = [ ...pollOptions ];
    newOptions[ index ].text = value;
    setPollOptions( newOptions );
  };

  const addPollOption = () =>
  {
    setPollOptions( [ ...pollOptions, { text: "" } ] );
  };

  const removePollOption = ( index: number ) =>
  {
    if ( pollOptions.length > 2 )
    {
      const newOptions = pollOptions.filter( ( _, i ) => i !== index );
      setPollOptions( newOptions );
    }
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
      case 'file upload':
        updatedField = { uploadLink: value };
        break;
      case 'quiz':
        updatedField = { correctAnswer: value };
        break;
      case 'text':
        updatedField = { response: value };
        break;
      case 'number':
        updatedField = { response: value };
        break;
      case 'url':
        updatedField = { response: value };
        break;
      default:
        updatedField = { [ selectedTask.name.toLowerCase() ]: value };
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
        taskData = {
          ...baseTask,
          question: pollQuestion,
          options: pollOptions.map( option => option.text ),
          correctAnswer: ""
        };
        break;
      case 'visit link':
        taskData = { ...baseTask, visitLink: selectedTask.visitLink };
        break;
      case 'invites':
        taskData = { ...baseTask, inviteLink: selectedTask.inviteLink };
        break;
      case 'file upload':
        taskData = { ...baseTask, uploadLink: selectedTask.uploadLink };
        break;
      case 'quiz':
        taskData = { ...baseTask, correctAnswer: selectedTask.correctAnswer };
        break;
      case 'text':
        taskData = { ...baseTask, response: selectedTask.response };
        break;
      case 'number':
        taskData = { ...baseTask, response: selectedTask.response };
        break;
      case 'url':
        taskData = { ...baseTask, response: selectedTask.response };
        break;
      default:
        break;
    }

    console.log( "Adding task:", taskData );

    try
    {
      const response = await dispatch( createTask( taskData ) );
      console.log( "Task created successfully:", response?.payload?.new_task );
      alert( response?.payload?.msg );
      // closeTaskModal();
      // toggleModal();
    } catch ( error )
    {
      console.error( "Error creating task:", error );
      // Handle the error (e.g., show an error message to the user)
    }
    // closeTaskModal();
    // toggleModal();
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
            className="text-white justify-center bg-gray-900 hover:bg-gray-600 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 bg-center my-80 w-3/4  mx-32"
          >
            Add Task
          </button>
        </div>
      ) }

      { isOpen && (
        <div className=" inset-0 z-50 border overflow-y-auto bg-[#121212] bg-opacity-50 flex items-center justify-center">
          <div className="relative p-4 w-3/4 ">
            <div className="relative bg-gray-900 text-white rounded-3xl  mb-5 shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-700 bg-[#282828]">
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
              <div
                className="p-4 md:p-5 grid grid-cols-2 
                            gap-4 bg-[#141414FF] text-white "
              >
                { categories.map(
                  ( category: string ) => (
                    <div key={ category }>
                      <h4 className="text-xl font-medium mb-2 text-gray-400 lg:mx-6">
                        { category }
                      </h4>
                      <div className="space-y-2 mb-7 grid gap-4 sm:grid-cols-1">
                        { taskOptions
                          .filter( ( task: any ) => task.category === category )
                          .map( ( task: any, index: any ) => (
                            <div
                              key={ index }
                              className="flex items-center p-3 text-base font-medium rounded-3xl dark:text-white cursor-pointer hover:bg-[#272A2AFF] text-white shadow"
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
      ) }

      { selectedTask && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-600 bg-opacity-50 flex items-center justify-center rounded">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-gray-600 rounded-lg shadow text-white">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold  dark:text-white">
                  { selectedTask.name }
                </h3>
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
                { selectedTask.name === "Poll" ? (
                  <>
                    <input
                      type="text"
                      className="w-full p-2 border rounded mb-2"
                      placeholder="Enter poll question"
                      value={ pollQuestion }
                      onChange={ handlePollQuestionChange }
                    />
                    { pollOptions.map( ( option, index ) => (
                      <div key={ index } className="flex items-center mb-2">
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          placeholder={ `Option ${ index + 1 }` }
                          value={ option.text }
                          onChange={ ( e ) =>
                            handlePollOptionChange( index, e.target.value )
                          }
                        />
                        { index > 1 && (
                          <button
                            onClick={ () => removePollOption( index ) }
                            className="ml-2 text-red-500"
                          >
                            Remove
                          </button>
                        ) }
                      </div>
                    ) ) }
                    <button
                      onClick={ addPollOption }
                      className="mt-2 text-blue-500"
                    >
                      Add Option
                    </button>
                  </>
                ) : (
                  <input
                    type="text"
                    className="w-full p-2 border rounded text-black"
                    placeholder={ `Enter ${ selectedTask.name.toLowerCase() } details...` }
                    onChange={ handleInputChange }
                  // value={
                  //   selectedTask.visitLink ||
                  //   selectedTask.inviteLink ||
                  //   selectedTask.uploadLink ||
                  //   selectedTask.correctAnswer ||
                  //   ''
                  // }
                  />
                ) }
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={ handleAddTask }
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      ) }
    </>
  );
};

export default AddTask;
