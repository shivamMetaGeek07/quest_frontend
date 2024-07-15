"use client"
import React, { useState } from 'react';
 
import { RiMenu2Fill } from 'react-icons/ri';
import { GiCrossMark } from 'react-icons/gi';
import Link from 'next/link';

const Sidebar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (<>
    <div className='w-[4rem] fixed md:flex  border-r-gray-600/45 border-r bg-[#15151557] z-50  md:h-screen glass_effect'>
    <button className=" justify-center   border-none text-white text-2xl cursor-pointer" onClick={handleNav}>  {nav ? (
                <>
                <div className='px-2 items-center justify-center m-auto'>
                  <RiMenu2Fill 
                    size={40}
                    className="text-[#e2dcdcb3] cursor-pointer"
                  />
                  </div>
                </>
              ) : (
                <>
                <div className='px-2 items-center justify-center m-auto'>
                <GiCrossMark 
                    size={40}
                    className="text-[#e2dcdcb3] cursor-pointer"
                  />
                  </div>
                </>
              )}</button>
    </div>
    <div className={`flex flex-col w-full fixed bg-violet-600/15 z-40 h-screen glass_effect  ${nav ? 'transform -translate-x-full' : ''} transition-transform duration-500 ease-in-out`}>
        <button className=" block md:hidden  border-none text-white text-2xl cursor-pointer" onClick={handleNav}>  {nav ? (
                    <>
                    <div className='px-2  m-auto'>
                    <RiMenu2Fill 
                        size={40}
                        className="text-[#e2dcdcb3] cursor-pointer"
                    />
                    </div>
                    </>
                ) : (
                    <>
                    <div className='px-2  m-auto'>
                    <GiCrossMark 
                        size={40}
                        className="text-[#e2dcdcb3] cursor-pointer"
                    />
                    </div>
                    </>
                )}</button>
      <div className="flex-col border-none md:pl-[4rem] gap-8 justify-between md:flex-row items-center  flex m-auto w-full text-center text-white">
        <div className=" border-l md:w-full w-[12rem] p-3 border-r border-l-white md:border-l-transparent border-r-white hover:border-b-4  hover:border-b-violet-700">
        <Link href={'/user/profile'}>PROFILE </Link>
        </div>
        <div className=" md:w-full w-[12rem] border-l-white border-l md:border-l-transparent  border-r  p-3  border-r-white hover:border-b-4  hover:border-b-violet-700">
        <Link href={'/kol/create-community'}>Create A COMMUNITY</Link>
        </div>
        <div className="md:w-full w-[12rem] border-l-white border-l md:border-l-transparent border-r  p-3 border-r-white hover:border-b-4  hover:border-b-violet-700">
        <Link href={'/'}>LEADERBOARD</Link>
        </div>
        <div className="md:w-full w-[12rem] border-l-white border-l md:border-l-transparent border-r  p-3 border-r-white hover:border-b-4  hover:border-b-violet-700">
        <Link href={'/'}>REWARDS</Link>
        </div>
        <div className="md:w-full w-[12rem] border-l border-white md:border-l-transparent  md:border-r-transparent  border-r hover:border-b-4  hover:border-b-violet-700 p-3 ">
        <Link href={'/'}>RANK KOLS</Link>
        </div>
      </div>
    </div>
    </>);
};

export default Sidebar;
