"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useProtectedRoute } from "@/utils/privateRoute";


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
  useProtectedRoute("kol");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskOption | null>(null);
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState<PollOption[]>([
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
      icon: "https://thumbs.dreamstime.com/b/external-link-icon-user-will-know-leaving-app-to-visit-website-flat-style-139079210.jpg",
      description: "Vote in a poll",
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
    if (pollOptions.length > 2) {
      const newOptions = pollOptions.filter((_, i) => i !== index);
      setPollOptions(newOptions);
    }
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

  return (
    <>
      {/* provide me button at center of screen with */}
      {!isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-
                    50"
        >
          <button
            onClick={toggleModal}
            className="text-white justify-center bg-gray-900 hover:bg-gray-600 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 bg-center my-80 w-3/4  mx-32"
          >
            Add Task
          </button>
        </div>
      )}

      {isOpen && (
        <div className=" inset-0 z-50 border overflow-y-auto bg-[#121212] bg-opacity-50 flex items-center justify-center">
          <div className="relative p-4 w-3/4 ">
            <div className="relative bg-gray-900 text-white rounded-3xl  mb-5 shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-700 bg-[#282828]">
                <h3 className="text-lg font-semibold text-gray-300">
                  Find a task type
                </h3>
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
              <div
                className="p-4 md:p-5 grid grid-cols-2 
                            gap-4 bg-[#141414FF] text-white "
              >
                {["Actions", "Answers", "Social", "On-chain action"].map(
                  (category) => (
                    <div key={category}>
                      <h4 className="text-xl font-medium mb-2 text-gray-400 lg:mx-6">
                        {category}
                      </h4>
                      <div className="space-y-2 mb-7 grid gap-4 sm:grid-cols-1">
                        {taskOptions
                          .filter((task) => task.category === category)
                          .map((task, index) => (
                            <div
                              key={index}
                              className="flex items-center p-3 text-base font-medium rounded-3xl dark:text-white cursor-pointer hover:bg-[#272A2AFF] text-white shadow"
                              onClick={() => openTaskModal(task)}
                            >
                              
                                <div className="flex items-center justify-center  mr-3">
                                  <img
                                    src={task.icon}
                                    alt={task.name}
                                    // width={40}
                                    // height={40}
                                    className="flex-shrink-0 h-12 w-12 rounded-full object-cover"
                                  />
                                </div>

                                <div className="flex-1 ">
                                  <h3>{task.name}</h3>
                                  <div className="text-sm  ">
                                   <p className="text-gray-400"> {task.description} </p>
                                  </div>
                                </div>
                              </div>
                           
                          ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTask && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-600 bg-opacity-50 flex items-center justify-center rounded">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-gray-600 rounded-lg shadow text-white">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold  dark:text-white">
                  {selectedTask.name}
                </h3>
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
                {selectedTask.name === "Poll" ? (
                  <>
                    <input
                      type="text"
                      className="w-full p-2 border rounded mb-2"
                      placeholder="Enter poll question"
                      value={pollQuestion}
                      onChange={handlePollQuestionChange}
                    />
                    {pollOptions.map((option, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
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
                    <button
                      onClick={addPollOption}
                      className="mt-2 text-blue-500"
                    >
                      Add Option
                    </button>
                  </>
                ) : (
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Enter details..."
                  />
                )}
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={handleAddTask}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTask;
