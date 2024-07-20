
"use client";
import { fetchUserData } from "@/redux/reducer/authSlice";
import { fetchAllCommunities, fetchCommunitiesByIds } from "@/redux/reducer/communitySlice";
import { AppDispatch, RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaUser, FaBolt, FaTwitter, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

interface Card
{
  _id: string,
  title: string,
  logo: string,
  description: string,
  members: [],
  quests: [];
}

const MyCommunities: React.FC = () =>
{
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const cardData = useSelector( ( state: RootState ) => state.community.allCommunities );
  // const userCommunities = useSelector( ( state: RootState ) => state.login.user?.community );

  const userCommunities = useSelector( ( state: RootState ) => state.community.userCommunities );
  const userCommunityIds = useSelector( ( state: RootState ) => state.login.user?.community );
  const temp = useSelector( ( state: any ) => ( state.login.user.createdCommunities ) );
  const [ createdCommunity, setCreatedCommunity ] = useState( [] );


  useEffect( () =>
  {
    dispatch( fetchUserData() );

  }, [ dispatch ] );

  const fetchCreatedCommunities = (
    async () =>
    {
      try
      {
        const response = await fetch( `${ process.env.NEXT_PUBLIC_SERVER_URL }/community/getByIds`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( { communityIds: temp } ),
        } );
        const data = await response.json();
        setCreatedCommunity( data.communities );
      } catch ( error )
      {
        console.log( error );
      }
    }
  );



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
    fetchCreatedCommunities();

  }, [ dispatch, userCommunityIds ] );
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <header className="mb-12">
          <h1 className="text-3xl font-bold mb-4">My Communities</h1>
          <div className="flex justify-between items-center">
            <p className="text-gray-400 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              neque magni dolorum dignissimos enim delectus velit ut aspernatur.
            </p>
            <button
              onClick={ handleJoinMore }
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full flex items-center"
            >
              <FaPlus className="mr-2" /> Join More
            </button>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Your Joined Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            { userCommunities && userCommunities.length > 0 && userCommunities.map( ( card: Card, index ) => (

              <div
                key={ index }
                onClick={ () => router.push( `/user/community-project/${ card?._id }` ) }
                className="overflow-hidden outer-div bg-white/5  rounded-md relative flex md:gap-6 lg:gap-6 sm:gap-4 gap-4 hover:bg-[#8c71ff] hover:text-[#111111] border-[#282828] border md:p-4 lg:p-4 p-2 flex-col  justify-center w-full sm:w-full"
              >

                <div className="flex  flex-col md:flex-row lg:flex-row text-xl items-center justify-around ">
                  <div className="p-1">
                    <div className="image-container h-[3rem] w-[3rem] md:h-[5rem] md:w-[5rem] items-center flex ">
                      <img src={ card.logo } alt="style image" className="styled-image" />
                    </div>
                    <div className="bg_Div_Down h-[1rem] md:h-[2rem] bg-gray-800"> </div>
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-start gap-2 ">
                    <div className="flex w-full flex-col items-start ">
                      <div className="flex w-full md:h-[5rem] bg_eco_div border-b-4 border-[#8c71ff] gap-2 md:gap-2  p-2 bg-[#28223d] flex-col lg:flex-row items-center md:items-end lg:items-end justify-between ">

                        <div className="md:w-4/5 p truncate text-[12px] md:text-[10px] lg:text-[10px] md:ml-3 md:text-start text-center card-title">{ card.title }</div>

                        <div className="md:1/5 flex flex-row rounded-lg justify-center md:justify-end">
                          <div className="flex gap-1 mr-2 items-center flex-col">
                            <span className="card-white-text ">{ card.quests.length }</span>
                            <span className=" card-gray-text ">QUESTS</span>
                          </div>
                          <div className="flex gap-1 items-center flex-col">
                            <span className="card-white-text ">{ card.members.length }</span>
                            <span className=" card-gray-text ">FOLLOWERS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-row justify-end gap-2">
                      <div className="flex bg-[#8C71FF] py-1 px-2 items-center">
                        <FaUser className="md:w-4 w-2 h-2 md:h-4" />
                        <div className="pl-1 text-sm">{ card.members.length }</div>
                      </div>
                      <div className="flex bg-[#8C71FF] py-1 px-2 items-center">
                        <FaBolt className="md:w-4 w-2 h-2 md:h-4" />
                        <div className="pl-1 text-sm">{ card.quests.length }</div>
                      </div>
                      <div className="flex bg-[#8C71FF] py-1 px-2 items-center">
                        <FaTwitter className="md:w-4 w-2 h-2 md:h-4" />
                        <div className="pl-1 text-sm"></div>
                      </div>
                      {/* <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              <div className="eco_box w-5 h-5 bg-[#8c71ff]" /> */}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row text-xs m-1 gap-2 justify-start  ">
                  <span className=" descText">Bio: </span>
                  <span className="descdata text-wrap ">
                    { card.description.slice( 0, 20 ) }
                  </span>
                </div>
              </div>
            ) ) }
          </div>
        </section>

        <section>
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              Your Created Communities
            </h2>
            <button
              onClick={ () => router.push( '/kol/create-community' ) }
              className="bg-[#8c71ff] hover:bg-[#7c5bff] text-white font-bold py-2 px-4 rounded-lg flex items-center"
            >
              <FaPlus className="mr-2" /> Add Community
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            { createdCommunity?.map( ( card: Card, index ) => (

              <div
                key={ index }
                onClick={ () => router.push( `/kol/community-project/${ card?._id }` ) }
                className="overflow-hidden outer-div bg-white/5  rounded-md relative flex md:gap-6 lg:gap-6 sm:gap-4 gap-4 hover:bg-[#8c71ff] hover:text-[#111111] border-[#282828] border md:p-4 lg:p-4 p-2 flex-col  justify-center w-full sm:w-full"
              >

                <div className="flex  flex-col md:flex-row lg:flex-row text-xl items-center justify-around ">
                  <div className="p-1">
                    <div className="image-container h-[3rem] w-[3rem] md:h-[5rem] md:w-[5rem] items-center flex ">
                      <img src={ card.logo } alt="style image" className="styled-image" />
                    </div>
                    <div className="bg_Div_Down h-[1rem] md:h-[2rem] bg-gray-800"> </div>
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-start gap-2 ">
                    <div className="flex w-full flex-col items-start ">
                      <div className="flex w-full md:h-[5rem] bg_eco_div border-b-4 border-[#8c71ff] gap-2 md:gap-2  p-2 bg-[#28223d] flex-col lg:flex-row items-center md:items-end lg:items-end justify-between ">

                        <div className="md:w-4/5 p truncate text-[12px] md:text-[10px] lg:text-[10px] md:ml-3 md:text-start text-center card-title">{ card.title }</div>

                        <div className="md:1/5 flex flex-row rounded-lg justify-center md:justify-end">
                          <div className="flex gap-1 mr-2 items-center flex-col">
                            <span className="card-white-text ">{ card.quests.length }</span>
                            <span className=" card-gray-text ">QUESTS</span>
                          </div>
                          <div className="flex gap-1 items-center flex-col">
                            <span className="card-white-text ">{ card.members.length }</span>
                            <span className=" card-gray-text ">FOLLOWERS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full flex-row justify-end gap-2">
                      <div className="flex bg-[#8C71FF] py-1 px-2 items-center">
                        <FaUser className="md:w-4 w-2 h-2 md:h-4" />
                        <div className="pl-1 text-sm">{ card.members.length }</div>
                      </div>
                      <div className="flex bg-[#8C71FF] py-1 px-2 items-center">
                        <FaBolt className="md:w-4 w-2 h-2 md:h-4" />
                        <div className="pl-1 text-sm">{ card.quests.length }</div>
                      </div>
                      <div className="flex bg-[#8C71FF] py-1 px-2 items-center">
                        <FaTwitter className="md:w-4 w-2 h-2 md:h-4" />
                        <div className="pl-1 text-sm"></div>
                      </div>
                      {/* <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              <div className="eco_box w-5 h-5 bg-[#8c71ff]" /> */}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row text-xs m-1 gap-2 justify-start  ">
                  <span className=" descText">Bio: </span>
                  <span className="descdata text-wrap ">
                    { card.description.slice( 0, 20 ) }
                  </span>
                </div>
              </div>
            ) ) }
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyCommunities;
