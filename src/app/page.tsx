"use client";

import Image from "next/image";
import Community from "./components/Community";

import { useEffect } from "react";

export default function Home() {
  const getUserData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/profile`, {
        credentials: "include", 
      });
      const data = await response.json();
      if (response.ok) {
        console.log( "User Data:", data.user );
        // set to local storage
        localStorage.setItem("user", JSON.stringify(data.user));
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      landing page
      <div>
        <Community />
      </div>
    </main>
  );
}
