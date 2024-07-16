"use client";
import { RootState } from "@/redux/store";
import React, { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useSelector } from "react-redux";
import ModalForm from "../../components/ModalForm";
import axios from "axios";
import { FaBolt, FaTwitter, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface Community {
  _id: string;
  title: string;
  description: string;
  logo: string;
  members: any[];
  quests: any[];
  
}

type Props = {};

const KolsProfile = (props: Props) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [ communities, setCommunities ] = useState<Community[]>( [] );

  const fetchCommunities = async (ids: string[]) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/community/getByIds`, {
        communityIds: ids,
      });
      setCommunities(response.data.communities);
      console.log("community data", response.data);
    } catch (error) {
      console.error('Failed to fetch communities:', error);
    }
  };

  const user = useSelector((state: RootState) => state.login.user);

  useEffect(() => {
    setIsClient(true);
    if (user && user.community) {
      fetchCommunities(user.community);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <BallTriangle />
      </div>
    );
  }

  if (!isClient) {
    return (
      <div className="flex justify-center h-screen items-center">
        <BallTriangle />
      </div>
    );
  }

  return (
    <>
      {user && user.discordInfo && (
        <div className="min-h-screen bg-[#121212]">
          <div className="lg:mx-10 mx-4 py-10">
            <div className="flex flex-col sm:flex-row  lg:flex-row gap-6">
              <div className="lg:basis-[30%] sm:basis-[40%] flex flex-col items-center ">
                <div className="flex">
                <img
                  src={user.image}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
                </div>
                <div className="mt-2">
                  <ModalForm />
                </div>
                <div className="flex flex-col lg:flex-row justify-center mt-6 gap-6">
                  <div>
                    <p className="font-semibold lg:text-lg text-2xl">{user.displayName}</p>
                    <p className="hover:text-sky-600 mt-4 font-semibold">123 following</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="px-10 py-1 lg:px-6 lg:py-1 rounded-xl font-semibold bg-blue-500">
                      Rank
                    </span>
                    <p className=" hover:text-sky-600 mt-3 text-xl lg:text-medium font-semibold">followers</p>
                  </div>
                </div>
                <div>
                <button className="bg-blue-500 rounded-2xl px-6 py-1 mt-6">
                  follow
                </button>
                </div>
              </div>
              <div className="lg:basis-[70%] sm:basis-[60%]">
                <div className="bg-[#1e1e1e] shadow rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-300">{user.bio}</p>
                </div>
                <h2 className="text-xl font-bold mt-6 mb-4">My Communities</h2>
                <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 pt-5">
                  {communities.map((community, index) => (
                    <div
                      key={index}
                      className="bg-white/5 p-4 sm:p-6 rounded-xl h-56 w-full shadow-lg group hover:scale-105 hover:bg-white/10 transition-transform cursor-pointer"
                      onClick={()=>router.push(`/kol/community-project/${community?._id}`)}
                    >
                      <div className="flex gap-3 items-center">
                        <img
                          src={community.logo}
                          alt=""
                          className="w-10 h-10 object-cover rounded-xl"
                        />
                        <div className="text-xl font-bold">
                          <h1>{community.title}</h1>
                        </div>
                      </div>
                      <div className="text-gray-400 pt-5">
                        <p>{community.description.slice(0, 30)}</p>
                      </div>
                      <div className="flex gap-3 pt-3 text-gray-400">
                        <div className="flex bg-white/10 rounded-lg items-center p-2">
                          <FaUser className="w-6 h-6" />
                          <div>{community.members.length}</div>
                        </div>
                        <div className="flex bg-white/10 rounded-lg items-center p-2">
                          <FaBolt className="w-6 h-6" />
                          <div>{community.quests.length}</div>
                        </div>
                        <div className="flex bg-white/10 rounded-lg items-center p-2">
                          <FaTwitter className="w-6 h-6" />
                          <div>0</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KolsProfile;
