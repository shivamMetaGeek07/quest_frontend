import React from "react";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Community = () => {
  const imageUrl = (
    <svg
      width="80px"
      height="80px"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M512 616.2m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
        fill="#E73B37"
      />
      <path
        d="M511.6 656.9m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
        fill="#E73B37"
      />
      <path
        d="M512.4 697.7m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
        fill="#E73B37"
      />
      <path
        d="M512 130.8c42.1 0 81.7 16.4 111.5 46.2s46.2 69.4 46.2 111.5-16.4 81.7-46.2 111.5c-29.8 29.8-69.4 46.2-111.5 46.2s-81.7-16.4-111.5-46.2c-29.8-29.8-46.2-69.4-46.2-111.5s16.4-81.7 46.2-111.5 69.4-46.2 111.5-46.2m0-44c-111.4 0-201.6 90.3-201.6 201.6C310.4 399.8 400.7 490 512 490c111.4 0 201.6-90.3 201.6-201.6S623.3 86.8 512 86.8zM512.3 523.5L84 681.4v255.7h856V681.4L512.3 523.5zM896 893.1H128V712.6l384.3-142.4L896 712.6v180.5z"
        fill="#39393A"
      />
      <path
        d="M555.4 585.3l-1.4-0.5v159.9c0 11.7-4.8 22.3-12.4 30-7.7 7.7-18.3 12.4-30 12.4-23.4 0-42.4-19-42.4-42.4V585.3l-1.4 0.5-14.6 5.2v153.8c0 32.2 26.2 58.4 58.4 58.4S570 777 570 744.8V590.5l-14.6-5.2z"
        fill="#E73B37"
      />
    </svg>
  );

  const firstSectionCards = Array.from({ length: 5 }).map(() => imageUrl);

  return (
    <>
      <div className="Main div">
        <div className="logodiv bg-[#141d35] text-3xl font-bold w-full h-20 text-[#4169E1] text-center flex justify-center items-center rounded shadow-blue-500/50 ">
          Project <span className="text-white">Banner</span>
        </div>

        <div className="logo&n max-w-[1320px] py-5 flex flex-col md:flex-row mx-auto">
          <div className="basis-[40%] flex flex-col items-center md:items-start">
            <img
              src="https://shiftart.com/wp-content/uploads/2017/04/RC-Profile-Square.jpg"
              alt=""
              className="rounded-full w-64 h-64 object-cover"
            />
            <div className="flex justify-center lg:justify-start pt-6 pl-6 space-x-2">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                className="text-zinc-950 w-14 h-8 neumorphism-icon cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="text-blue-600 w-12 h-8 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="text-pink-600 w-9 h-8 cursor-pointer"
              />
            </div>
          </div>
          <div className="basis-[60%] px-5 pt-16">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              possimus doloremque vitae, quis consequatur magnam ipsam autem
              adipisci inventore mollitia illo assumenda! Quasi dicta
              voluptatibus nulla in aliquid excepturi accusantium.
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              possimus doloremque vitae, quis consequatur magnam ipsam autem
              adipisci inventore mollitia illo assumenda! Quasi dicta
              voluptatibus nulla in aliquid excepturi accusantium.
            </p>
          </div>
        </div>
        <div className="card p max-w-[1320px] py-5 flex flex-col lg:flex-row mx-auto gap-4">
          <div className="grid lg:grid-cols-5 md:grid-cols-5 gap-4 basis-[70%]">
            {firstSectionCards.map((svg, index) => (
              <div
                key={index}
                className="shadow-lg flex flex-col items-center h-40  justify-center hover:bg-slate-400 duration-1000 rounded-md hover:animate-pulse cursor-pointer"
              >
                {svg}
                <p className="text-center text py-2">Top performer</p>
              </div>
            ))}
           <div className="flex flex-col space-y-4">
              <div className="h-8 lg:flex-col bg-slate-400 w-full md:w-[900px] mx-auto flex-col m-3 rounded-md text-white text-center hover:bg-blue-400 duration-1000 hover:animate-pulse cursor-pointer p-5">
              </div>
              <div className="h-8 bg-slate-400 w-full md:w-[900px] mx-auto flex-col m-3 text-white text-center rounded-md hover:bg-blue-400 duration-1000 hover:animate-pulse cursor-pointer p-5">
              </div>
              <div className="h-8 bg-slate-400 w-full md:w-[900px] mx-auto flex-col m-3 text-white text-center hover:bg-blue-400 duration-1000 hover:animate-pulse cursor-pointer rounded-md p-5">
              </div>
            </div>

          </div>
          <div className="flex flex-col space-y-4 basis-[30%]">
            <div className=" mx-auto shadow-lg flex flex-col items-center justify-center hover:bg-slate-400 duration-1000 rounded-md hover:animate-pulse cursor-pointer h-28 w-72 bg-slate-200">
              Sprint timer
            </div>
            <div className="mx-auto shadow-lg flex flex-col items-center justify-center hover:bg-slate-400 duration-1000 rounded-md hover:animate-pulse cursor-pointer h-44 w-60 bg-slate-200">
              About reward pool
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
