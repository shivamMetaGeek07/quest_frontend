"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBolt, FaTwitter, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchCategoryEcosystem } from '@/redux/reducer/communitySlice';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
// import { Dropdown, Button, Spacer } from '@nextui-org/react';
const Page: React.FC = () => {
    const router=useRouter();
    const dispatch=useDispatch<AppDispatch>();
    const [search, setSearch] = useState<string>('');
    const [ecosystem, setEcosystem] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [communities, setCommunities] = useState<any[]>([]); 
    const [selectedEcosystem, setSelectedEcosystem] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
   
  const fetchCommunities = async (search: string, ecosystem: string, category: string) => {
    try {
      // Construct the request body
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/community/get`, {
        search,
        ecosystem: selectedEcosystem,
        category: selectedCategories,
        });

      // Update the state with the response data
      setCommunities(response.data);

      // Log the response for debugging
    } catch (error) {
      console.error('Failed to fetch communities:', error);
    }
  };

  const data = useSelector((state: RootState) => state.community.forall );
  const categories = data?.category || [];
  const ecosystems = data?.ecosystem || [];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCommunities(search, ecosystem, category);   
  };

  useEffect(() => {
    fetchCommunities('', '', ''); 
    dispatch(fetchCategoryEcosystem())  
  }, [1]);

  

  return (
    <div className="">
      <form onSubmit={handleSubmit} className='flex items-center justify-center'>
      <div className="flex  mr-32 mt-10">
            <div className="relative md:block ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                placeholder="Search..."
                value={search}
            onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        <div className='text-black bg-violet-400 rounded-xl mx-4 '>
        <Dropdown className='bg-violet-400'>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
              className="capitalize text-white"
            >
              {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'Select Categories'}
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Select Categories"
            disallowEmptySelection
            selectionMode="multiple"
            selectedKeys={selectedCategories}
            onSelectionChange={(keys) => setSelectedCategories(Array.from(keys) as string[])}
          >
            {categories.map((cat) => (
              <DropdownItem key={cat}>{cat}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        </div>
        <div className='text-black bg-violet-400 rounded-xl mx-4 '>
        <Dropdown className='bg-violet-400'>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
              className="capitalize text-white"
            >
             {selectedEcosystem.length > 0 ? selectedEcosystem.join(', ') : 'Select Ecosystem'}
             </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Select Ecosystem"
            disallowEmptySelection
            selectionMode='multiple'
            onSelectionChange={(keys) => setSelectedEcosystem(Array.from(keys) as string[])}
            selectedKeys={selectedEcosystem}
          >
            {ecosystems.map((eco) => (
              <DropdownItem key={eco}>{eco}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        </div>
        <button type="submit">Search</button>
      </form>

      
         <div className="grid gap-4 sm:gap-8 mx-4 lg:mx-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10">

           { communities?.map( ( community, index ) => (

  <div
    key={ index }
    onClick={ () => router.push( `/kol/community-project/${ community._id }` ) }
    className="bg-white/5 sm:p-6 rounded-xl h-56 w-full shadow-lg group hover:scale-105 hover:bg-white/10"
  >
    <div className="flex gap-3 items-center">
      <div>
        <img
          src={ community.logo }
          alt=""
          className="w-10 h-10 object-cover rounded-xl"
        />
      </div>
      <div className="text-xl font-bold">
        <h1>{ community.title }</h1>
      </div>
      <div className="text-xl font-bold">
        {/* <h1>{ co }</h1> */}
      </div>
    </div>
    <div className="text-gray-400 items-center pt-5">
      <p>{ community.description.slice( 0, 20 ) }</p>
    </div>
    <div className="flex gap-10 pt-3 text-gray-400 h-12 w-24">
      <div className="flex bg-white/10 rounded-lg items-center p-2">
        <FaUser className="w-6 h-6" />
        <div>{ community.members.length }</div>
      </div>
      <div className="flex bg-white/10 rounded-lg p-2">
        <FaBolt className="w-6 h-6" />
        <div>{ community.quests.length }</div>
      </div>
      <div className="flex bg-white/10 rounded-lg p-2">
        <FaTwitter className="w-6 h-6" />
        <div>0</div>
      </div>
    </div>
  </div>
           ) ) }
        </div>
    </div>
  );
};

export default Page;
