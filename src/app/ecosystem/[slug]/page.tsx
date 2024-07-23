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

    console.log( data );

    return (
        <div className='bg-[#111111] pt-[5rem] font-[ProFontWindows]'>
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
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7'>
                { data?.map( ( item: any, index: number ) => (
                    <div key={ index } className='outer-div flex flex-col border border-[#282828] hover:bg-[#8c71ff] hover:text-[#111111] p-4 rounded-lg transition-colors duration-300 w-full max-w-[22rem] mx-auto'>
                        <div className='flex flex-col sm:flex-row items-center justify-between mb-4'>
                            <div className='mb-4 sm:mb-0'>
                                <div className='image-container h-20 w-20 flex items-center justify-center mb-2'>
                                    <img src={ item.logo } alt={ item.title } className='styled-image max-w-full max-h-full' />
                                </div>
                                <div className='bg_Div_Down h-8 bg-gray-800 w-full' />
                            </div>
                            <div className='flex flex-col w-full sm:w-auto'>
                                <div className='bg_eco_div border-b-4 border-[#8c71ff] bg-[#1d1a28] p-4 rounded-t-lg w-full'>
                                    <div className='text-lg mb-2'>{ item.title }</div>
                                    <div className='text-xs flex justify-between'>
                                        <div className='flex flex-col items-center'>
                                            <span>{ item?.quests?.length }</span>
                                            <span>Quests</span>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <span>{ item?.members?.length }</span>
                                            <span>Followers</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end gap-1 mt-2'>
                                    <div className='eco_box w-5 h-5 bg-[#8c71ff]' />
                                    <div className='eco_box w-5 h-5 bg-[#8c71ff]' />
                                    <div className='eco_box w-5 h-5 bg-[#8c71ff]' />
                                </div>
                            </div>
                        </div>
                        <div className='text-sm'>
                            <span className='font-semibold descText'>Desc:</span>
                            <p className='text-gray-600 mt-1 descdata'>{ item.description }</p>
                        </div>
                    </div>
                ) ) }
            </div>
        </div>
    );
};

export default Page;
