"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import UserCard from "./components/HomeCard/UserCard";
import CommunityCard from "./components/HomeCard/CommunityCard";
import EcoCate from "./components/HomeCard/EcoCate";
import EducationCardList from "./components/HomeCard/EducationCard";
import GrantsCard from "./components/HomeCard/GrantsCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchUserData } from "@/redux/reducer/authSlice";
// import { fetchAllCommunities} from "../"
import Link from "next/link";
import { Button, Spinner } from "@nextui-org/react";
import Slider from "react-slick";
import { fetchAllCommunities } from "@/redux/reducer/communitySlice";
import { getCommunitySuccess } from "@/redux/reducer/adminCommunitySlice";


const Homepage = () =>
{
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector( ( state: RootState ) => state.login.user );
  const communities = useSelector( ( state: any ) => state.community.allCommunities );
  // console.log( Communities );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect( () =>
  {
    dispatch( fetchAllCommunities() );
    dispatch (getCommunitySuccess());
  }, [] );

  // if(!data) return (
  // <div className="h-screen flex justify-center items-center">
  //   <Spinner/>
  // </div>
  // );
  return (
    <div className="w-[90%] mx-auto">
      <UserCard />


      <EcoCate />

      <div className="mx-5 md:mx-2">
        <div className="flex items-center gap-1  mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
          >
            <path
              d="M1 1H6.48652L15 10"
              stroke="#FA00FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M6 5L11 10" stroke="#FA00FF" strokeLinecap="round" />
          </svg>
          <div>
            <p>Communities</p>
          </div>
          <div>
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"

              height="2"
              viewBox="0 0 952 2"
              fill="none"
            >
              <path
                opacity="0.8"
                d="M951 1L0.999969 1"
                stroke="url(#paint0_linear_53_3430)"
                strokeLinecap="round"
                strokeDasharray="13 13"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_53_3430"
                  x1="951"
                  y1="0.5"
                  x2="1"
                  y2="0.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8C71FF" stopOpacity="0" />
                  <stop offset="1" stopColor="#FA00FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className=" mt-8">
          {/* <div className="grid  lg:gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-6"> */ }
          <Slider { ...settings }>

            { communities?.map( ( data: any, index: number ) => (
              <CommunityCard key={ index } data={ data } />
            ) ) }
          </Slider>
          {/* </div> */ }
        </div>
      </div>
      <EducationCardList />
      <GrantsCard />
    </div>
  );
};

export default Homepage;

