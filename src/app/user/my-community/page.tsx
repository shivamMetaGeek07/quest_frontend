
"use client";
import { fetchUserData } from "@/redux/reducer/authSlice";
import { fetchAllCommunities, fetchCommunitiesByIds } from "@/redux/reducer/communitySlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaUser, FaBolt, FaTwitter, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";


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
      <div className="mx-4 lg:mx-20">
        <div className="text-2xl pt-10 font-bold">
          <h1>My Communities</h1>
          <button
            onClick={ handleJoinMore }
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
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
      <div className="grid gap-4 sm:gap-8 mx-4 lg:mx-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10">

        { userCommunities?.map( ( card, index ) => (

          <div
            key={ index }
            onClick={ () => router.push( `/user/community-project/${ card?._id }` ) }
            className="bg-white/5 sm:p-6 rounded-xl h-56 w-full shadow-lg group hover:scale-105 hover:bg-white/10"
          >
            <div className="flex gap-3 items-center">
              <div>
                <img
                  src={ card?.logo }
                  alt=""
                  className="w-10 h-10 object-cover rounded-xl"
                />
              </div>
              <div className="text-xl font-bold">
                <h1>{ card.title }</h1>
              </div>
            </div>
            <div className="text-gray-400 items-center pt-5">
              <p>{ card?.description.slice( 0, 30 ) }</p>
            </div>
            <div className="flex gap-10 pt-3 text-gray-400 h-12 w-24">
              <div className="flex bg-white/10 rounded-lg items-center p-2">
                <FaUser className="w-6 h-6" />
                <div>{ card.members.length }</div>
              </div>
              <div className="flex bg-white/10 rounded-lg p-2">
                <FaBolt className="w-6 h-6" />
                <div>{ card.quests.length }</div>
              </div>
              <div className="flex bg-white/10 rounded-lg p-2">
                <FaTwitter className="w-6 h-6" />
                <div>0</div>
              </div>
            </div>
          </div>
        ) ) }
      </div>
    </div>
  );
};

export default MyCommunities;
