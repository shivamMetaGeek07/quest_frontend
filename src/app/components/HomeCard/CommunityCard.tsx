import Image from "next/image";
import React from "react";

// Define the TypeScript type for the card data
type CommunityCardData = {
  imageUrl: string;
  alphaHub: string;
  quest: number;
  followers: number;
  bio: string;
};

// Define the array of data for the community cards
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
    bio: "Another example of bio text goes here.",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/42f5/13a3/4432e1deb16bde26b61e2dbe7c954241?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VokOknLrLdC7RKNmvjAaZ-dd8AHG7IUllQoyaAKQYhrQ6JkyH9vmGjWxZuVtzPelNqSwVFTbP1g8wRtwFejAodAjCQaGwyUm5DurxzgXtBr9YP-zVnGGcy3PxFYdC6VqznebbGmjUdccjrlfBJ5-0lRp91YaxklOI4D2XtcZpn~Xa316yCWM-JKMZ90QuNkIUBiatov4ycI9yCD8ig-74KZnL-orBsG2PPpYg4Z2KRQ25pBeUl3MPsf~m8gb2-Pn24snedqk3bYsK5WHZTUoM-DeFfwRSoHZg2hDWwfF3lgoh~x0rnU33iOHhlWdAb-WVCmc7gwVeiUvHRPKc3eBnA__",
    alphaHub: "GAMMA HUB",
    quest: 789,
    followers: 2345,
    bio: "Yet another bio text for the community card.",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/42f5/13a3/4432e1deb16bde26b61e2dbe7c954241?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VokOknLrLdC7RKNmvjAaZ-dd8AHG7IUllQoyaAKQYhrQ6JkyH9vmGjWxZuVtzPelNqSwVFTbP1g8wRtwFejAodAjCQaGwyUm5DurxzgXtBr9YP-zVnGGcy3PxFYdC6VqznebbGmjUdccjrlfBJ5-0lRp91YaxklOI4D2XtcZpn~Xa316yCWM-JKMZ90QuNkIUBiatov4ycI9yCD8ig-74KZnL-orBsG2PPpYg4Z2KRQ25pBeUl3MPsf~m8gb2-Pn24snedqk3bYsK5WHZTUoM-DeFfwRSoHZg2hDWwfF3lgoh~x0rnU33iOHhlWdAb-WVCmc7gwVeiUvHRPKc3eBnA__",
    alphaHub: "GAMMA HUB",
    quest: 789,
    followers: 2345,
    bio: "Yet another bio text for the community card.",
  },
];

// CommunityCard component
const CommunityCard: React.FC<{ data: CommunityCardData }> = ({ data }) => {
  return (
    // <div className="main border border-gray-700 bg-black p-4 sm:p-6 rounded shadow-lg group">
    //   <div className="rounded-md flex justify-between gap-6">
    //     <div className="flex-col justify-center">
    //       <div
    //         className="relative w-20 h-20 bg-cover bg-center border border-gray-700 z-10"
    //         style={{ backgroundImage: `url('${data.imageUrl}')` }}
    //       >
    //         <div className="absolute w-[30px] h-[15px] bg-black clip-trapezium-bottom-left"></div>
    //         <div className="absolute w-[30px] h-[15px] bg-black clip-trapezium-bottom-right"></div>
    //       </div>

    //       <div className="bg-[#4e1c4f] mt-1">
    //         <div className="h-1/4 bg-black">
    //           <div className="w-20 h-10 bg-[#4e1c4f] clip"></div>
    //         </div>
    //         <div className="h-3/4"></div>
    //       </div>
    //     </div>

    //     <div className="">
    //       <div className="bg-violet-500/15 h-20 w-full flex flex-col justify-between">
    //         <div className="flex-grow"></div>
    //         <div className="flex justify-between">
    //           <div className="mt-3">
    //             <div className="mx-2">
    //               <p className="text-md">{data.alphaHub}</p>
    //             </div>
    //           </div>
    //           <div className="mb-2 mx-2">
    //             <p className="text-sm">{data.quest}</p>
    //             <p className="text-sm text-slate-400">QUEST</p>
    //           </div>
    //           <div className="mb-2 mx-2">
    //             <p className="text-sm">{data.followers}</p>
    //             <p className="text-sm text-slate-400">FOLLOWERS</p>
    //           </div>
    //         </div>
    //         <hr className="border-0 h-px bg-[#8C71FF]" />
    //       </div>
    //       <div className="flex justify-end gap-3 mt-2">
    //         <div className="h-8 w-8 bg-[#8C71FF]"></div>
    //         <div className="h-8 w-8 bg-[#8C71FF]"></div>
    //         <div className="h-8 w-8 bg-[#8C71FF]"></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-3">
    //     <p className="text-small">
    //       BIO: <span className="text-slate-400 uppercase text-small">{data.bio}</span>
    //     </p>
    //   </div>
    //   <div className="text-center">
    //     <h1 className="text-white/30" style={{ letterSpacing: "11px" }}>
    //       . . . . . . . . . . . . . .
    //     </h1>
    //   </div>
    // </div>
    <div className="">
      <div className="outer-div relative flex gap-8 hover:bg-[#8c71ff] hover:text-[#111111] border-[#282828] border p-1 flex-col m-auto justify-center w-[22rem] sm:w-full">
        <div className="flex flex-row text-xl items-center justify-around m-auto">
          <div className="p-1">
            <div className="image-container h-[5rem] w-[5rem] items-center flex">
              <img
                src={data.imageUrl}
                alt=""
                className="styled-image"
              />
            </div>
            <div className="bg_Div_Down h-[2rem] mt-2 bg-gray-800" />
          </div>
          <div className="flex flex-col">
            <div className="flex  m-1 flex-col items-center">
              <div className="flex bg_eco_div border-b-4 border-[#8c71ff] pt-6 bg-[#1d1a28] flex-row items-center justify-between w-full m-auto">
                <div className="text-lg ml-3">Alpha Hub</div>
                <div className="text-xs flex flex-row rounded-lg pl-6">
                  <div className="flex m-2 items-center flex-col">
                    <span>214</span>
                    <span>Quests</span>
                  </div>
                  <div className="flex m-2 items-center flex-col">
                    <span>7701</span>
                    <span>Followers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end gap-x-1">
              <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
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

        <div>
          <div className="flex flex-row text-sm m-1 justify-between ">
            <span className="flex descText">Desc:</span>
            <span className="text-gray-600 descdata text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipi scing elit.
            </span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default CommunityCard;
