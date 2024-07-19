import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type Grant = {
  title: string;
  description: string;
  imgUrl: string;
  imgAlt: string;
  author: string;
  prize: string;
};

const grantsData: Grant[] = [
  {
    title: "WEB3 INFRASTRUCTURE",
    description:
      "THIS ROUND AIMS TO STRENGTHEN THE ETHEREUM ECOSYSTEM’S FOUNDATIONAL INFRASTRUCTURE LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/72f7/eb8e/ff8692bf95982ecb561c199d5314291f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko6OiZDcudfyqG3Q720xpwT7kirvLOEHUMzDkD3FW7WDemHxn~meR~6t~ixjmKFS8eyi5tztRMuF8fE0NexpIZKZlnA5BU85mtwW65RMzVSQ8QnNoPhPNK2puIgtmmgHuM0Wy3VUDYfYo7rwojdBSHWMb8uz9fvVjlYU0yvePoQc1-y3AHKffy4SfCzuUblXc0iwEGNTi6Tt22D~ix6yYUN5KAJcXeHarnrUuPJiuWcREzDQW2R3lj0QOLn-6kkgk9yZgzLFLv8PCfwXIxQJU-qWo~cktRd8KX6uUkiV~d~TydSWMIYa2YbmXUyf9ys1On54umNl73gADgLhSkm96Q__",
    imgAlt: "TABI",
    author: "TABI",
    prize: "$300,000 USDC",
  },

  {
    title: "WEB3 INFRASTRUCTURE",
    description:
      "THIS ROUND AIMS TO STRENGTHEN THE ETHEREUM ECOSYSTEM’S FOUNDATIONAL INFRASTRUCTURE LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/72f7/eb8e/ff8692bf95982ecb561c199d5314291f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko6OiZDcudfyqG3Q720xpwT7kirvLOEHUMzDkD3FW7WDemHxn~meR~6t~ixjmKFS8eyi5tztRMuF8fE0NexpIZKZlnA5BU85mtwW65RMzVSQ8QnNoPhPNK2puIgtmmgHuM0Wy3VUDYfYo7rwojdBSHWMb8uz9fvVjlYU0yvePoQc1-y3AHKffy4SfCzuUblXc0iwEGNTi6Tt22D~ix6yYUN5KAJcXeHarnrUuPJiuWcREzDQW2R3lj0QOLn-6kkgk9yZgzLFLv8PCfwXIxQJU-qWo~cktRd8KX6uUkiV~d~TydSWMIYa2YbmXUyf9ys1On54umNl73gADgLhSkm96Q__",
    imgAlt: "TABI",
    author: "TABI",
    prize: "$300,000 USDC",
  },
  {
    title: "WEB3 INFRASTRUCTURE",
    description:
      "THIS ROUND AIMS TO STRENGTHEN THE ETHEREUM ECOSYSTEM’S FOUNDATIONAL INFRASTRUCTURE LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/72f7/eb8e/ff8692bf95982ecb561c199d5314291f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko6OiZDcudfyqG3Q720xpwT7kirvLOEHUMzDkD3FW7WDemHxn~meR~6t~ixjmKFS8eyi5tztRMuF8fE0NexpIZKZlnA5BU85mtwW65RMzVSQ8QnNoPhPNK2puIgtmmgHuM0Wy3VUDYfYo7rwojdBSHWMb8uz9fvVjlYU0yvePoQc1-y3AHKffy4SfCzuUblXc0iwEGNTi6Tt22D~ix6yYUN5KAJcXeHarnrUuPJiuWcREzDQW2R3lj0QOLn-6kkgk9yZgzLFLv8PCfwXIxQJU-qWo~cktRd8KX6uUkiV~d~TydSWMIYa2YbmXUyf9ys1On54umNl73gADgLhSkm96Q__",
    imgAlt: "TABI",
    author: "TABI",
    prize: "$300,000 USDC",
  },
  {
    title: "WEB3 INFRASTRUCTURE",
    description:
      "THIS ROUND AIMS TO STRENGTHEN THE ETHEREUM ECOSYSTEM’S FOUNDATIONAL INFRASTRUCTURE LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/72f7/eb8e/ff8692bf95982ecb561c199d5314291f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ko6OiZDcudfyqG3Q720xpwT7kirvLOEHUMzDkD3FW7WDemHxn~meR~6t~ixjmKFS8eyi5tztRMuF8fE0NexpIZKZlnA5BU85mtwW65RMzVSQ8QnNoPhPNK2puIgtmmgHuM0Wy3VUDYfYo7rwojdBSHWMb8uz9fvVjlYU0yvePoQc1-y3AHKffy4SfCzuUblXc0iwEGNTi6Tt22D~ix6yYUN5KAJcXeHarnrUuPJiuWcREzDQW2R3lj0QOLn-6kkgk9yZgzLFLv8PCfwXIxQJU-qWo~cktRd8KX6uUkiV~d~TydSWMIYa2YbmXUyf9ys1On54umNl73gADgLhSkm96Q__",
    imgAlt: "TABI",
    author: "TABI",
    prize: "$300,000 USDC",
  },
];

