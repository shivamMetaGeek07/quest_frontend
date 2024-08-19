"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { notify } from '@/utils/notify';
const TeleApp: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'Anijojo_bot');  // Your Bot Username
    script.setAttribute('data-size', 'medium');  // Widget Size: small, medium, large
    script.setAttribute('data-auth-url','');  // Back-End Callback URL
    script.setAttribute('data-request-access', 'write');  // Permissions requested from the user
    document.getElementById('telegram-login')?.appendChild(script);
  }, []);

  const router = useRouter();

  useEffect(() => {
    // Function to handle API call after route change
    const handleRouteChange = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const telegramData = {
        id: urlParams.get('id'),
        first_name: urlParams.get('first_name'),
        last_name: urlParams.get('last_name'),
        username: urlParams.get('username'),
        photo_url: urlParams.get('photo_url'),
      };

      try {
        // Call your API route to save Telegram data
        const response = await axios.get('https://docsblock.io/auth/telegram/callback', {
          params: telegramData,
          withCredentials: true, // To include cookies, if necessary
        });
        console.log(response.data);
        // if (response.status === 200) {
        //   notify('success','Telegram data saved successfully!');
        //   router.push('/user/profile'); // Navigate to the user profile page
        // }
      } catch (error) {
        console.error('Error saving Telegram data:', error);
        // notify('error','Failed to save Telegram data. Please try again.');
      }
    };

    // Trigger the function when URL changes
    handleRouteChange();

  }, [router]);


  return (
    <div className="App flex">
      <div id="telegram-login"></div>
    </div>
  );
};

export default TeleApp;
