"use client";
import { fetchAllCommunities } from '@/redux/reducer/communitySlice';
import { AppDispatch, RootState } from '@/redux/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Page = ( params: { params: { slug: any; }; } ) =>
{
    const dispatch = useDispatch<AppDispatch>();
    const eco = params.params.slug;
    // console.log( eco );
    const cardData = useSelector( ( state: any ) => state?.community?.allCommunities );

    // Filter the cardData based on ecosystem
    const data = cardData?.filter( ( item: any ) =>
    {
        // Check if item.ecosystem exists and is an array
        if ( Array.isArray( item.ecosystem ) )
        {
            // Check if eco is in the ecosystem array
            return item.ecosystem.includes( eco );
        } else if ( typeof item.ecosystem === 'string' )
        {
            // If ecosystem is a string, directly compare it
            return item.ecosystem === eco;
        }
        // If ecosystem is neither an array nor a string, return false
        return false;
    } );

    useEffect( () =>
    {
        dispatch( fetchAllCommunities() );
    }, [] );


    return (
        <div className='pt-[5rem] font-[ProFontWindows]'>
            <div className='flex-col  lg:flex-row items-center flex justify-between'>
                <div className='flex flex-row text-xl    items-center justify-around m-auto'>
                    <div className=' p-3 '>
                        <div
                            className='image-container h-[10rem] w-36 items-center flex'>
                            <img src='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' alt='' className='styled-image ' />
                        </div>
                    </div>
                    <div className='flex w-[21rem]   m-1 flex-col  items-center'>
                        <div className='flex  flex-row items-center justify-between  w-full m-auto'>
                            <div className='text-4xl'>LINEA</div>
                            <div className='text-xs bg_Div_Container  bg-[#1d1a28] p-2 rounded-lg pl-6'>392K Participants</div>
                        </div>
                        <hr className="h-[1px] my-2  border-[0.5px] w-full border-dashed bg-black " />
                        <div className='flex  flex-row text-sm gap-2 justify-between w-full m-auto'>
                            <div className=' flex'>Desc: </div>
                            <div className=' text-wrap  text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elitorem ipsu  </div>
                        </div>
                    </div>


                </div>
                <div className='flex flex-row text-gray-500 text-xl w-[36rem] justify-between h-32  shadow-lg shadow-[#0d0d0d]  items-center  m-auto'>
                    <div
                        className='bg_Div_half h-[8rem] w-[16rem] items-center flex'>
                        <img src='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' alt='' className='styled-image ' />
                    </div>

                    <div className='flex   flex-col w-2/4  gap-3 p-2 justify-start   '>
                        <div className='text-sm flex flex-row justify-between '>
                            <div className='text-white'>Noob :</div>
                            <div>+1 Quests</div>
                        </div>
                        <div className='text-sm flex flex-row justify-between '>
                            <div className='text-white'>Maxi :</div>
                            <div>+1 Quests</div>
                        </div>
                        <div className='text-sm flex flex-row justify-between '>
                            <div className='text-white'>Enthusiast :</div>
                            <div>+1 Quests</div>
                        </div>
                    </div>
                    <div className='flex   flex-row text-sm gap-5 justify-end w-full m-auto'>
                        <div className=' text-right w-52  '>Lorem ipsum, dolor sit amet consectetur adipisicing elitorem ipsu  </div>
                    </div>


                </div>
            </div>
             <div className='mx-24 mt-4'>
             <svg xmlns="http://www.w3.org/2000/svg" width="1082" height="2" viewBox="0 0 1082 2" fill="none">
  <path opacity="0.7" d="M1081 1L1.00001 1" stroke="url(#paint0_linear_148_4119)" stroke-linecap="round" stroke-dasharray="13 13"/>
  <defs>
    <linearGradient id="paint0_linear_148_4119" x1="1081" y1="0.5" x2="1" y2="0.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8C71FF" stop-opacity="0"/>
      <stop offset="1" stop-color="#FA00FF"/>
    </linearGradient>
  </defs>
</svg>
             </div>

            {/* map the ecosytem */ }
            <div className='mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7'>
                { data?.map( ( item: any, index: number ) => (
 <div key={ index } className="outer-div relative flex lg:gap-2 sm:gap-4 gap-4  hover:bg-[#8c71ff] hover:text-[#111111] border-[#282828] border rounded-md lg:p-5 sm:p-2 p-4 flex-col justify-center w-full sm:w-full ">
   <div className="flex flex-row text-xl items-center justify-around ">
  <div className="p-1">
    <div className="image-container md:h-[5rem] md:w-[5rem] h-[4rem] w-[4rem] items-center flex">
      <img src={ item.logo } alt={ item.title }  className="styled-image" />
    </div>
    <div className="bg_Div_Down h-[2rem] mt-2 bg-gray-800" />
  </div>

  <div className="md:w-2/3 w-2/3 flex flex-col justify-start gap-2 ">
    <div className="flex w-full flex-col items-start ">
      <div className="flex w-full md:h-[5rem] bg_eco_div border-b-4 border-[#8c71ff] gap-2 md:gap-2  p-2 bg-[#28223d] flex-col lg:flex-row items-center md:items-end lg:items-end justify-between ">
        <div className="md:w-4/5  w-4/5 truncate text-[12px] md:text-[10px] lg:text-[10px] md:ml-3 md:text-start text-center card-title">
          {item.title}
        </div>

        <div className="md:1/5 flex flex-row rounded-lg justify-center md:justify-end">
          <div className="flex gap-1 mr-2 items-center flex-col">
            <span className="card-white-text text text-lg ">
            { item?.quests?.length }
            </span>
            <span className=" card-gray-text text-3xl">QUESTS</span>
          </div>
          <div className="flex gap-1 items-center flex-col">
            <span className="card-white-text text-lg">
            { item?.members?.length }
            </span>
            <span className=" card-gray-text text-lg">FOLLOWERS</span>
          </div>
        </div>
        
      </div>
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
  <div className="flex flex-row text-xs m-1 gap-2 justify-start">
    <span className="descText">Bio:</span>
    <span className="descdata text-wrap break-words overflow-hidden line-clamp-2">
    { item.description }
    </span>
  </div>
</div>
</div> 




                ) ) }
            </div>
        </div>
    );
};

export default Page;
