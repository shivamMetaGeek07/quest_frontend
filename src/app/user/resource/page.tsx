"use client";
import React from "react";

const Page = () =>
{
  
 
  const signupX = async () =>
    {
      try {
        const guildId="1258031079907131402"
        const response = await fetch(`${ process.env.NEXT_PUBLIC_SERVER_URL }/auth/fetch-guild/${guildId}`, {
          credentials: "include", 
        });
        const data = await response.json();
        if (response.ok) {
          console.log("User Data:", data);
        } else {
          console.error("Failed to fetch user data", data.user);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const signupDiscord  = async () => {
      try {
        const response = await fetch(`${ process.env.NEXT_PUBLIC_SERVER_URL }/auth/check-guilds`, {
          credentials: "include", 
        });
        const data = await response.json();
        if (response.ok) {
          console.log("User Data:", data);
        } else {
          console.error("Failed to fetch user data", data.user);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const sendMesg  = async () => {
      try {
        const channelId = '1258031079907131407';  // Replace with your channel ID
        const message = 'How this is new channel';  // Replace with your message content
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/message/channel`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',  // Ensure this matches your backend's credentials setting
          body: JSON.stringify({ channelId, message }),  // Send channel ID and message
        });
    
        const data = await response.json();
        if (response.ok) {
          console.log("User Data:", data);
        } else {
          console.error("Failed to fetch user data", data.user);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    
    const validateUrl = async () => {
      try {
        const inviteUrl="https://discord.gg/RpU8bRZx"
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/validate/${encodeURIComponent(inviteUrl)}`, {
          method: 'GET',
          credentials: 'include',  // Ensure this matches your backend's credentials setting
        });
    
    
    
        const data = await response.json();
        if (response.ok) {
          console.log("User Data:", data);
        } else {
          console.error("Failed to fetch user data", data.user);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
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
        onClick={ sendMesg}
        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 text-black bg-green-400  flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
      >
         
        <span className="ml-4">send message</span>
      </button>
      <button
        onClick={ validateUrl}
        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 text-black bg-cyan-300  flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
      >
         
        <span className="ml-4">Validate URl</span>
      </button>
    </div>
  );
};

export default Page;
