"use client";
import React from "react";

const Page = () =>
{

  const signupDiscord = async () =>
  {
    window.location.href = `${ process.env.NEXT_PUBLIC_SERVER_URL}/auth/discord` ;
  };
  const signupX = async () =>
  {
    window.location.href = `${ process.env.NEXT_PUBLIC_SERVER_URL}/auth/twitter `;
  };
  // const getUserData = async () => {
  //   try {
  //     const response = await fetch(${process.env.NEXT_PUBLIC_SERVER_URL}/auth/twitter/follows/@Kiritosubaro, {
  //       credentials: "include", 
  //     });
  //     const data = await response.json();
  //     if (response.ok) {
  //       console.log("User Data:", data.user);
  //     } else {
  //       console.error("Failed to fetch user data", data.user);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  return (
    <div className="pt-40 p-5  flex gap-2">
      { " " }
      <button
        onClick={ signupDiscord }
        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-violet-500 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
      >
       
        <span className="ml-4">Sign In with Discord</span>
      </button>
      <button
        onClick={ signupX}
        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 text-white bg-black  flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
      >
         
        <span className="ml-4">checj guild</span>
      </button>
      
      <button
        onClick={ signupX }
        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 text-white bg-black  flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
      >

        <span className="ml-4">Sign In with X</span>
      </button>
    </div>
  );
};

export default Page;