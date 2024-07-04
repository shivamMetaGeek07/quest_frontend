"use client";

import Image from "next/image";
import Community from "./components/Community";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import headerImage from "../../public/assests/headerImage.png"
import { images } from "../../public/assests/image"
import { FaUser, FaBolt, FaTwitter } from "react-icons/fa";
import { AiOutlineDisconnect } from "react-icons/ai"

interface data {
  id: Number;
  profilePic: string;
  title: string;
  description: string;
}
interface bounti {
  image: string;
  name: string;
  description: string;
}

interface CommunitiesData {
  image: string;
  name: string;
  description: string;
  stats: {
    user: string;
    bolt: string;
    twitter: string;
    AiOutlineDisconnect: string;
  };
}

interface EducataionData {
  image: string;
  name: string;
  description: string;
  stats: {
    user: string;
    bolt: string;
    twitter: string;
    AiOutlineDisconnect: string;
  };
}

interface KolsquateData {
  title: string;
  description: string;
}

const KolsquateData: KolsquateData[] = [
  {
    title: "So it goes",
    description:
      "Lorem Ipsum is simply dummy text of the  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley",
  },

  {
    title: "Everything was beautiful",
    description:
      "Lorem Ipsum is simply dummy text of the  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley ",
  },
  {
    title: "We are what we pretend",
    description:
      "Lorem Ipsum is simply dummy text of the  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley",
  },
];

const EducationData: EducataionData[] = [
  {
    image:
      "https://w7.pngwing.com/pngs/733/79/png-transparent-computer-icons-education-school-education-angle-rectangle-logo-thumbnail.png",
    name: "Education is power.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, possimus quidem?",
    stats: {
      user: "20k",
      bolt: "10",
      twitter: "15k",
      AiOutlineDisconnect: "",
    },
  },
  {
    image:
      "https://w7.pngwing.com/pngs/733/79/png-transparent-computer-icons-education-school-education-angle-rectangle-logo-thumbnail.png",
    name: "Knowledge is freedom.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore neque magni dolorum  ut aspernatur.",
    stats: {
      user: "20k",
      bolt: "10",
      twitter: "15k",
      AiOutlineDisconnect: "",
    },
  },
  {
    image:
      "https://w7.pngwing.com/pngs/733/79/png-transparent-computer-icons-education-school-education-angle-rectangle-logo-thumbnail.png",
    name: "Invest in learning",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore delectus velit ut aspernatur.",
    stats: {
      user: "20k",
      bolt: "10",
      twitter: "15k",
      AiOutlineDisconnect: "",
    },
  },
];

const cardData: CommunitiesData[] = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/aa9d/a83f/bde90d19a375033f1fea06f6e8a9d1e3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4bijtujf6AwqeUwvP7biQWr5-HjDMsRrATJk5gt07oHujlhbolErxbJ2kejAuBSb8VCyqUBWq57cR3ibkbqlzsy5J2jX7lsPMwAfqyCmU8x9oiXeNvfFfL25g7BOOVnykYe4baoEHSULMb37Br~ZgNZIzPdqVlJjISr1czeRH7vnKJaBkcImyzGd3onadyFZh4nMAHA0LJr32OfoDXIkqi7WkJkPtX4g5-oScYooauw5mo2-V3uGWONhfZb1RhtVgUuCbNnQ84ubJ3lSznb7RKt2ljspPgPH~KGE4kt359o3Ekxu4Wp~lf5ZzIRUn~RGfMrAqcm67wKjCYJdPlwHA__",
    name: "LayzerZero: AirDrop",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, possimus quidem?",
    stats: {
      user: "20k",
      bolt: "10",
      twitter: "15k",
      AiOutlineDisconnect: "",
    },
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/aa9d/a83f/bde90d19a375033f1fea06f6e8a9d1e3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4bijtujf6AwqeUwvP7biQWr5-HjDMsRrATJk5gt07oHujlhbolErxbJ2kejAuBSb8VCyqUBWq57cR3ibkbqlzsy5J2jX7lsPMwAfqyCmU8x9oiXeNvfFfL25g7BOOVnykYe4baoEHSULMb37Br~ZgNZIzPdqVlJjISr1czeRH7vnKJaBkcImyzGd3onadyFZh4nMAHA0LJr32OfoDXIkqi7WkJkPtX4g5-oScYooauw5mo2-V3uGWONhfZb1RhtVgUuCbNnQ84ubJ3lSznb7RKt2ljspPgPH~KGE4kt359o3Ekxu4Wp~lf5ZzIRUn~RGfMrAqcm67wKjCYJdPlwHA__",
    name: "Nifty Island",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore neque magni dolorum  ut aspernatur.",
    stats: {
      user: "20k",
      bolt: "10",
      twitter: "15k",
      AiOutlineDisconnect: "",
    },
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/0c8f/9251/8d144dca61e09b3d34f9808b87d22ddf?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mHBOm489HTOX~oNUcokWangISa3kk466u~KJHnKHX2NQGCVRQvua5y3zJU1Kl3kGi1i99svO~PA2PMkfhpCywdpSYS3LQ3MOGOgBxZnOUR1nqDDHGfKIraAaw~zjTZa0wAhP7ybaVvVUMIDWTbNOnm1anz4Ab7iipdu-jGvXPj9zjwVWhHwfggxr-uDBXJ5rCc24zqLLFX0qDBCZ4HTYV6AHX7T3jGb5t6uWwEAH9jrxZ8r4zRyLnIkCH6m4FB0qUkgMSsy5~J7yLStS7jACaXyMj~YmUnPF0DSZymYQhUzcBVydLclE9qy8dSbRYzJx7NvCoRtXZYh3JlIgQ4Qpwg__",
    name: "Blu Whale",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore delectus velit ut aspernatur.",
    stats: {
      user: "20k",
      bolt: "10",
      twitter: "15k",
      AiOutlineDisconnect: "",
    },
  },
];

