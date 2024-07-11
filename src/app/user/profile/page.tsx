"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FaEdit } from "react-icons/fa";
import "./profilr.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { BallTriangle } from "react-loader-spinner";
import ModalForm from "../../components/ModalForm";
import { fetchUserData } from "@/redux/reducer/authSlice";

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
  const [isClient, setIsClient] = useState(false);
  const [earned, setEarned] = useState<number | null>(null);
  const dispatch=useDispatch<AppDispatch>();
  const handleEarnRewardsClicks = () => {
    if (earned === null) {
      const earnedAmount: number = 5000;
      setEarned(earnedAmount);
    } else {
      setEarned(null);
    }
  };
  const user=useSelector((state:RootState)=>state.login.user)
  
  const handleEarnRewardsClick = () => {
    router.push("/");
  };
 
 
  const handleEarnRewardsClickss = () => {
    router.push("/user/leaderboard");
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
  useEffect(() => {
    setIsClient(true); // Set the client flag to true on the client side

    // dispatch(fetchUserData())
    }, [dispatch]);

  if (!isClient) return (
    <div className="flex justify-center h-screen items-center">
    <BallTriangle/>
    </div>
  );
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mt-4 mx-4 lg:mx-10">
        <div>
          <div className="flex flex-col lg:flex-row items-center">
          {user?(<><img
              src={user.image}
              alt="avatar photo"
              width={200}
              height={200}
              className="neumorphism-avatar mt-8"
            /></>):(  <><img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719532800&semt=ais_user"
              alt="avatar photo"
              width={200}
              height={200}
              className="neumorphism-avatar mt-8"
            /></>)
          }
            <div className="mt-4 lg:mt-8 lg:ml-4 text-center">
              <div> 
                <div className="flex justify-start gap-5 row">
               <p className=" p-1 font-bold text-2xl font-mono  ">
                {user?.nickname}
                </p>
                <button className="bg-blue-500 text-white rounded-full text-md px-4 py-2" >
                    Follow
                </button>
                </div>
                <div>
                  <ModalForm/>
                </div>
                </div>

                
              
              {/* social icons */}
              {/* <div className="flex justify-center lg:justify-start p-4">
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
              </div> */}
            </div>
          </div>
          <div className="mt-8">
          <div className="flex row gap-2 items-center ">
          <p className="font-bold text-xl font-serif px-4 py-2">
                {user?.displayName}
          </p>
            <div onClick={handleEarnRewardsClickss} className="">
              <h2 className="bg-orange-50 rounded-full w-fit px-2 py-1 text-md font-bold text-white" >{user?.rank}</h2>
            </div>
            </div>

            <div className="flex row gap-3">
              <button className="px-4 font-bold py-2 rounded-full text-center hover:text-blue-600 ">123 following</button>
              <button className="px-4 font-bold py-2 rounded-full text-center hover:text-blue-600 ">24 followers</button>
            </div>
          
          <div className="flex col gap-5 justify-start items-center">
            <p
              onClick={handleEarnRewardsClicks}
              className="w-fit bg-slate-600 rounded-md text-start px-4 py-2 mt-3 text-white"
            >
              12312 points
            </p>
            <button
              onClick={handleEarnRewardsClick}
              className="p-1 rounded-lg bg-blue-500 mt-3 px-4 py-2"
            >
              earn rewards
            </button></div>
            
          </div>
        </div>
        <div className="mx-4 lg:mx-10 rounded-md">
          <div className="flex items-end justify-end ">
          <button onClick={()=>{
            router.push('/user/rewards')
          }} className="bg-blue-600 rounded-full px-2 py-1 text-sm font-bold">
            View all
          </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2 ">
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
        <div className="gap-2 ">
            <span>{user?.bio}</span>
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
