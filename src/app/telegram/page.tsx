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
    script.setAttribute('data-auth-url', 'https://docsblock.io/auth/telegram/callback');  // Back-End Callback URL
    script.setAttribute('data-request-access', 'write');  // Permissions requested from the user
    document.getElementById('telegram-login')?.appendChild(script);
  }, []);

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
      
      if (telegramData.id) {
              try {
                // Send the Telegram data to your API route for verification and storage
                const response = await axios.post(
                  `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/telegram/callback`,
                  telegramData,
                  {
                    withCredentials: true,
                  }
                );
                if (response.data) {

                  notify("success","Telegram connected successfully")
                  router.push('/user/profile');  // Redirect to the dashboard or another authenticated page
                }
               
              } catch(error:any){
                console.log("telegramData",telegramData);
                notify("error",error?.response.data.message)
              }
    };

    // Handle initial route change
    handleRouteChange();
  }}, [router]);

  // Define your custom function here
  const yourCustomFunction = (user: any) => {
    // Implement your custom logic with the user data
    console.log('Custom function called with user:', user);
    // Extract username and id from the user object
    const { username, id } = user;
    console.log(`Username: ${username}, ID: ${id}`);
  };

    

  return (
    <div className="App flex">
      <div id="telegram-login"></div>
    </div>
  );
};

export default TeleApp;
