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
    const [ drop, setDrop ] = useState( false );
    const [ isClient, setIsClient ] = useState( false );
    const [ currentNewsIndex, setCurrentNewsIndex ] = useState( 0 );
    const [ feedItems, setFeedItems ] = useState<string[]>( [] );
    const data = useSelector( ( state: RootState ) => state.login?.user );

    const newsItems = [
        "Penumbra airdrop claim extended for 7 more days...",
        "New crypto regulations announced by SEC...",
        "Bitcoin reaches new all-time high of $100,000..."
    ];

    useEffect( () =>
    {
        const interval = setInterval( () =>
        {
            setCurrentNewsIndex( ( prevIndex ) => ( prevIndex + 1 ) % newsItems.length );
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
    const handleClose = () =>
    {
        setDrop( false );
    };
    console.log( "data", data );

    useEffect( () =>
    {
        setIsClient( true ); // Set the client flag to true on the client side
    }, [] );


    if ( !isClient ) return null;



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
            setFeedItems( newsItems );
        }
    };


    return (
        <nav className="bg-black text-white flex items-center space-x-16 justify-between p-4">
            {/* logo */ }
            <div className="w-[95%] flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */ }
                <div>
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8 "
                            alt="Flowbite Logo"
                            width={ 32 }
                            height={ 32 }
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            Fam Protocol
                        </span>
                    </Link>
                </div>

                {/* Notifications */ }
                <div>
                    <Badge content="99+" shape="circle" color="danger">
                        <Button
                            radius="full"
                            isIconOnly
                            aria-label="more than 99 notifications"
                            variant="light"
                        >
                            <i className="bi bi-bell-fill text-white text-2xl"></i>
                        </Button>
                    </Badge>
                </div>
            </div>

            <div className="hidden md:flex items-center space-x-5 w-2/6">
                <input
                    type="text"
                    placeholder="SEARCH"
                    className="bg-gray-800 text-white px-3 py-1 w-full h-12"
                />
                <button className="text-white search rounded-r h-12 text-center p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {/* style={ { background: 'linear-gradient(90deg, #FA00FF, #FF7B7B, #5538CE)' } } */ }
            <div className="flex items-center space-x-20 w-4/6">

                <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-2 overflow-hidden relative w-2/3 rounded-sm px-5">
                    <span className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-purple-600 to-purple-600 px-4 flex items-center font-bold z-10 border-r-2">
                        NEWS
                    </span>
                    <div className="ticker-wrap ml-2 px-5">
                        <div className="ticker">
                            { feedItems?.map( ( item: any, index: number ) => (
                                <div key={ index } className="ticker__item">{ item?.title }</div>
                            ) ) }
                        </div>
                    </div>
                </div>
                { data ? (
                    <li className="text-center md:text-left">
                        <Dropdown placement="bottom-end" className="bg-slate-800">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="secondary"
                                    name="Jason Hughes"
                                    size="sm"
                                    src={ data?.image ? data.image : 'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg' }
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2 font-bold">
                                    <p className="font-semibold">Signed in as { data.role }</p>
                                    <p className='font-semibold'>{ data.email }</p>
                                </DropdownItem>
                                <DropdownItem key="logout" color="danger" onClick={ logoutClient } className="bg-[#f31260] text-white" >
                                    <div className="font-bold text-white text-center">Logout</div>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                ) : (
                    <button className='login1 rounded' onClick={ signup }>
                        <div className="login2 py-1 px-6 rounded">
                            <div className='m-1 w-full'>Sign in / up</div>
                        </div>
                    </button>
                ) }
                {/* animate-spin for spinner */ }
                {/* <div className=" rounded-full h-6 w-6 border-2 border-blue-600 hidden md:block"></div> */ }
            </div>
        </nav>
    );
};

export default Navbar;
