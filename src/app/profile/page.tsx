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

type frndData = {
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

  const handleEarnRewardsClickss = () => {
    router.push("/leaderboard");
  };

  const userData: userData[] = [
    {
      id: 1,
      title: "Badges earn",
      imageUrl:
        "https://cdn0.iconfinder.com/data/icons/dev-coding-2/100/Coding_award-512.png",
    },
    {
      id: 2,
      title: "Badges earn",
      imageUrl:
        "https://cdn0.iconfinder.com/data/icons/dev-coding-2/100/Coding_award-512.png",
    },
    {
      id: 3,
      title: "Badges earn",
      imageUrl:
        "https://cdn0.iconfinder.com/data/icons/dev-coding-2/100/Coding_award-512.png",
    },
    {
      id: 4,
      title: "Badges earn",
      imageUrl:
        "https://people.ce.pdn.ac.lk/images/badges/volunteered-developer.png",
    },
    {
      id: 5,
      title: "Badges earn",
      imageUrl:
        "https://people.ce.pdn.ac.lk/images/badges/volunteered-developer.png",
    },
    {
      id: 6,
      title: "Badges earn",
      imageUrl:
        "https://people.ce.pdn.ac.lk/images/badges/volunteered-developer.png",
    },
  ];

  const frndData: frndData[] = [
    {
      id: 1,
      title: "John",
      imageUrl:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      id: 2,
      title: "John",
      imageUrl:
        "https://t4.ftcdn.net/jpg/05/80/60/33/360_F_580603305_ysEbDBvHCKM9TyzEINHyW614NWLdTe0b.jpg",
    },
    {
      id: 3,
      title: "John",
      imageUrl:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      title: "John",
      imageUrl:
        "https://designimages.appypie.com/profilepicture/profilepicture-2-portrait-head.jpg",
    },
    {
      id: 5,
      title: "John",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kqDrhX9VxmHMYIYvkxdzQWn67rt5g7D3S4ESTr2fdfjnDEW9Wnj1AuwAkHPzk4wwgfo&usqp=CAU",
    },
    {
      id: 6,
      title: "John",
      imageUrl:
        "https://t3.ftcdn.net/jpg/04/60/91/88/360_F_460918802_XVCymFr7MoziFpnInbTDvrlblYhvAOi2.jpg",
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
            <p onClick={handleEarnRewardsClickss} className="w-full lg:w-80 p-1 bg-slate-400 rounded-md text-center text-white neumorphism-button">
               go to global leaderboard rank
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
                className="w-40 h-full sm:w-48 sm:h-40 rounded-md bg-cyan-200 neumorphism-box flex items-center flex-col justify-center"
              >
                <img src={data.imageUrl} alt="user image" className="h-24 w-24 rounded-full object-cover " />
                <h1 className="pt-2 text-slate-700 font-medium">{data.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border border-gray-500 p-5 mt-5 mx-4 lg:mx-10 rounded-md">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {frndData.map((data) => (
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
