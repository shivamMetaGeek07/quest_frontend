"use client";
import {  RootState } from '@/redux/store';
import { useProtectedRoute } from '@/utlis/privateRoute';
import React,{useState,useEffect} from 'react'
import { BallTriangle } from 'react-loader-spinner';
import {  useSelector } from 'react-redux';

type Props = {}

const kolsProfile = ( props: Props ) =>
{
    useProtectedRoute("kol");
    const user=  useSelector( ( state: RootState ) =>state.login.user);
    const loading = useSelector((state: RootState) => state.login.loading);
   

    if (loading) {
      return <><div className='min-h-screen flex justify-center items-center'><BallTriangle/></div>;</>
    }
    if (!user) {
      return <><div className='min-h-screen flex justify-center items-center'><BallTriangle/></div>;</>
    }
  
    return<>    
    { user && user?.discordInfo && (
      <div className="min-h-screen bg-slate-800">
        <div className=" h-screen">
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
              <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <img
                      src={user.image}
                      className="w-32 h-32 bg-cover bg-gray-300 rounded-full mb-4 shrink-0"/>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      {user.displayName}
                    </span>
                    <p className="text-gray-700 mb-4 text-sm font bold bg-orange-300 ">
                      {user.rank}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <div>
                    <span className="text-2xl font-bold text-black">{/*user.upVotes?:*/}0</span>
                    <button className="p-2 border rounded-full bg-green-400">
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
                    <span className="font-bold text-2xl text-black">{/*kol.downVotes*/}0</span>
                    <button className="p-2 border rounded-full bg-red-300">
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
                    <h3 className="font-semibold text-start mt-3 text-black">
                      Follow me on
                    </h3>
                    {/* <SocialLinks links={kol.socialLinks} /> */}
                  </div>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-700">
                    {/* {user.aboutMe || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in luctus risus rhoncus id."} */}
                  </p>
                  <h3 className="font-semibold text-center mt-3 -mb-2">
                    Find me on
                  </h3>
                  {/* <SocialLinks links={kol.socialLinks} /> */}
                  <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                  {/* {user.experiences.map((exp, index) => (
                    <div key={index} className="mb-6">
                      <div className="flex justify-between flex-wrap gap-2 w-full">
                        <span className="text-gray-700 font-bold">{exp.position}</span>
                        <p>
                          <span className="text-gray-700 mr-2">at {exp.company}</span>
                          <span className="text-gray-700">{exp.years}</span>
                        </p>
                      </div>
                      <p className="mt-2">{exp.description}</p>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
</>
}

export default kolsProfile