export default function Home() {
  const router = useRouter()
  

  const getUserData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/profile`,
        {
          credentials: "include",
        }
      );
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
    <div className=" bg-black">
      <Navbar />
      <div className="lg:mx-20 mx-auto">

        {/* header section */}
        <div className="flex flex-col lg:flex-row items-center w-full gap-10 lg:gap-10 justify-between p-4">
  <div className="w-full lg:w-2/5 text-center lg:text-left">
    <h1 className="text-white text-2xl font-bold mb-4">Discover Your Community Here</h1>
    <p className="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo, in nihil nobis hic culpa ullam! Fuga labore veritatis perferendis! Aliquid, velit cumque ipsam dolorum similique consequuntur
    </p>
    <button className="bg-[#5865F2] rounded-sm mt-4 px-8 py-3 text-white">Learn more</button>
  </div>
  <div className="w-full lg:w-2/6 flex justify-center lg:justify-end">
    <Image
      className="w-full max-w-full lg:max-w-lg rounded-lg"
      src={images.headerImage}
      alt="Community Image"
    />
  </div>
</div>


        {/* Contact with us */}
        <div className="mt-12">
          <h1 className="text-white text-2xl font-bold mb-4 text-center lg:text-left">Contact With US</h1>
          <div className="flex flex-wrap justify-center md:justify-center lg:justify-between items-center gap-4">
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.instagram} alt="instagram" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.telegram} alt="telegram" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.fourthicon} alt="fourth icon" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.vector} alt="vector" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.telegram} alt="telegram" />
            </div>
          </div>
        </div>



        {/* EcoSystem */}
        <div className="mt-12">
          <h1 className="text-white text-2xl font-bold mb-4 text-center lg:text-left">EcoSystem</h1>
          <div className="flex flex-wrap justify-center md:justify-center lg:justify-between  items-center gap-4">
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image11} alt="instagram" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image7} alt="telegram" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image8} alt="fourth icon" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image9} alt="vector" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image11} alt="telegram" />
            </div>
          </div>
        </div>



        {/* Category */} 
        <div className="mt-12">
          <h1 className="text-white text-2xl font-bold mb-4 text-center lg:text-left">Category</h1>
          <div className="flex flex-wrap justify-center md:justify-center  lg:justify-between  items-center gap-4">
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image12} alt="instagram" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image13} alt="telegram" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image14} alt="fourth icon" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image15} alt="vector" />
            </div>
            <div className="border w-full sm:w-full md:w-1/3 lg:w-56 h-32 rounded-lg border-gray-500 flex justify-center items-center">
              <Image src={images.image16} alt="telegram" />
            </div>
          </div>
        </div>


       
      

       

  
        </div>
    

        [17:33, 7/4/2024] Sajid Ansari: <div className="flex ">
        <div className="mt-10 w-full md:w-1/2 lg:w-1/2 pr-4">
          <div className="mb-4">
            <img
              src='https://s3-alpha-sig.figma.com/img/4512/b4ae/e762c2983c04d88202e359621154bb15?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OiPWhLmECDGKHGbJf5PRRFaKXBpklLIRggKSIooahgqBpMPLhfvkfdieq4tWITNiASO70HIpVcMhWUHWaHwxufDuV-CgL4Qmc7HERzB9GU5M02pvnZCrJocx3oQ3UhnZfqwos6DhhuTBWlA2OrOm8qzjpELwnfxA7z7FCTT39XM4OyklyewONudq7zwPd6Tk6tXAEIJxJTsSeYboDA5Am74xmCc2an2a7kbTXfCEzdS553PjwVyX1-hhESunB8WDuCB8bpWu5JaET-rD76hJ-BNh6LPvSBFrpSJLQ8fUY6earwCf4b-dkE5s78cC9yXpgEkLGAmlMh3iqUndUo8xSA__'
              alt='Flowbite Logo'
              className='h-12 w-32'
            />
          </div>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="mt-10 w-full md:w-1/2 lg:w-3/3 flex flex-wrap justify-between ">
          <div className="mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h2 className="font-bold text-lg mb-3">Learn</h2>
            <ul className="space-y-6 text-gray-400">
              <li><a href="#" className="hover:text-gray-200">Blog</a></li>
              <li><a href="#" className="hover:text-gray-200">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-200">API Docs</a></li>
            </ul>
          </div>
          <div className="mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h2 className="font-bold text-lg mb-3">Get Started</h2>
            <ul className="space-y-6 text-gray-400">
              <li><a href="#" className="hover:text-gray-200">Create an Account</a></li>
              <li><a href="#" className="hover:text-gray-200">Signup</a></li>
              <li><a href="#" className="hover:text-gray-200">Today Special</a></li>
            </ul>
          </div>
          <div className="mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h2 className="font-bold text-lg mb-3">Resources</h2>
            <ul className="space-y-6 text-gray-400">
              <li><a href="#" className="hover:text-gray-200">Career</a></li>
              <li><a href="#" className="hover:text-gray-200">Email us</a></li>
              <li><a href="#" className="hover:text-gray-200">Contact support</a></li>
            </ul>
          </div>
          <div className="mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h2 className="font-bold text-lg mb-3">Follow Us</h2>
            <ul className="space-y-6 text-gray-400">
              <li><a href="#" className="hover:text-gray-200">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-200">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-200">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
[17:34, 7/4/2024] Sajid Ansari: <div className="mx-4 lg:mx-20">
        <div className="text-2xl pt-10 font-bold">
          <h1>Trending Communities</h1>
        </div>

        {/* Trending Communities Card */}
        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white/5 p-4 sm:p-6 border rounded-xl shadow-lg group hover:scale-105 hover:bg-white/10"
            >
              <div className="flex gap-3 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={card.image}
                    alt=""
                    className="w-16 h-16 object-cover rounded-xl sm:w-10 sm:h-10"
                  />
                </div>
                <div className="text-xl font-bold">
                  <h1>{card.name}</h1>
                </div>
              </div>
              <div className="text-gray-400 items-center pt-5">
                <p className="text-sm sm:text-base">{card.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-3 text-gray-400">
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <AiOutlineDisconnect className="w-5 h-5" />
                  <div className="pl-1">{card.stats.AiOutlineDisconnect.toLocaleString()}</div>
                </div>
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <FaUser className="w-5 h-5" />
                  <div className="pl-1">{card.stats.user.toLocaleString()}</div>
                </div>
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <FaBolt className="w-5 h-5" />
                  <div className="pl-1">{card.stats.bolt.toLocaleString()}</div>
                </div>
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <FaTwitter className="w-5 h-5" />
                  <div className="pl-1">
                    {card.stats.twitter.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-2xl pt-20 font-bold">
          <h1>Educational Quates</h1>
        </div>

        {/* Education Quates Card */}

        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8">
          {EducationData.map((card, index) => (
            <div
              key={index}
              className="bg-white/5 p-4 sm:p-6 border rounded-xl shadow-lg group hover:scale-105 hover:bg-white/10"
            >
              <div className="flex gap-3 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={card.image}
                    alt=""
                    className="w-16 h-16 object-cover rounded-xl sm:w-10 sm:h-10"
                  />
                </div>
                <div className="text-xl font-bold">
                  <h1>{card.name}</h1>
                </div>
              </div>
              <div className="text-gray-400 items-center pt-5">
                <p className="text-sm sm:text-base">{card.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-3 text-gray-400">
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <AiOutlineDisconnect className="w-5 h-5" />
                  <div className="pl-1">{card.stats.AiOutlineDisconnect.toLocaleString()}</div>
                </div>
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <FaUser className="w-5 h-5" />
                  <div className="pl-1">{card.stats.user.toLocaleString()}</div>
                </div>
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <FaBolt className="w-5 h-5" />
                  <div className="pl-1">{card.stats.bolt.toLocaleString()}</div>
                </div>
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <FaTwitter className="w-5 h-5" />
                  <div className="pl-1">
                    {card.stats.twitter.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-2xl pt-20 font-bold">
          <h1>Kol Quests</h1>
        </div>

        {/* Kol Quates Card */}
        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8">
          {KolsquateData.map((card, index) => (
            <div
              key={index}
              className="bg-white/5 sm:p-6 border rounded-xl h-auto w-full sm:w-auto shadow-lg group hover:scale-105 hover:bg-white/10 border-t"
            >
              <div className="text-xl font-bold mb-2 sm:mb-4">
                <h1 className="text-lg sm:text-xl text-center sm:text-left">
                  {card.title}
                </h1>
              </div>
              <div className="text-gray-400">
                <p className="text-sm sm:text-base text-center sm:text-left">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-2xl pt-20 font-bold">
          <h1>Grants bounties & hackathons</h1>
        </div>

        <div className="grid gap-4 sm:gap-8  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8 pb-8">
          <div className="  rounded-xl shadow-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/c3eb/cefc/430c8a7667fb8d72382f7c669bf8b956?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfK2aRragp0xXABk5OWpIddRouoRda2C9nGBpP0xEaH1iQuheuem4CKfdoE2U36Hp4rwMkfF59ol3MisLREAqK~NMRUdW2yjZ78IuEdbxF5Kt3fdIudYtwS-hzl0Rel3KHpIO~anizYpU7Imge1B~hUiJGS26hfi7NMz-WeL9b0KSEuCuNtwny1ILjUZbnhztNKSZ8lk9v~k0Y5-zmbabZu0DXlkFHpxI3ysTlSvxss3RMu6vkU9Vqwi28juQx0DQQFgakU7zxmLXP1sZDWsmIjzu~Mym6yemhUvfos4GMFoviKuP0-0IHDasIt1626XhuUsCY~o8uSuCShgC3KVTA__"
              alt=""
              className=" h-56 w-full rounded-lg object-cover"
            />
          </div>

          <div className="  rounded-xl shadow-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/013d/bfa5/05f23588d168a903b625c455f0a0b030?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mjWx2S7EL0PNSHibwbHpxwD5A4xIr3g5s59XAKUE9WQyVUnTvthDawd4FlZVVkliwJcDMj8bsiN5b8ekgVHKhThpdQxunq2yDLiQZSujof7LcZcB5qaepDS0Sz2NGNpesZ05fi8p0MuY7HA1-uixPoMRAqmtJiluOqFqMxx~AtJx0h2mSpznkGi-JQt7o07C8cYyEuVDsd3r2UQZpoyJ~5RcJhrcDjQ6Icl9~8SNh2hkMGZ2Z2zgpyBz4KY8T9-Iba19IGyvLz2hd09Expnk0lrJtAwe24v4L46XvY11~2gX8V4BMD2ZZAXbFdXNAfyR0nhcbPFXvtHqI5bOPiaQYA__"
              alt=""
              className=" h-56 w-full rounded-lg object-cover"
            />
          </div>

          <div className="  rounded-xl shadow-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/8f6c/b520/3a28354e6ea67d28b20f2915139ab5e2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XWNBfp851A3NcdvyNkdEokL6-pSYMZpYg~8MSKGx4lq~2In6EzGXLHMzatBgt8xN5EcNrj8SA15oJ-w0kAMY1x0VH1nTrr7gNVwaR6F5Hv-q076Hi5KW7z-e5NPZv0zZG1i35jHK3jM0TJ2o~DJStgqmoG0G5X9gTc~Gol7WU0IsEhB8FicAg4Kf7yWC8C8E3m17cZdueZq0d3rV3225hWiyFzs-q6WwSo29j30we4BXGDEp~iHPaZYiqdzc~WguCmSPVPhq0OLnQefSzMFgkSqYw2DkvxNjEulJ~8yF55cEMxXEuLjqelaZkwV7xjpGc5HmCV8qdEXYvUGn9zozaA__"
              alt=""
              className=" h-56 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div >
    

      </div>
   
  );
}

