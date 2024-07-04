"use client";

import Image from "next/image";
import Community from "./components/Community";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import headerImage from "../../public/assests/headerImage.png"
import { images } from "../../public/assests/image"

interface data {
  id: Number;
  profilePic: string;
  title: string;
  description: string;
}
interface bounti {
  image: string;
  name: string;
  description: string;
}

export default function Home() {
  const router = useRouter()
  

  const getUserData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/profile`,
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("User Data:", data.user);
      } else {
        console.error("Failed to fetch user data", data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className=" bg-black">
      <Navbar />
      <div className="lg:mx-20 mx-auto">

        {/* header section */}
        <div className="flex flex-col lg:flex-row items-center w-full gap-10 lg:gap-10 justify-between p-4">
  <div className="w-full lg:w-2/5 text-center lg:text-left">
    <h1 className="text-white text-2xl font-bold mb-4">Discover Your Community Here</h1>
    <p className="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo, in nihil nobis hic culpa ullam! Fuga labore veritatis perferendis! Aliquid, velit cumque ipsam dolorum similique consequuntur
    </p>
    <button className="bg-[#5865F2] rounded-sm mt-4 px-8 py-3 text-white">Learn more</button>
  </div>
  <div className="w-full lg:w-2/6 flex justify-center lg:justify-end">
    <Image
      className="w-full max-w-full lg:max-w-lg rounded-lg"
      src={images.headerImage}
      alt="Community Image"
    />
  </div>
</div>


        {/* Contact with us */}
        <div className="mt-12">
          <h1 className="text-white text-2xl font-bold mb-4 text-center lg:text-left">Contact With US</h1>
          <div className="flex flex-wrap justify-center md:justify-center lg:justify-between items-center gap-4">
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.instagram} alt="instagram" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.telegram} alt="telegram" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.fourthicon} alt="fourth icon" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.vector} alt="vector" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.telegram} alt="telegram" />
            </div>
          </div>
        </div>



        {/* EcoSystem */}
        <div className="mt-12">
          <h1 className="text-white text-2xl font-bold mb-4 text-center lg:text-left">EcoSystem</h1>
          <div className="flex flex-wrap justify-center md:justify-center lg:justify-between  items-center gap-4">
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image11} alt="instagram" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image7} alt="telegram" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image8} alt="fourth icon" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image9} alt="vector" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image11} alt="telegram" />
            </div>
          </div>
        </div>



        {/* Category */} 
        <div className="mt-12">
          <h1 className="text-white text-2xl font-bold mb-4 text-center lg:text-left">Category</h1>
          <div className="flex flex-wrap justify-center md:justify-center  lg:justify-between  items-center gap-4">
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image12} alt="instagram" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image13} alt="telegram" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image14} alt="fourth icon" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image15} alt="vector" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image16} alt="telegram" />
            </div>
          </div>
        </div>


       
      

       

  
        </div>
      </div>
   
  );
}

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        height: "30px",
        width: "30px",
        display: "block",
        background: "blue",
        borderRadius: "50%",
        right: "100px",
        zIndex: "2",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        borderRadius: "50%",
        left: "100px",
        zIndex: "2",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    />
  );
};
