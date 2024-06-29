"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Ecosystem:React.FC = () => {
  const router = useRouter();

  const handleIconClick = () => {
    router.push("/community");
  };

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
  const imageUrl2 =
    "https://media.wired.com/photos/5f52a44bb555bc55dbcdf5a8/master/pass/Gear-Wireless-Bluetooth-1226031847.jpg";

  const firstSectionCards = Array.from({ length: 10 }).map(() => imageUrl);
  const secondSectionCards = Array.from({ length: 3 }).map(() => imageUrl2);

  return (
    <>
      <div className="maindiv">
        <div className="logodiv bg-[#141d35] text-3xl font-bold w-full h-20 text-[#4169E1] text-center flex justify-center items-center rounded shadow-blue-500/50 ">
          Eco <span className="text-white">System</span>
        </div>

        <div className="card max-w-[1320px] md:py[80] py-5 mx-auto grid lg:grid-cols-5 sm:grid-cols-2 gap-4">
          {firstSectionCards.map((svg, index) => (
            <div
            onClick={handleIconClick}
              key={index}
              className="group shadow-lg p-5 flex flex-col items-center justify-center hover:bg-slate-400 duration-1000 rounded-md  hover:animate-pulse cursor-pointer"
            >
              {svg}
              <h1 className="text-center text-xl py-2">Avatar</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          ))}
      </div>
        <hr />

        <div className="">
          <div className="card max-w-[1320px] md:py[80] py-5 mx-auto  grid lg:grid-cols-3 sm-grid-cols-1 gap-10">
            {secondSectionCards.map((imageUrl2, index) => (
              <div
                key={index}
                className="text-center shadow-lg rounded"
              >
                <div className="overflow-hidden">
                <img
                  src={imageUrl2}
                  alt={`Card ${index + 1}`}
                  className="hover:scale-125 rounded duration-1000"
                />
                </div>
                <h1 className="py-2 text-2xl">Headphone</h1>
                <p className="py-2">
                  sound quality with our latest headphones. Perfect for music
                  lovers and audiophiles
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecosystem;
