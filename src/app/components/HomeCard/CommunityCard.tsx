import Image from "next/image";
import React from "react";

// Define the TypeScript type for the card data
type CommunityCardData = {
  logo: string;
  title: string; // alphahub
  quests: []; // length
  description: string; // bio
  members: [];
};


// CommunityCard component
const CommunityCard: React.FC<{ data: CommunityCardData }> = ({ data }) => {
  return (
    <div className="">
      <div className="outer-div relative flex gap-8 hover:bg-[#8c71ff] hover:text-[#111111] border-[#282828] border p-1 flex-col m-auto justify-center">
        <div className="flex flex-row text-xl items-center justify-around m-auto">
          <div className="p-1">
            <div className="image-container h-[5rem] w-[5rem] items-center flex">
              <img
                src={data?.logo}
                alt=""
                className="styled-image"
              />
            </div>
            <div className="bg_Div_Down h-[2rem] mt-2 bg-gray-800" />
          </div>
          <div className="flex flex-col">
            <div className="flex  m-1 flex-col items-center">
              <div className="flex bg_eco_div border-b-4 border-[#8c71ff] pt-6 bg-[#1d1a28] flex-row items-center justify-between w-full m-auto">
                <div className="text-lg ml-3">{ data.title }</div>
                <div className="text-xs flex flex-row rounded-lg pl-6">
                  <div className="flex m-2 items-center flex-col">
                    <span>{ data?.quests?.length}</span>
                    <span>Quests</span>
                  </div>
                  <div className="flex m-2 items-center flex-col">
                    <span>{ data?.members?.length || 0 }</span>
                    <span>Followers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end gap-x-1">
              <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
            </div>
          </div>
        </div>


        <div className="absolute -top-1 -right-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 4 4"
            fill="none"
          >
            <path d="M0.5 0V3.5H4" stroke="white" />
          </svg>
        </div>

        <div>
          <div className="flex flex-row text-sm m-1 justify-between ">
            <span className="flex descText">Desc:</span>
            <span className="text-gray-600 descdata text-wrap">
              { data?.description }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
