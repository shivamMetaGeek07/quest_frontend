"use client";
import { logoutUser } from '@/redux/reducer/authSlice';
import { AppDispatch, persistor, RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { images } from '../../../../public/assests/image';
import { Dropdown, Avatar, DropdownItem, DropdownMenu, DropdownTrigger, Input, Badge, Button } from "@nextui-org/react";
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () =>
{
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const [ currentNewsIndex, setCurrentNewsIndex ] = useState( 0 );
    const [ feedItems, setFeedItems ] = useState<string[]>( [] );
    const data = useSelector( ( state: RootState ) => state.login?.user );

    console.log( feedItems );

    useEffect( () =>
    {
        const interval = setInterval( () =>
        {
            setCurrentNewsIndex( ( prevIndex ) => ( prevIndex + 1 ) % feedItems.length );
        }, 5000 ); // Change news every 5 seconds

        return () => clearInterval( interval );
    }, [] );

    const logoutClient = async () =>
    {
        try
        {
            await dispatch( logoutUser() );
            await persistor.flush();
            localStorage.clear();
            router.push( '/login' );
        } catch ( error )
        {
            console.error( 'Error logging out:', error );
        }
    };

    const signup = () =>
    {
        router.push( '/login' );
        // window.location.reload();
    };

    useEffect( () =>
    {
        getFeeds();
    }, [] );

    const getFeeds = async () =>
    {
        try
        {
            const response = await axios.get( `${ process.env.NEXT_PUBLIC_SERVER_URL }/feed`, {
                params: {
                    page: 1,
                    limit: 10,
                },
            } );
            setFeedItems( response.data.feeds );

            console.log( 'feed items :-', response.data );
        } catch ( error )
        {
            console.log( 'error in getting feed :-', error );
            // setFeedItems( newsItems );
        }
    };


    return (
        <nav className="bg-black text-white p-4 ml-16 sm:ml-0 md:mx-[4rem]">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                {/* Logo */ }
                <div className="flex items-center">
                    <Link href="/" className="flex items-center rtl:space-x-reverse">
                        <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap">
                            Fam Protocol
                        </span>
                    </Link>
                </div>

                {/* Desktop menu */ }
                <div className="hidden lg:flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="SEARCH"
                            className="bg-gray-800 text-white px-3 py-2.5 w-48 xl:w-64"
                        />
                        <button className="search absolute right-0 top-0 bottom-0 bg-gray-700 text-white px-3 rounded-r">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className="relative px-2">
                        <Badge content="99+" shape="circle" color="danger">
                            <Button
                                radius="full"
                                isIconOnly
                                aria-label="more than 99 notifications"
                                variant="light"
                            >
                                <i className="bi bi-bell-fill text-white text-xl"></i>
                            </Button>
                        </Badge>
                    </div>

                    <div className="flex-1 max-w-lg min-w-[200px] xl:min-w-[300px]">
                        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-1 px-4 rounded overflow-hidden relative w-full h-[40px]">
                            <span className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-purple-600 to-purple-600 px-2 flex items-center font-bold z-10 border-r-2">
                                NEWS
                            </span>
                            <div className="inline-block ticker-wrap ml-16">
                                <div className="ticker">
                                    { feedItems && feedItems.length > 0 ? (
                                        feedItems.map( ( item:any, index:number ) => (
                                            <div key={ index } className="ticker__item">{ item?.title }</div>
                                        ) )
                                    ) : (
                                        <div className="ticker__item">No news available at the moment</div>
                                    ) }
                                </div>
                            </div>
                        </div>
                    </div>

                    { data ? (
                        <Dropdown placement="bottom-end" className="bg-slate-800">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="secondary"
                                    name="Jason Hughes"
                                    size="sm"
                                    src={ data?.image || 'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg' }
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2 font-bold">
                                    <p className="font-semibold">Signed in as { data.role }</p>
                                    <p className='font-semibold'>{ data.email }</p>
                                </DropdownItem>
                                <DropdownItem key="logout" color="danger" onClick={ logoutClient } className="bg-[#f31260] text-white">
                                    <div className="font-bold text-white text-center">Logout</div>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    ) : (
                        <button className='rounded bg-blue-700' onClick={ signup }>
                            <div className="py-1 px-4 rounded">
                                <div className='m-1 w-full'>Sign in / up</div>
                            </div>
                        </button>
                    ) }
                </div>
            </div>

            {/* Mobile and Tablet menu */ }
            <div className="lg:hidden mt-4 ml-0">
                <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-2 px-4 rounded overflow-hidden relative h-[40px]">
                    <span className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-purple-600 to-purple-600 px-1 flex items-center z-10 border-r-2">
                        NEWS
                    </span>
                    <div className="ticker-wrap ml-16">
                        <div className="ticker">
                            { feedItems && feedItems.length > 0 ? (
                                feedItems.map( ( item:any, index:number ) => (
                                    <div key={ index } className="ticker__item">{ item?.title }</div>
                                ) )
                            ) : (
                                <div className="ticker__item">No news available at the moment</div>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
