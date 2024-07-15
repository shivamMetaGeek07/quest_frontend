"use client";
import React, { useState } from 'react';

import { RiMenu2Fill } from 'react-icons/ri';
import { GiCrossMark } from 'react-icons/gi';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import LoginPage from './mob-login';

const Sidebar = () =>
{
  const [ nav, setNav ] = useState( true );
  const user = useSelector( ( state: RootState ) => state.login?.user );
  console.log( user );
  const handleNav = () =>
  {
    setNav( !nav );
  };

  return ( <>
    <div className='w-[4rem] md:flex border-r-gray-600/45 md:border-r bg-[#15151557] z-50 fixed md:h-screen glass_effect'>
      <button className=" justify-center   border-none text-white text-2xl cursor-pointer" onClick={ handleNav }>  { nav ? (
        <>
          <div className='px-2 items-center justify-center m-auto'>
            <RiMenu2Fill
              size={ 40 }
              className="text-[#e2dcdcb3] cursor-pointer"
            />
          </div>
        </>
      ) : (
        <>
          <div className='px-2 items-center justify-center m-auto'>
            <GiCrossMark
              size={ 40 }
              className="text-[#e2dcdcb3] cursor-pointer"
            />
          </div>
        </>
      ) }</button>
    </div>
    <div className={ `flex flex-col w-screen md:w-full bg-[#5638ce40] z-40 h-screen glass_effect fixed ${ nav ? 'transform -translate-x-full' : '' } transition-transform duration-500 ease-in-out` }>
      <button className=" block md:hidden  border-none text-white text-2xl cursor-pointer" onClick={ handleNav }>  { nav ? (
        <>
          <div className='px-2  m-auto'>
            <RiMenu2Fill
              size={ 40 }
              className="text-[#e2dcdcb3] cursor-pointer"
            />
          </div>
        </>
      ) : (
        <>
          <div className='px-2  m-auto'>
            <GiCrossMark
              size={ 40 }
              className="text-[#e2dcdcb3] cursor-pointer"
            />
          </div>
        </>
      ) }</button>

      { user ? (
      <div className="flex-col border-none   justify-between md:flex-row items-center  flex m-auto md:ml-5 w-screen text-center text-white">
        <div className='justify-center items-center m-auto border-l border-r  flex h-12 md:h-40 md:border-r  w-[12rem] md:w-full  border-r-white'>
        <div className=" border-l md:w-full hover:bg-opacity-15 hover:bg-[#5638ce48]  border-t w-full p-3 md:border-l-transparent border-b border-b-white hover:border-b-4  hover:border-b-violet-700">
          <Link href={ '/user/profile' }>PROFILE </Link>
        </div>
        </div>
        <div className='justify-center items-center m-auto border-l  flex h-12 md:h-40 border-r  w-[12rem] md:w-full border-r-white'>
        <div className="md:w-full  border-t w-full hover:bg-opacity-15 hover:bg-[#5638ce40]    border-b     p-3   hover:border-b-4  hover:border-b-violet-700">
          <Link href={ '/kol/create-community' }>Create A COMMUNITY</Link>
        </div>
        </div>
          <div className='justify-center items-center m-auto border-l   flex h-12 md:h-40 border-r  w-[12rem] md:w-full border-r-white'>
        <div className="md:w-full  border-t w-full hover:bg-opacity-15 hover:bg-[#5638ce40]  border-b    p-3  hover:border-b-4  hover:border-b-violet-700">
          <Link href={ '/' }>LEADERBOARD</Link>
        </div>
        </div>
          <div className='justify-center items-center m-auto border-l border-r  flex h-12 md:h-40 md:border-r  w-[12rem] md:w-full border-r-white'>
        <div className="md:w-full  border-t w-full hover:bg-opacity-15 hover:bg-[#5638ce40]   border-b     p-3  hover:border-b-4  hover:border-b-violet-700">
          <Link href={ '/' }>REWARDS</Link>
        </div>
        </div>
          <div className='justify-center items-center m-auto border-l border-r  flex h-12 md:h-40 md:border-r  w-[12rem] md:w-full border-r-white'>
        <div className="md:w-full  border-t w-full hover:bg-opacity-15 hover:bg-[#5638ce40]  border-white border-b  md:border-r-transparent  md:border-r hover:border-b-4  hover:border-b-violet-700 p-3 ">
          <Link href={ '/' }>RANK KOLS</Link>
        </div>
        </div>
        </div>
        
      ):(
        <LoginPage />
      )}

    </div>
  </> );
};

export default Sidebar;
