"use client";
import React, { useEffect, useState } from "react";
import { FaUser, FaTwitter, FaBolt } from "react-icons/fa";
import { fetchAllCommunities, joinCommunity } from "@/redux/reducer/communitySlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "@/redux/reducer/authSlice";
import { fetchCategoryEcosystem } from '@/redux/reducer/communitySlice';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import axios from 'axios'
import ReferralForm from "../components/referalPopUp";
import Image from "next/image"

const MyCommunities = () =>
{ 

    const router=useRouter();
    const dispatch = useDispatch<AppDispatch>();
    // const cardData:any = useSelector( ( state: RootState ) => state.community.allCommunities );
    const memberId = useSelector( ( state: RootState ) => state.login.user?._id );
    const [ loadingCommunityId, setLoadingCommunityId ] = useState<string | null>( null );
    const [search, setSearch] = useState<string>('');
    const [ecosystem, setEcosystem] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [communities, setCommunities] = useState<any[]>([]); 
    const [selectedEcosystem, setSelectedEcosystem] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const data = useSelector((state: RootState) => state.community.forall );
  const categories = data?.category || [];
  const ecosystems = data?.ecosystem || [];

  const joinningCommunity = async ( e: any ) =>
  {
    setLoadingCommunityId( e._id );
    try
    {
      const res = await dispatch( joinCommunity( { memberId, id: e._id } ) ).unwrap();
      console.log( res );
      await dispatch(fetchAllCommunities());
    } catch ( error )
    {
      console.log( "error in adding the community", error );
    } finally
    {
      setLoadingCommunityId( null );
    }
  };

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

  useEffect(() => {
    fetchCommunities('', '', ''); 
      // dispatch( fetchAllCommunities() );
    dispatch(fetchCategoryEcosystem());
    dispatch( fetchUserData() );
  }, [1]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCommunities(search, ecosystem, category);   
  };
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="mx-4 lg:mx-20">
        <div className="text-2xl pt-10 font-bold">
          <h1>All Communities</h1>
        </div>
        <div className="max-w-[600px] pt-4 text-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            neque magni dolorum dignissimos enim delectus velit ut aspernatur.
          </p>
        </div>

        <div>
           <form onSubmit={handleSubmit}>
       <div className='flex flex-row justify-between items-center p-4'>  
          <div className="relative md:block">
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
        <div className='flex flex-row justify-center items-center'>
        <div className='text-white bg-slate-800 rounded-xl mx-4 '>
          <Dropdown className='bg-slate-800'>
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
        <div className='text-black bg-slate-800 rounded-xl mx-4 '>
          <Dropdown className='bg-slate-800'>
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
        <Button type='submit' color="primary" variant="solid">
          Apply
        </Button>  
        </div>
       </div>
        
      </form>
        </div>

        

        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8">
          { communities?.map( ( card:any , index:number ) => (
            <div
              key={ index }
              className="bg-white/5 p-4 sm:p-6 rounded-xl shadow-lg group hover:scale-105 hover:bg-white/10"
            >
              <div className="flex gap-3 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={ card.logo }
                    alt=""
                    className="w-16 h-16 object-cover rounded-xl sm:w-10 sm:h-10"
                  />
                </div>
                <div className="text-xl font-bold">
                  <h1>{ card.title }</h1>
                </div>
              </div>
              <div className="text-gray-400 items-center pt-5">
                <p className="text-sm sm:text-base">
                  { card.description.slice( 0, 20 ) }
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-3 text-gray-400">
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <FaUser className="w-5 h-5" />
                  <div className="pl-1">{ card.members.length }</div>
                </div>
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <FaBolt className="w-5 h-5" />
                  <div className="pl-1">{ card.quests.length }</div>
                </div>
                <div className="flex bg-white/10 rounded-lg p-2 items-center">
                  <FaTwitter className="w-5 h-5" />
                  <div className="pl-1"></div>
                </div>
              </div>
              { card.members.includes( memberId ) ? (
                
                 <div className="flex justify-end items-center mt-5">
                  <button
                    className="w-full h-8 bg-green-500/20 text-green-400 text-center font-medium rounded-lg transition-all duration-300 ease-in-out cursor-default border border-green-500/50 hover:bg-green-500/30"
                    disabled
                  >
                    Already in The Community
                  </button>
                </div>

              ) : (
                <div className="flex flex-col gap-3  mt-5">
                  <button
                    className={ `w-full h-8 bg-white/10 hover:bg-white/25 text-white text-center font-medium rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg ${ loadingCommunityId === card._id ? "cursor-wait" : "" }` }
                    onClick={ ( e ) =>
                    {
                      e.stopPropagation();
                      if ( loadingCommunityId === null ) joinningCommunity( card );
                    } }
                    disabled={ loadingCommunityId !== null }
                  >
                    { loadingCommunityId === card._id ? "Joining..." : "Join The Community" }
                  </button>
                  <ReferralForm memberId={memberId} id={card._id} />
                  
                  
                  </div>

              ) }
            </div>
          ) ) }
        </div>
      </div>
    </div>
  );
};

export default MyCommunities;
