"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./profilr.css";

const Profile: React.FC = () => {
  const router = useRouter();

  const [earned, setEarned] = useState<number | null>(null);

  const handleEarnRewardsClicks = () => {
    if (earned === null) {
      const earnedAmount: number = 5000; 
      setEarned(earnedAmount);
    } else {
      setEarned(null);
    }
  };

  const handleEarnRewardsClick = () => {
    router.push("/");
  };

  const boxes = Array(6).fill(0);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-10">
        <div>
          <div className="flex flex-col lg:flex-row items-center">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719532800&semt=ais_user"
              alt="avatar photo"
              width={200}
              height={200}
              className="neumorphism-avatar mt-8"
            />
            <div className="mt-4 lg:mt-8 lg:ml-4 text-center">
              <p className="bg-cyan-200 p-1 rounded-md neumorphism-username">
                username.fam
              </p>
              <div className="flex justify-center lg:justify-start p-4">
                <div>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="lg"
                    className="text-zinc-950 w-14 h-8 neumorphism-icon cursor-pointer"
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="lg"
                    className="text-blue-600 w-12 h-8 cursor-pointer "
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="lg"
                    className="text-pink-600 w-9 h-8 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="w-full lg:w-80 p-1 bg-slate-400 rounded-md text-center text-white neumorphism-button">
              global leaderboard rank
            </p>
            <p
              onClick={handleEarnRewardsClicks}
              className="w-full lg:w-80 p-1 bg-slate-400 rounded-md text-center mt-3 text-white neumorphism-button"
            >
              lifetime reward earn {earned !== null ? `${earned} coins` : ""}
            </p>
            <button
              onClick={handleEarnRewardsClick}
              className="w-full lg:w-80 p-1 rounded-md bg-slate-500 mt-3 neumorphism-earnButton "
            >
              earn rewards
            </button>
          </div>
        </div>
        <div className="mx-4 lg:mx-10 rounded-md">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 lg:mt-10">
            {boxes.map((_, index) => (
              <div
                key={index}
                className="w-40 h-48 sm:w-48 sm:h-40 rounded-md bg-cyan-200 neumorphism-box"
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="border border-gray-500 p-5 mt-5 mx-4 lg:mx-10 rounded-md">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {boxes.map((_, index) => (
            <div
              key={index}
              className="w-full h-40 sm:h-48 border rounded-md bg-cyan-200 neumorphism-box"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;


// I need to only push the code i have already commmit