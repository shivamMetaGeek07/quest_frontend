
"use client";
import { fetchUserData } from "@/redux/reducer/authSlice";
import { fetchAllCommunities, fetchCommunitiesByIds } from "@/redux/reducer/communitySlice";
import { AppDispatch, RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaUser, FaBolt, FaTwitter, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

interface Card{
  _id:string,
  title:string,
  logo:string,
  description:string,
  members:[],
  quests:[]


}

const MyCommunities: React.FC = () =>
{
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const cardData = useSelector( ( state: RootState ) => state.community.allCommunities );
  // const userCommunities = useSelector( ( state: RootState ) => state.login.user?.community );
  
  const userCommunities = useSelector( ( state: RootState ) => state.community.userCommunities );
  const userCommunityIds = useSelector( ( state: RootState ) => state.login.user?.community );

  console.log(userCommunities)
  // console.log()
  useEffect( () =>
  {
    dispatch( fetchUserData() );
  }, [ dispatch ] );
  const handleJoinMore = () =>
  {
    router.push( '/allcommunity' ); 
  };

  useEffect( () =>
  {
    if ( userCommunityIds && userCommunityIds.length > 0 )
    {
      dispatch( fetchCommunitiesByIds( userCommunityIds ) );
    }
  }, [ dispatch, userCommunityIds ] );
  return (
    <div className="bg-black text-white min-h-screen ">
      <div className="mx-4 lg:mx-20 sm:mx-20">
        <div className="text-2xl pt-10 font-bold">
          <h1>My Communities</h1>
          <button
            onClick={ handleJoinMore }
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm my-4 font-bold py-2 px-4 rounded-full flex items-center"
          >
            <FaPlus className="mr-2" /> Join More
          </button>
        </div>
        <div className="max-w-[600px] pt-4 text-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            neque magni dolorum dignissimos enim delectus velit ut aspernatur.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:gap-4 mx-4 sm:ml-20 lg:mx-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10">

        { userCommunities?.map( ( card:Card, index ) => (

          <div
            key={ index }
            onClick={ () => router.push( `/user/community-project/${ card?._id }` ) }
            className="outer-div bg-white/5  rounded-md relative flex lg:gap-6 sm:gap-4 gap-4 hover:bg-[#8c71ff] hover:text-[#111111] border-[#282828] border lg:p-4 sm:p-2 p-2 flex-col m-auto justify-center w-full sm:w-full"
          >
           


             <div className="flex flex-row text-xl items-center justify-around m-auto">
                <div className="p-1">
                  <div className="image-container h-[5rem] w-[5rem] items-center flex">
                    <img src={card.logo} alt="" className="styled-image" />
                  </div>
                  <div className="bg_Div_Down h-[2rem]  bg-gray-800" />
                </div>
                

                <div className="flex flex-col">
                  <div className="flex  m-1 flex-col items-center">
                    <div className="flex bg_eco_div border-b-4 border-[#8c71ff] pt-4 bg-[#28223d] flex-row items-center justify-between lg:w-[18rem] sm:w-full w-full m-auto">
                      <div className="text-lg lg:ml-3 sm:ml-3 ml-3">
                        <h1>{card.title}</h1>
                      </div>
                      <div className="text-xs flex flex-row rounded-lg lg:pl-6">
                        <div className="flex m-2 items-center flex-col">
                          <span className="text-lg">{card.quests.length}</span>
                          <span className="text-neutral-300 descdata">QUESTS</span>
                        </div>
                        <div className="flex m-2 items-center flex-col">
                          <span className="text-lg">{card.members.length}</span>
                          <span className="text-neutral-300 descdata">FOLLOWERS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end gap-x-1">
                    <div className="flex bg-white/10 rounded-lg py-1 px-2 items-center">
                      <FaUser className="w-4 h-4" />
                      <div className="pl-1">{card.members.length}</div>
                    </div>
                    <div className="flex bg-white/10 rounded-lg py-1 px-2 items-center">
                      <FaBolt className="w-4 h-4" />
                      <div className="pl-1">{card.quests.length}</div>
                    </div>
                    <div className="flex bg-white/10 rounded-lg py-1 px-2 items-center">
                      <FaTwitter className="w-4 h-4" />
                      <div className="pl-1"></div>
                    </div>
                    {/* <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              <div className="eco_box w-5 h-5 bg-[#8c71ff]" /> */}
                  </div>
                </div>
              </div>


              <div>
          <div className="flex flex-row text-sm m-1 gap-2 ">
            <span className="flex descText">Desc:</span>
            <span className="text-gray-600 descdata text-wrap">
            {card.description.slice(0, 20)}
            </span>
          </div>
        </div>



          </div>
        ) ) }
      </div>
    </div>
  );
};

export default MyCommunities;
