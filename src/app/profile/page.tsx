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

type userData = {
  id: number;
  title: string;
  imageUrl: string;
};

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

  const userData: userData[] = [
    {
      id: 1,
      title: "Dummy Title 1",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    },
    {
      id: 2,
      title: "Dummy Title 2",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    },
    {
      id: 3,
      title: "Dummy Title 3",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    },
    {
      id: 4,
      title: "Dummy Title 4",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    },
    {
      id: 5,
      title: "Dummy Title 5",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    },
    {
      id: 6,
      title: "Dummy Title 6",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    },
  ];

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
            {userData.map((data) => (
              <div
                key={data.id}
                className="w-40 h-full sm:w-48 sm:h-40 rounded-md bg-cyan-200 neumorphism-box"
              >
                <img src={data.imageUrl} alt="user image" className="md:w-full md:h-40 rounded object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border border-gray-500 p-5 mt-5 mx-4 lg:mx-10 rounded-md">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {userData.map((data) => (
            <div
              key={data.id}
              className="w-40 h-full sm:h-48 sm:w-48 border rounded-md bg-cyan-200 neumorphism-box"
            >
             <img src={data.imageUrl} alt="user image" className=" md:h-48 md:w-full rounded object-cover" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
