"use client";

import Registrartion from "@/app/components/login";
import React, { useEffect } from "react";
import LoginPage from "../components/mob-login";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";

const Login: React.FC = () =>
{
  const router = useRouter();
  useEffect( () =>
  {
    router.refresh(); 
    // router.push( "/" );
  },[])

  return (
    <div className="bg-[#15151557] glass_effect">
      {/* <Registrartion /> */}
      <LoginPage  />
    </div>
  );
};

export default Login;
