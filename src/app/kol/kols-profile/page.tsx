"use client";
import {  RootState } from '@/redux/store';
import { useProtectedRoute } from '../../../utils/privateRoute';
import React,{useState,useEffect} from 'react'
import { BallTriangle } from 'react-loader-spinner';
import {  useSelector } from 'react-redux';
import ModalForm from '../../components/ModalForm';

type Props = {}

const kolsProfile = ( props: Props ) =>
{
    const [isClient, setIsClient] = useState(false);

    const user=  useSelector( ( state: RootState ) =>state.login.user);
    useEffect(() => {
      setIsClient(true); // Set the client flag to true on the client side

      }, []);
    if (!user) {
      return <><div className='min-h-screen flex justify-center items-center'><BallTriangle/></div>;</>
    }
    
    if (!isClient) return (
      <div className="flex justify-center h-screen items-center">
      <BallTriangle/>
      </div>
    );
    return <>
    { user && user?.discordInfo && (
      <div className="min-h-screen bg-[#121212]">
        <div className=" h-screen">
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 lg:px-4">
              <div className="col-span-4 sm:col-span-3">

                <div className="bg-[#181818] shadow rounded-lg p-6 mx-2">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={user.image}
                      className="lg:w-32 lg:h-32 bg-cover sm:w-24 sm:h-24 bg-gray-300 rounded-full mb-4 shrink-0"/>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white uppercase font-bold tracking-wider mb-2 text-center">
                      {user.displayName}
                    </span>
                    <p className="text-gray-700 mb-4 text-sm font bold bg-orange-300 ">
                      {user.rank}
                    </p>
                    <p className="text-gray-700 mb-4 text-sm font bold bg-orange-300 ">
                      {user.nickname}
                    </p>
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      <ModalForm/>
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <div>
                    <span className="text-2xl font-bold text-white mr-2">{/*user.upVotes?:*/}0</span>
                    <button className="p-2 border rounded-full bg-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </button>
                    </div>
                    <div>
                    <span className="font-bold text-2xl text-white mr-2">{/*kol.downVotes*/}0</span>
                    <button className="p-2 border rounded-full bg-red-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    </div>
                  </div>
                  <div className="justify-center space-x-4">
                    <h3 className="font-semibold text-center mt-3 text-white">
                      Follow me on
                    </h3>
                    {/* <SocialLinks links={kol.socialLinks} /> */}
                  </div>
                </div>
                
              </div>
              <div className="col-span-4 sm:col-span-9">
                <div className="bg-[#181818] shadow rounded-lg p-6 lg:mx-0 mx-2">
                  <h2 className="text-xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-700">
                    {user.bio}
                  </p>
                  {/* <h3 className="font-semibold text-black text-center mt-3 -mb-2">
                    Find me on
                  </h3> */}
                  <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  };


export default kolsProfile