"use client";
import React, { useState } from "react";

interface CardData {
  image: string;
  name: string;
  description: string;
  link: string;
}

const cardData: CardData[] = [
  {
    image: "https://zealy.io/nstatic/xp-reward.webp",
    name: "Visit the link get some extra xp coins",
    description: "This is the description for card 1.",
    link: "Visit link",
  },
  {
    image: "https://zealy.io/nstatic/xp-reward.webp",
    name: "Chose the correct poll get some xp ",
    description: "This is the description for card 2.",
    link: "Poll",
  },
  {
    image: "https://zealy.io/nstatic/xp-reward.webp",
    name: "Chose the correct answer and get xp",
    description: "This is the description for card 3.",
    link: "Quiz",
  },
  {
    image: "https://example.com/image4.jpg",
    name: "Card 4",
    description: "This is the description for card 4.",
    link: "View task",
  },
  {
    image: "https://example.com/image5.jpg",
    name: "Card 5",
    description: "This is the description for card 5.",
    link: "View task details",
  },
  
];

const Page: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState<string[]>(["", ""]);
  const [quizQuestion, setQuizQuestion] = useState("");
  const [quizOptions, setQuizOptions] = useState<string[]>(["", ""]);

  const [progress, setProgress] = useState(0);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    const increment = Math.ceil(100 / cardData.length);
    setProgress((prevProgress) => {
      const newProgress = prevProgress + increment;
      return newProgress > 100 ? 100 : newProgress;
    });
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
    setPollQuestion("");
    setPollOptions(["", ""]);
    setQuizQuestion("");
    setQuizOptions(["", "", "", ""]);
  };

  const handlePollOptionChange = (index: number, value: string) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  const handleQuizOptionChange = (index: number, value: string) => {
    const newOptions = [...quizOptions];
    newOptions[index] = value;
    setQuizOptions(newOptions);
  };

  return (
    <div className="bg-[#000] text-white ">
      <div className="mx-4 lg:mx-20">
        <div className="text-2xl pt-10 font-bold">
          <h1>My Quest</h1>
        </div>
        <div className="max-w-[600px] pt-4 text-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            neque magni dolorum dignissimos enim delectus velit ut aspernatur.
          </p>
        </div>

        <div className="banner mt-5">
          <h1 className="text-2xl">Getting started</h1>

          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              {progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-8  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 ">
          {cardData?.map((card, index) => (
            <div
              key={index}
              className=" border border-gray-200 bg-white/5 sm:p-2 lg:py-4 rounded-xl h-full w-full shadow-lg group hover:scale-105 hover:bg-white/10"
              onClick={() => handleCardClick(card)}
            >
              <div className="flex gap-3 items-center justify-between mx-2">
                <div className="text-xl font-medium basis-[65%]">
                  <h1>{card.name}</h1>
                </div>
                <div className="basis-[25%]">
                  <div className="relative flex justify-center">
                    <img
                      src="https://zealy.io/nstatic/xp-reward.webp"
                      alt="XP Image"
                      className="w-full h-auto rounded-lg "
                    />
                    <div className="absolute bottom-0  bg-purple-500 opacity-40 text-white px-2 rounded-lg flex justify-center mr-2.5">
                      <p>70</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-[#282828] rounded-3xl shadow text-white">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div className="flex items-center ">
                  {/* <img
                    src={selectedCard.image}
                    alt=""
                    className="h-14 w-14 object-cover rounded-full"
                  /> */}
                  <div className="mx-2">
                    <h3 className="text-lg font-semibold dark:text-white">
                      {selectedCard.name}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={handleClosePopup}
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
                  {selectedCard.description}
                </p>
                {selectedCard.link === "Visit link" && (
                  <div>
                    <input
                      type="url"
                      className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                      placeholder="https://"
                    />
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                      onClick={() => console.log("Add Visit Link")}
                    >
                      Submit
                    </button>
                  </div>
                )}
                {selectedCard.link === "Poll" && (
                  <div>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                      placeholder="Enter poll question"
                      value={pollQuestion}
                      onChange={(e) => setPollQuestion(e.target.value)}
                    />
                    {pollOptions.map((option, index) => (
                      <input
                        key={index}
                        type="text"
                        className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) =>
                          handlePollOptionChange(index, e.target.value)
                        }
                      />
                    ))}
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                      onClick={() => console.log("Add Poll Task")}
                    >
                      Submit
                    </button>
                  </div>
                )}
                {selectedCard.link === "Quiz" && (
                  <div>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                      placeholder="Enter quiz question"
                      value={quizQuestion}
                      onChange={(e) => setQuizQuestion(e.target.value)}
                    />
                    {quizOptions.map((option, index) => (
                      <input
                        key={index}
                        type="text"
                        className="w-full p-2 border rounded-lg mb-2 bg-[#282828]"
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) =>
                          handleQuizOptionChange(index, e.target.value)
                        }
                      />
                    ))}
                    <button
                      className="mt-4 bg-[#383838] text-white px-4 py-2 rounded hover:bg-[#484848]"
                      onClick={() => console.log("Add Quiz Task")}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
