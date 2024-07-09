"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineDisconnect } from "react-icons/ai";
import { FaUser, FaTwitter, FaBolt } from "react-icons/fa";
import { fetchAllCommunities } from "@/redux/reducer/communitySlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

interface CommunitiesData {
  image: string;
  name: string;
  description: string;
  category: string;
  stats: {
    user: string;
    bolt: string;
    twitter: string;
    AiOutlineDisconnect: string;
  };
}

// const cardData: CommunitiesData[] = [
//   {
//     image: "https://s3-alpha-sig.figma.com/img/aa9d/a83f/bde90d19a375033f1fea06f6e8a9d1e3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4bijtujf6AwqeUwvP7biQWr5-HjDMsRrATJk5gt07oHujlhbolErxbJ2kejAuBSb8VCyqUBWq57cR3ibkbqlzsy5J2jX7lsPMwAfqyCmU8x9oiXeNvfFfL25g7BOOVnykYe4baoEHSULMb37Br~ZgNZIzPdqVlJjISr1czeRH7vnKJaBkcImyzGd3onadyFZh4nMAHA0LJr32OfoDXIkqi7WkJkPtX4g5-oScYooauw5mo2-V3uGWONhfZb1RhtVgUuCbNnQ84ubJ3lSznb7RKt2ljspPgPH~KGE4kt359o3Ekxu4Wp~lf5ZzIRUn~RGfMrAqcm67wKjCYJdPlwHA__",
//     name: "LayzerZero: AirDrop",
//     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, possimus quidem?",
//     category: "Airdrop",
//     stats: {
//       user: "20k",
//       bolt: "10",
//       twitter: "15k",
//       AiOutlineDisconnect: "",
//     },
//   },
//   {
//     image: "https://s3-alpha-sig.figma.com/img/aa9d/a83f/bde90d19a375033f1fea06f6e8a9d1e3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4bijtujf6AwqeUwvP7biQWr5-HjDMsRrATJk5gt07oHujlhbolErxbJ2kejAuBSb8VCyqUBWq57cR3ibkbqlzsy5J2jX7lsPMwAfqyCmU8x9oiXeNvfFfL25g7BOOVnykYe4baoEHSULMb37Br~ZgNZIzPdqVlJjISr1czeRH7vnKJaBkcImyzGd3onadyFZh4nMAHA0LJr32OfoDXIkqi7WkJkPtX4g5-oScYooauw5mo2-V3uGWONhfZb1RhtVgUuCbNnQ84ubJ3lSznb7RKt2ljspPgPH~KGE4kt359o3Ekxu4Wp~lf5ZzIRUn~RGfMrAqcm67wKjCYJdPlwHA__",
//     name: "Nifty Island",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore neque magni dolorum  ut aspernatur.",
//     category: "Island",
//     stats: {
//       user: "20k",
//       bolt: "10",
//       twitter: "15k",
//       AiOutlineDisconnect: "",
//     },
//   },
//   {
//     image: "https://s3-alpha-sig.figma.com/img/0c8f/9251/8d144dca61e09b3d34f9808b87d22ddf?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mHBOm489HTOX~oNUcokWangISa3kk466u~KJHnKHX2NQGCVRQvua5y3zJU1Kl3kGi1i99svO~PA2PMkfhpCywdpSYS3LQ3MOGOgBxZnOUR1nqDDHGfKIraAaw~zjTZa0wAhP7ybaVvVUMIDWTbNOnm1anz4Ab7iipdu-jGvXPj9zjwVWhHwfggxr-uDBXJ5rCc24zqLLFX0qDBCZ4HTYV6AHX7T3jGb5t6uWwEAH9jrxZ8r4zRyLnIkCH6m4FB0qUkgMSsy5~J7yLStS7jACaXyMj~YmUnPF0DSZymYQhUzcBVydLclE9qy8dSbRYzJx7NvCoRtXZYh3JlIgQ4Qpwg__",
//     name: "Blu Whale",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore delectus velit ut aspernatur.",
//     category: "Whale",
//     stats: {
//       user: "20k",
//       bolt: "10",
//       twitter: "15k",
//       AiOutlineDisconnect: "",
//     },
//   },
// ];

const MyCommunities = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const { data: community, loading, error } = useSelector( ( state: RootState ) => state.community );
  const temp = useSelector((state: RootState) =>
    console.log(state.community.allCommunities)
  );
  const cardData = useSelector(
    (state: RootState) => state.community.allCommunities
  );
  useEffect(() => {
    dispatch(fetchAllCommunities());
  }, [dispatch]);

  console.log(cardData);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="mx-4 lg:mx-20">
        <div className="text-2xl pt-10 font-bold">
          <h1>All Communities</h1>
        </div>
        <div className="max-w-[600px] pt-4 text-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            neque magni dolorum dignissimos enim delectus velit ut aspernatur.
          </p>
        </div>

        
          <div className="flex md:order-2 lg:order-1 mr-32 mt-10">
            <div className="relative md:block ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                placeholder="Search..."
              />
            </div>
          </div>
       

        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8">
          {cardData?.map((card, index) => (
            <div
              key={index}
              className="bg-white/5 p-4 sm:p-6  rounded-xl shadow-lg group hover:scale-105 hover:bg-white/10"
            >
              <div className="flex gap-3 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={card.logo}
                    alt=""
                    className="w-16 h-16 object-cover rounded-xl sm:w-10 sm:h-10"
                  />
                </div>
                <div className="text-xl font-bold">
                  <h1>{card.title}</h1>
                </div>
              </div>
              <div className="text-gray-400 items-center pt-5">
                <p className="text-sm sm:text-base">
                  {card.description.slice(0, 20)}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-3 text-gray-400">
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <FaUser className="w-5 h-5" />
                  <div className="pl-1">{card.members.length}</div>
                </div>
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <FaBolt className="w-5 h-5" />
                  <div className="pl-1">{card.quests.length}</div>
                </div>
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <FaTwitter className="w-5 h-5" />
                  <div className="pl-1"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCommunities;
