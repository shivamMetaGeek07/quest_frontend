// components/TelegramAuthHandler.js
"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';

const TelegramAuthHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const telegramData = {
        id: urlParams.get('id'),
        first_name: urlParams.get('first_name'),
        last_name: urlParams.get('last_name'),
        username: urlParams.get('username'),
        photo_url: urlParams.get('photo_url'),
        auth_date: urlParams.get('auth_date'),
        hash: urlParams.get('hash'),
      };

      console.log("telegramData",telegramData)
    };

    // Handle initial route change
    handleRouteChange();
  }, [router]);

  return (
     <div className="App flex justify-center items-center">
      <div id="telegram-login"></div>
    </div>
  );
};

export default TelegramAuthHandler;