function GrantsCard() {
  return (
    <div className=" ">
      <div className="flex items-center gap-1 mt-8 ">
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
          <h1>Grants</h1>
        </div>
      </div>

      <div className="grid gap-5 ml-4 mt-5 sm:mt-5 sm:grid-cols-2  grid-cols-1 lg:grid-cols-4">
        {grantsData.map((grant, index) => (
          <div className="relative" key={index}>
            <div className="relative grant-clip bg-gray-500 box1 w-12 ">
              <div
                key={index}
                className=" box2 grant-clip w-full px-5 py-3 home-g"
              >
                <div>
                  <h1
                    className="text-md text-center"
                    style={{ letterSpacing: "4px" }}
                  >
                    {grant.title}
                  </h1>
                </div>

                <div className="text-center">
                  <h1
                    className="text-white/30"
                    style={{ letterSpacing: "11px" }}
                  >
                    . . . . . . . . .
                  </h1>
                </div>

                <div className="ml-8 mt-3">
                  <p className="text-end" style={{ fontSize: "0.6rem" }}>
                    {grant.description}
                  </p>
                </div>

                <div>
                  <img
                    src={grant.imgUrl}
                    alt={grant.imgAlt}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <p className="text-sm text-zinc-400">{grant.author}</p>
                </div>

                <div className="flex justify-center items-center">
                  <div className="flex-1 text-center">
                    <h2 className="text-white">
                      <span className="text-zinc-400 text-sm">PRIZE: </span>
                      {grant.prize}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-1 -right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                viewBox="0 0 4 4"
                fill="none"
              >
                <path d="M0.5 0V3.5H4" stroke="white" />
              </svg>
            </div>
            <div className="lg:absolute lg:bottom-0 lg:right-0 sm:absolute sm:bottom-0 sm:-right-2 absolute -bottom-1 -right-1 ">
              <svg
                className="lg:h-5  lg:w-16 sm:h-5 sm:w-20 h-5 w-20 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 53 18"
                fill="none"
              >
                <path
                  opacity="0.8"
                  d="M49 -2.3451e-07L19.9572 1.03499e-06C18.9085 1.08083e-06 17.9019 0.411782 17.1538 1.14669L3.48776 14.5733C2.21066 15.8281 3.09908 18 4.88942 18L49 18C51.2091 18 53 16.2091 53 14L53 4C53 1.79086 51.2091 -3.31074e-07 49 -2.3451e-07Z"
                  fill="#5538CE"
                />
                <path
                  d="M49 -1.96701e-06L23.9572 1.03499e-06C22.9085 1.08083e-06 21.9019 0.411782 21.1538 1.14669L7.48776 14.5733C6.21066 15.8281 7.09908 18 8.88942 18L49 18C51.2091 18 53 16.2091 53 14L53 4C53 1.79086 51.2091 -2.06358e-06 49 -1.96701e-06Z"
                  fill="#5538CE"
                />
                <path
                  d="M33 8.75C32.8619 8.75 32.75 8.86193 32.75 9C32.75 9.13807 32.8619 9.25 33 9.25L33 8.75ZM45.1768 9.17678C45.2744 9.07915 45.2744 8.92086 45.1768 8.82322L43.5858 7.23223C43.4882 7.1346 43.3299 7.1346 43.2322 7.23223C43.1346 7.32987 43.1346 7.48816 43.2322 7.58579L44.6464 9L43.2322 10.4142C43.1346 10.5118 43.1346 10.6701 43.2322 10.7678C43.3299 10.8654 43.4882 10.8654 43.5858 10.7678L45.1768 9.17678ZM33 9.25L45 9.25L45 8.75L33 8.75L33 9.25Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GrantsCard;
