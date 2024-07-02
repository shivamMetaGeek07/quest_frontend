import React from "react";

type UserData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};
const Rewards: React.FC = () => {

  const userData: UserData[] = [
    {
      id: 1,
      title: "Rewards",
      description: "Lorem ipsum dolor sit amet.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/004/989/579/small/simple-illustration-of-golden-award-medal-with-ribbons-for-winners-free-vector.jpg",
    },
    {
      id: 2,
      title: "Rewards",
      description: "Lorem ipsum dolor sit amet.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/004/989/579/small/simple-illustration-of-golden-award-medal-with-ribbons-for-winners-free-vector.jpg",
    },
    {
      id: 3,
      title: "Rewards",
      description: "Lorem ipsum dolor sit amet.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/004/989/579/small/simple-illustration-of-golden-award-medal-with-ribbons-for-winners-free-vector.jpg",
    },
    {
      id: 4,
      title: "Rewards",
      description: "Lorem ipsum dolor sit amet.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/004/989/579/small/simple-illustration-of-golden-award-medal-with-ribbons-for-winners-free-vector.jpg",
    },
    {
      id: 5,
      title: "Rewards",
      description: "Lorem ipsum dolor sit amet.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/004/989/579/small/simple-illustration-of-golden-award-medal-with-ribbons-for-winners-free-vector.jpg",
    },
    {
      id: 6,
      title: "Rewards",
      description: "Lorem ipsum dolor sit amet.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/004/989/579/small/simple-illustration-of-golden-award-medal-with-ribbons-for-winners-free-vector.jpg",
    },
    {
      id: 7,
      title: "Rewards",
      description: "Lorem ipsum dolor sit amet.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/004/989/579/small/simple-illustration-of-golden-award-medal-with-ribbons-for-winners-free-vector.jpg",
    },
    {
      id: 8,
      title: "Rewards",
      description: "Lorem ipsum dolor sit amet.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/004/989/579/small/simple-illustration-of-golden-award-medal-with-ribbons-for-winners-free-vector.jpg",
    },
  ]



  return (
    <>
      <div className="main div">
      
      <div className="card max-w-[1320px] md:py[80] py-5 mx-auto grid lg:grid-cols-5 sm:grid-cols-2 gap-4">
          {userData.map((data) => (
            <div
              key={data.id}
              className="group shadow-lg p-5 flex flex-col items-center justify-center hover:bg-slate-400 duration-1000 rounded-md cursor-pointer"
            >
              <img
                src={data.imageUrl}
                className="mx-auto rounded-full w-24 h-24 object-cover"
                alt={data.title}
              />
              <h1 className="text-center text-xl py-1 font-normal">
                {data.title}
              </h1>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rewards;
