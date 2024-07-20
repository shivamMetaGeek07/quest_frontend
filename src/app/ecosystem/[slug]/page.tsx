"use client";
import { fetchAllCommunities } from '@/redux/reducer/communitySlice';
import { AppDispatch, RootState } from '@/redux/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Page = ( params: { params: { slug: any; }; } ) =>
{
    const dispatch = useDispatch<AppDispatch>();
    const eco = params.params.slug;
    console.log( eco );
    const cardData = useSelector( ( state: any ) => state?.community?.allCommunities );


    // Filter the cardData based on ecosystem
    const data = cardData?.filter( ( item:any ) =>
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

    console.log( data );

    return (
        <div className='bg-[#111111] pt-[5rem] h-screen font-[ProFontWindows]'>
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
                <div className='flex flex-row text-gray-500 text-xl w-[36rem] justify-between h-32 bg-[#111111] shadow-lg shadow-[#0d0d0d]  items-center  m-auto'>
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
            <hr className="h-[1px] my-2 items-center m-auto border-[0.5px] w-3/4 border-dashed bg-violet-800 " />

            {/* map the ecosytem */ }
            <div className='flex flex-col lg:flex-row gap-4 my-7 overflow-hidden'>
                { data?.map( ( item: any,index:number ) =>
                {
                    return (



                        <div key={index} className='outer-div flex hover:bg-[#8c71ff] hover:text-[#111111] border-[#282828] border p-1 flex-col m-auto justify-center w-[22rem]'>
                            <div className='flex flex-row text-xl items-center justify-around m-auto'>
                                <div className='p-1'>
                                    <div className='image-container h-[5rem] w-[5rem] items-center flex'>
                                        <img src={item.logo} alt={item.title} className='styled-image' />
                                    </div>
                                    <div className='bg_Div_Down h-[2rem] mt-2 bg-gray-800' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex w-[15rem] m-1 flex-col items-center'>
                                        <div className='flex bg_eco_div border-b-4 border-[#8c71ff] pt-6 bg-[#1d1a28] flex-row items-center justify-between w-full m-auto'>
                                            <div className='text-lg ml-3'>{ item.title }</div>
                                            <div className='text-xs flex flex-row rounded-lg pl-6'>
                                                <div className='flex m-2 items-center flex-col'>
                                                    <span>{ item?.quests?.length}</span>
                                                    <span>Quests</span>
                                                </div>
                                                <div className='flex m-2 items-center flex-col'>
                                                    <span>{ item?.members?.length}</span>
                                                    <span>Followers</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-end gap-x-1'>
                                        <div className='eco_box w-5 h-5 bg-[#8c71ff]' />
                                        <div className='eco_box w-5 h-5 bg-[#8c71ff]' />
                                        <div className='eco_box w-5 h-5 bg-[#8c71ff]' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-row text-sm m-3 justify-between w-full'>
                                    <span className='flex descText'>Desc:</span>
                                    <span className='text-gray-600 descdata text-wrap'>{ item.description}</span>
                                </div>
                            </div>
                        </div>

                    );
                } ) }
            </div>
        </div>
    );
};

export default Page;
