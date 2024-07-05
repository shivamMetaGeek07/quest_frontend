"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface TaskOption
{
    name: string;
    icon: string;
    description: string;
    category: 'Actions' | 'Answers' | 'Social' | ' ' | 'On-chain action';
}

interface PollOption
{
    text: string;
}

const AddTask = () =>
{
    const [ isOpen, setIsOpen ] = useState( false );
    const [ selectedTask, setSelectedTask ] = useState<TaskOption | null>( null );
    const [ pollQuestion, setPollQuestion ] = useState( '' );
    const [ pollOptions, setPollOptions ] = useState<PollOption[]>( [ { text: '' }, { text: '' } ] );

    const taskOptions: TaskOption[] = [
        { name: 'Visit link', icon: '/icons/link.svg', description: 'Check out a specific link', category: 'Actions' },
        { name: 'Invites', icon: '/icons/invite.svg', description: 'Invite a bunch of people to join the community', category: 'Actions' },
        { name: 'API', icon: '/icons/api.svg', description: 'Do a specific action on another platform', category: 'Actions' },
        { name: 'Partnership', icon: '/icons/partnership.svg', description: 'Check that a user has joined a partnership community', category: 'Actions' },
        { name: 'File upload', icon: '/icons/file.svg', description: 'Upload an image or a file', category: 'Answers' },
        { name: 'Poll', icon: '/icons/poll.svg', description: 'Vote in a poll', category: 'Answers' },
        { name: 'Quiz', icon: '/icons/quiz.svg', description: 'Respond to a quiz with multiple answer choices', category: 'Answers' },
        { name: 'Text', icon: '/icons/text.svg', description: 'Respond to a quiz or a request in text form', category: 'Answers' },
        { name: 'Number', icon: '/icons/number.svg', description: 'Respond to a quiz or a request in numeric form', category: 'Answers' },
        { name: 'URL', icon: '/icons/url.svg', description: 'Respond to a quiz or a request in Url form', category: 'Answers' },
        { name: 'Opinion Scale', icon: '/icons/opinionscale.svg', description: 'Respond to an opinon scale', category: 'Answers' },

        { name: 'Discord', icon: '/icons/discord.svg', description: 'Join a specific Discord server', category: 'Social' },
        { name: 'Twitter', icon: '/icons/twitter.svg', description: 'Follow a specific Twitter account', category: 'Social' },
        { name: 'Telegram', icon: '/icons/telegram.svg', description: 'Join a specific Telegram Channel', category: 'Social' },
        { name: 'Tictok', icon: '/icons/reddit.svg', description: 'Post a video on tictok', category: 'Social' },
        { name: 'NFT', icon: '/icons/ntf.svg', description: 'Check that a user has a specific NFT in their wallet', category: 'On-chain action' },
        { name: 'Token', icon: '/icons/token.svg', description: 'Check that a user has a minimum amount of a specific token', category: 'On-chain action' },

    ];

    const toggleModal = () => setIsOpen( !isOpen );

    const openTaskModal = ( task: TaskOption ) =>
    {
        setSelectedTask( task );
        if ( task.name === 'Poll' )
        {
            setPollQuestion( '' );
            setPollOptions( [ { text: '' }, { text: '' } ] );
        }
    };

    const closeTaskModal = () =>
    {
        setSelectedTask( null );
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
        setPollOptions( [ ...pollOptions, { text: '' } ] );
    };

    const removePollOption = ( index: number ) =>
    {
        if ( pollOptions.length > 2 )
        {
            const newOptions = pollOptions.filter( ( _, i ) => i !== index );
            setPollOptions( newOptions );
        }
    };

    const handleAddTask = () =>
    {
        // Here you would typically save the task data
        console.log( "Adding task:", selectedTask?.name );
        if ( selectedTask?.name === 'Poll' )
        {
            console.log( "Poll Question:", pollQuestion );
            console.log( "Poll Options:", pollOptions );
        }
        closeTaskModal();
    };

    return (
        <>
            {/* provide me button at center of screen with */ }
            { !isOpen &&
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
            }

            { isOpen && (
                <div className=" inset-0 z-50 overflow-y-auto bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="relative p-4 w-3/4">
                        <div className="relative bg-gray-900 text-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-white">
                                    Find a task type
                                </h3>
                                <button
                                    onClick={ toggleModal }
                                    className="text-white bg-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5 grid grid-cols-2 
                            gap-4 bg-gray-900 text-white ">


                                { [ 'Actions', 'Answers', 'Social', 'On-chain action' ].map( ( category ) => (
                                    <div key={ category } >
                                        <h4 className="text-md font-semibold mb-2">{ category }</h4>
                                        <ul className="space-y-2 mb-7 ">
                                            { taskOptions.filter( task => task.category === category ).map( ( task, index ) => (
                                                <li key={ index }
                                                    className="flex flex-col items-left p-3 text-base font-medium bg-gray-900 rounded-lg dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white cursor-pointer border  hover:bg-gray-500 text-white shadow "
                                                    onClick={ () => openTaskModal( task ) }
                                                >
                                                    <div
                                                        className="flex items-center justify-between p-2 text-base font-medium rounded
                                                     group 
                                                     dark:text-white cursor-pointer"
                                                    >

                                                        <Image src={ task.icon } alt={ task.name } width={ 24 } height={ 24 } />
                                                        <span className="flex-1 ms-3 whitespace-nowrap">{ task.name }</span>
                                                    </div>
                                                    <span className="text-sm">{ task.description }</span>
                                                </li>
                                            ) ) }
                                        </ul>
                                    </div>
                                ) ) }
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
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <p className="text-sm text-gray-100 mb-4">{ selectedTask.description }</p>
                                { selectedTask.name === 'Poll' ? (
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
                                                    onChange={ ( e ) => handlePollOptionChange( index, e.target.value ) }
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
                                    <input type="text" className="w-full p-2 border rounded" placeholder="Enter details..." />
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