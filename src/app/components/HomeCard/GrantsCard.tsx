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
    <div>
      <div className="flex items-center gap-1 mt-8 ml-16">
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
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M6 5L11 10" stroke="#FA00FF" stroke-linecap="round" />
        </svg>
        <div>
          <h1>Grants</h1>
        </div>
      </div>
      <div className="flex gap-8 ml-16 mt-5">
        {grantsData.map((grant, index) => (
          <div key={index} className="border border-gray-700 w-full px-5 py-3 home-g">
            <div>
              <h1
                className="text-md text-center"
                style={{ letterSpacing: "4px" }}
              >
                {grant.title}
              </h1>
            </div>

            <div className="text-center">
              <h1 className="text-white/30" style={{ letterSpacing: "11px" }}>
                . . . . . . . . .
              </h1>
            </div>

            <div className="ml-8 mt-3">
              <p
                className="text-end"
                style={{ fontSize: "0.6rem" }}
              >
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

            <div className="flex justify-between items-center">
              <div className="flex-1 text-center">
                <h2 className="text-white">
                  <span className="text-zinc-400 text-sm">PRIZE: </span>
                  {grant.prize}
                </h2>
              </div>
              <div className="clip-trapezium-top-right px-5 py-1 bg-[#5538CE]">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GrantsCard;
