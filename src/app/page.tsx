"use client";
import { useEffect } from "react";

export default function Home() {
  const getUserData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/profile`, {
        credentials: "include", // Include cookies in request
      });
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
    <>
      <div className="  ">Home </div>
    </>
  );
}
