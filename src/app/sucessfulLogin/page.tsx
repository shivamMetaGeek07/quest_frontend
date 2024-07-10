"use client"

import { fetchUserData } from '@/redux/reducer/authSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { Spinner } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';

const Page = () => {
  const router = useRouter(); // Initialize router here
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.login.user);

  useEffect(() => {
    dispatch(fetchUserData());

    // Ensure we navigate only on the client side
    if (data?.role === 'kol') {
      router.push('/kol/kols-profile');
    } else if (data) {
      router.push('/user/profile');
    }
  }, [data, dispatch, router]); // Added 'data' as a dependency

  return (
    <div className='bg-gray-500 items-center flex justify-center opacity-35 h-screen'> <Spinner color="success"/></div>
  );
};

export default Page;
