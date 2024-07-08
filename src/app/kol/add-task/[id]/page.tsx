"use client";
import React, { useState } from "react";
import Image from "next/image";



interface TaskOption {
  name: string;
  icon: string;
  description: string;
  category: "Actions" | "Answers" | "Social" | " " | "On-chain action";
}

interface PollOption {
  text: string;
}

const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskOption | null>(null);
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState<PollOption[]>([
    { text: "" },
    { text: "" },
  ]);

  const [quizQuestion, setQuizQuestion] = useState("");
  const [quizOptions, setQuizOptions] = useState<{ text: string }[]>([
    { text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
  ]);
  

  const taskOptions: TaskOption[] = [
    {
      name: "Visit link",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Check out a specific link",
      category: "Actions",
    },
    {
      name: "Invites",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Invite a bunch of people to join the community",
      category: "Actions",
    },
    {
      name: "API",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Do a specific action on another platform",
      category: "Actions",
    },
    {
      name: "Partnership",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Check that a user has joined a partnership community",
      category: "Actions",
    },
    {
      name: "File upload",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Upload an image or a file",
      category: "Answers",
    },
    {
      name: "Poll",
      icon: "https://thumbs.dreamstime.com/b/green-poll-document-icon-isolated-green-background-long-shadow-style-vector-green-poll-document-icon-isolated-green-312441221.jpg",
      description: "Vote in a poll",
      category: "Answers",
    },
    {
      name: "Quiz",
      icon: "https://cdn.pixabay.com/photo/2022/11/02/02/30/quiz-7563812_640.png",
      description: "Respond to a quiz with multiple answer choices",
      category: "Answers",
    },
    {
      name: "Text",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Respond to a quiz or a request in text form",
      category: "Answers",
    },
    {
      name: "Quiz",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Respond to a quiz with multiple answer choices",
      category: "Answers",
    },
    {
      name: "Text",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Respond to a quiz or a request in text form",
      category: "Answers",
    },

    {
      name: "Discord",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Join a specific Discord server",
      category: "Social",
    },
    {
      name: "Twitter",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Follow a specific Twitter account",
      category: "Social",
    },
    {
      name: "Telegram",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Join a specific Telegram Channel",
      category: "Social",
    },
    {
      name: "Tictok",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Post a video on tictok",
      category: "Social",
    },
    {
      name: "NFT",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Check that a user has a specific NFT in their wallet",
      category: "On-chain action",
    },
    {
      name: "Token",
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Check that a user has a minimum amount of a specific token",
      category: "On-chain action",
    },
    
  ];

  const toggleModal = () => setIsOpen(!isOpen);

  const openTaskModal = (task: TaskOption) => {
    setSelectedTask(task);
    if (task.name === "Poll") {
      setPollQuestion("");
      setPollOptions([{ text: "" }, { text: "" }]);
    }
  };

  const closeTaskModal = () => {
    setSelectedTask(null);
  };

  // const handlePollQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPollQuestion(e.target.value);
  // };

  // const handlePollOptionChange = (index: number, value: string) => {
  //   const newOptions = [...pollOptions];
  //   newOptions[index].text = value;
  //   setPollOptions(newOptions);
  // };

  // const addPollOption = () => {
  //   setPollOptions([...pollOptions, { text: "" }]);
  // };

  // const removePollOption = (index: number) => {
  //   if (pollOptions.length > 2) {
  //     const newOptions = pollOptions.filter((_, i) => i !== index);
  //     setPollOptions(newOptions);
  //   }
  // };




  const handlePollQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPollQuestion(e.target.value);
  };

  const handlePollOptionChange = (index: number, value: string) => {
    const newOptions = [...pollOptions];
    newOptions[index].text = value;
    setPollOptions(newOptions);
  };

  const addPollOption = () => {
    setPollOptions([...pollOptions, { text: "" }]);
  };

  const removePollOption = (index: number) => {
    setPollOptions(pollOptions.filter((_, i) => i !== index));
  };

  const handleQuizQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizQuestion(e.target.value);
  };

  const handleQuizOptionChange = (index: number, value: string) => {
    const newOptions = [...quizOptions];
    newOptions[index].text = value;
    setQuizOptions(newOptions);
  };


  const handleTaskSelection = (task: TaskOption) => {
    setSelectedTask(task);
    console.log('Selected Task:', task);
  };


  const handleAddTask = () => {
    // Here you would typically save the task data
    console.log("Adding task:", selectedTask?.name);
    if (selectedTask?.name === "Poll") {
      console.log("Poll Question:", pollQuestion);
      console.log("Poll Options:", pollOptions);

    }
    closeTaskModal();
  };


  // console.log(selectedTask)
  return (
    <>
    
  {!isOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-50">
      <button
        onClick={toggleModal}
        className="text-white justify-center bg-gray-900 hover:bg-gray-600 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 bg-center w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 mx-4 my-4 sm:my-8"
      >
        Add Task
      </button>
    </div>
  )}

  {isOpen && (
    <div className=" inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
      <div className="relative p-4 lg:w-3/4 w-full sm:h-full">
        <div className="relative bg-[#121212] rounded-3xl shadow-lg">
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-700 bg-[#282828] rounded-xl">
            <h3 className="text-lg font-semibold text-gray-300">Find a task type</h3>
            <button
              onClick={toggleModal}
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
            <div className="p-4 md:p-5 flex flex-col gap-4 bg-[#141414] text-white w-full md:w-1/2">
              {["Actions", "Social"].map((category) => (
                <div key={category}>
                  <div className="mx-4">
                  <h4 className="text-xl font-medium mb-2 text-gray-400 ">{category}</h4>
                  </div>
                  <div className="space-y-2 mb-7 grid gap-4 sm:grid-cols-1">
                    {taskOptions
                      .filter((task) => task.category === category)
                      .map((task, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 text-base font-medium rounded-3xl dark:text-white cursor-pointer hover:bg-[#272A2A] text-white shadow"
                          onClick={() => openTaskModal(task)}
                        >
                          <div className="flex items-center justify-center mr-3">
                            <img
                              src={task.icon}
                              alt={task.name}
                              className="flex-shrink-0 h-12 w-12 rounded-full object-cover"
                            />
                          </div>

                          <div className="flex-1">
                            <h3>{task.name}</h3>
                            <div className="text-sm">
                              <p className="text-gray-400">{task.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 md:p-5 gap-4 bg-[#141414] text-white w-full md:w-1/2">
              {["Answers", "On-chain action"].map((category) => (
                <div key={category}>
                  <div className="mx-4">
                  <h4 className="text-xl font-medium mb-2 text-gray-400">{category}</h4>
                  </div>
                  <div className="space-y-2 mb-7 grid gap-4 sm:grid-cols-1">
                    {taskOptions
                      .filter((task) => task.category === category)
                      .map((task, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 text-base font-medium rounded-3xl dark:text-white cursor-pointer hover:bg-[#272A2A] text-white shadow"
                          onClick={() => openTaskModal(task)}
                        >
                          <div className="flex items-center justify-center mr-3">
                            <img
                              src={task.icon}
                              alt={task.name}
                              className="flex-shrink-0 h-12 w-12 rounded-full object-cover"
                            />
                          </div>

                          <div className="flex-1">
                            <h3>{task.name}</h3>
                            <div className="text-sm">
                              <p className="text-gray-400">{task.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

{selectedTask && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-[#282828] rounded-3xl shadow text-white">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div className="flex items-center ">
                  <img
                    src={selectedTask.icon}
                    alt=""
                    className="h-10 w-10 object-cover rounded-full"
                  />
                  <div className="mx-2">
                    <h3 className="text-lg font-semibold dark:text-white">
                      {selectedTask.name}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={closeTaskModal}
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
                  {selectedTask.description}
                </p>
                {selectedTask.name === "Visit link" && (
                  <div >
                    <input
                      type="url"
                      className="w-full p-2 border rounded-lg  mb-2 bg-[#282828]"
                      placeholder="https:/"
                     
                    />
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848] "
                      onClick={handleAddTask}
                    >
                      Add Visit Link 
                    </button>
                  </div>
                )}
                {selectedTask.name === "Poll" && (
                  <div>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                      placeholder="Enter poll question"
                      value={pollQuestion}
                      onChange={handlePollQuestionChange}

                    />
                    {pollOptions.map((option, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg bg-[#282828] "
                          placeholder={`Option ${index + 1}`}
                          value={option.text}
                          onChange={(e) =>
                            handlePollOptionChange(index, e.target.value)
                          }
                        />
                        {index > 1 && (
                          <button
                            onClick={() => removePollOption(index)}
                            className="ml-2 text-red-500"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <div className="flex justify-around">
                    <button
                      onClick={addPollOption}
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848] "
                    >
                      Add Option
                    </button>
                    <button
                      className="mt-4 bg-[#231b1b] text-white px-4 py-2 rounded hover:bg-[#484848]"
                      onClick={handleAddTask}
                    >
                      Add Poll Task
                    </button>
                    </div>
                  </div>
                )}
                {selectedTask.name === "Quiz" && (
                  <div>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                      placeholder="Enter quiz question"
                      value={quizQuestion}
                      onChange={handleQuizQuestionChange}
                    />
                    {quizOptions.map((option, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <input
                          type="text"
                          className="w-full p-2 border rounded-lg bg-[#282828]"
                          placeholder={`Choice ${index + 1}`}
                          value={option.text}
                          onChange={(e) =>
                            handleQuizOptionChange(index, e.target.value)
                          }
                        />
                      </div>
                    ))}
                    <div className="flex justify-center">
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848] "
                      onClick={handleAddTask}
                    >
                      Add Quiz Task
                    </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
</>

  );
};

export default AddTask;
