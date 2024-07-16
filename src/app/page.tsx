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
import Link from "next/link";
import { Spinner } from "@nextui-org/react";

type CommunityCardData = {
  imageUrl: string;
  alphaHub: string;
  quest: number;
  followers: number;
  bio: string;
};

const communityCardsData: CommunityCardData[] = [
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/42f5/13a3/4432e1deb16bde26b61e2dbe7c954241?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VokOknLrLdC7RKNmvjAaZ-dd8AHG7IUllQoyaAKQYhrQ6JkyH9vmGjWxZuVtzPelNqSwVFTbP1g8wRtwFejAodAjCQaGwyUm5DurxzgXtBr9YP-zVnGGcy3PxFYdC6VqznebbGmjUdccjrlfBJ5-0lRp91YaxklOI4D2XtcZpn~Xa316yCWM-JKMZ90QuNkIUBiatov4ycI9yCD8ig-74KZnL-orBsG2PPpYg4Z2KRQ25pBeUl3MPsf~m8gb2-Pn24snedqk3bYsK5WHZTUoM-DeFfwRSoHZg2hDWwfF3lgoh~x0rnU33iOHhlWdAb-WVCmc7gwVeiUvHRPKc3eBnA__",
    alphaHub: "ALPHA HUB",
    quest: 216,
    followers: 7701,
    bio: "Lorem ipsum dolor sit amet, consectetur adipi scing elit.",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/42f5/13a3/4432e1deb16bde26b61e2dbe7c954241?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VokOknLrLdC7RKNmvjAaZ-dd8AHG7IUllQoyaAKQYhrQ6JkyH9vmGjWxZuVtzPelNqSwVFTbP1g8wRtwFejAodAjCQaGwyUm5DurxzgXtBr9YP-zVnGGcy3PxFYdC6VqznebbGmjUdccjrlfBJ5-0lRp91YaxklOI4D2XtcZpn~Xa316yCWM-JKMZ90QuNkIUBiatov4ycI9yCD8ig-74KZnL-orBsG2PPpYg4Z2KRQ25pBeUl3MPsf~m8gb2-Pn24snedqk3bYsK5WHZTUoM-DeFfwRSoHZg2hDWwfF3lgoh~x0rnU33iOHhlWdAb-WVCmc7gwVeiUvHRPKc3eBnA__",
    alphaHub: "BETA HUB",
    quest: 123,
    followers: 4567,
    bio: "Lorem ipsum dolor sit amet, consectetur adipi scing elit.",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/42f5/13a3/4432e1deb16bde26b61e2dbe7c954241?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VokOknLrLdC7RKNmvjAaZ-dd8AHG7IUllQoyaAKQYhrQ6JkyH9vmGjWxZuVtzPelNqSwVFTbP1g8wRtwFejAodAjCQaGwyUm5DurxzgXtBr9YP-zVnGGcy3PxFYdC6VqznebbGmjUdccjrlfBJ5-0lRp91YaxklOI4D2XtcZpn~Xa316yCWM-JKMZ90QuNkIUBiatov4ycI9yCD8ig-74KZnL-orBsG2PPpYg4Z2KRQ25pBeUl3MPsf~m8gb2-Pn24snedqk3bYsK5WHZTUoM-DeFfwRSoHZg2hDWwfF3lgoh~x0rnU33iOHhlWdAb-WVCmc7gwVeiUvHRPKc3eBnA__",
    alphaHub: "GAMMA HUB",
    quest: 789,
    followers: 2345,
    bio: "Lorem ipsum dolor sit amet, consectetur adipi scing elit.",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/42f5/13a3/4432e1deb16bde26b61e2dbe7c954241?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VokOknLrLdC7RKNmvjAaZ-dd8AHG7IUllQoyaAKQYhrQ6JkyH9vmGjWxZuVtzPelNqSwVFTbP1g8wRtwFejAodAjCQaGwyUm5DurxzgXtBr9YP-zVnGGcy3PxFYdC6VqznebbGmjUdccjrlfBJ5-0lRp91YaxklOI4D2XtcZpn~Xa316yCWM-JKMZ90QuNkIUBiatov4ycI9yCD8ig-74KZnL-orBsG2PPpYg4Z2KRQ25pBeUl3MPsf~m8gb2-Pn24snedqk3bYsK5WHZTUoM-DeFfwRSoHZg2hDWwfF3lgoh~x0rnU33iOHhlWdAb-WVCmc7gwVeiUvHRPKc3eBnA__",
    alphaHub: "GAMMA HUB",
    quest: 789,
    followers: 2345,
    bio: "Lorem ipsum dolor sit amet, consectetur adipi scing elit.",
  },
];

const page = () => {
  const [isClient, setIsClient] = useState(false);
  const data = useSelector((state: RootState) => state.login.user);

  // if(!data) return (
  // <div className="h-screen flex justify-center items-center">
  //   <Spinner/>
  // </div>
  // );
  // if (!isClient) return null;
  // console.log("data",data)
  
  // useEffect(() => {
  //   setIsClient(true); // Set the client flag to true on the client side
  // }, []);
  return (
    <div className="w-[90%] mx-auto">
      <UserCard />
      <EcoCate />
      <div>
        <div className="flex items-center gap-1 lg:ml-20 sm:mx-20 mx-5 mt-10">
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
        <div className="lg:ml-16 sm:ml-16  ">
          <div className="grid  lg:gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-6">
            {communityCardsData.map((data, index) => (
              <CommunityCard key={index} data={data} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <EducationCardList />
      </div>

      <div>
        <GrantsCard />
      </div>
    </div>
  );
};

export default page;
