import React from "react";
import { FaUser, FaBolt, FaTwitter } from "react-icons/fa";

interface CardData {
  image: string;
  name: string;
  description: string;
  stats: {
    user: string;
    bolt: string;
    twitter: string;
  };
}

const cardData: CardData[] = [
  {
    image: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    name: "Sajid Alam",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, possimus quidem?",
    stats: {
      user: "20k",
      bolt: "10",
      twitter: "15k"
    }
  },
  {
    image: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    name: "Sajid Alam",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore neque magni dolorum  ut aspernatur.",
    stats: {
        user: "20k",
        bolt: "10",
        twitter: "15k"
    }
  },
  {
    image: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    name: "Sajid  Alam",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore delectus velit ut aspernatur.",
    stats: {
        user: "20k",
        bolt: "10",
        twitter: "15k"
    }
  },
  {
    image: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    name: "Sajid Alam",
    description: "Lorem ipsum dolor sit amet consectetur, dignissimos enim delectus velit ut aspernatur.",
    stats: {
        user: "20k",
        bolt: "10",
        twitter: "15k"
    }
  }
];

const MyCommunities: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen ">
      <div className="mx-4 lg:mx-20">
        <div className="text-2xl pt-10 font-bold">
          <h1>My Communities</h1>
        </div>
        <div className="max-w-[600px] pt-4 text-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            neque magni dolorum dignissimos enim delectus velit ut aspernatur.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:gap-8 mx-4 lg:mx-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white/5 sm:p-6 rounded-xl h-56 w-full shadow-lg group hover:scale-105 hover:bg-white/10"
          >
            <div className="flex gap-3 items-center">
              <div>
                <img
                  src={card.image}
                  alt=""
                  className="w-10 h-10 object-cover rounded-xl"
                />
              </div>
              <div className="text-xl font-bold">
                <h1>{card.name}</h1>
              </div>
            </div>
            <div className="text-gray-400 items-center pt-5">
              <p>{card.description}</p>
            </div>
            <div className="flex gap-10 pt-3 text-gray-400 h-12 w-24">
              <div className="flex bg-white/10 rounded-lg items-center p-2">
                <FaUser className="w-6 h-6" />
                <div>{card.stats.user.toLocaleString()}</div>
              </div>
              <div className="flex bg-white/10 rounded-lg p-2">
                <FaBolt className="w-6 h-6" />
                <div>{card.stats.bolt.toLocaleString()}</div>
              </div>
              <div className="flex bg-white/10 rounded-lg p-2">
                <FaTwitter className="w-6 h-6" />
                <div>{card.stats.twitter.toLocaleString()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCommunities;
