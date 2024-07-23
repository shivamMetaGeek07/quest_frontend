"use client"
import React, { useEffect } from 'react';

const TeleApp: React.FC = () => {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://telegram.org/js/telegram-widget.js?22';
  //   script.async = true;
  //   script.setAttribute('data-telegram-login', 'Anijojo_bot');  // Your Bot Username
  //   script.setAttribute('data-size', 'medium');  // Widget Size: small, medium, large
  //   script.setAttribute('data-auth-url', 'https://docsblock.io/auth/telegram/callback');  // Back-End Callback URL
  //   script.setAttribute('data-request-access', 'write');  // Permissions requested from the user
  //   document.getElementById('telegram-login')?.appendChild(script);
  // }, []);

  // return (
  //   <div className="App flex">
  //     <div id="telegram-login"></div>
  //   </div>
  // );
  useEffect(() => {
    // Function to handle Telegram login
    const handleTelegramLogin = (event:any) => {
      const user = event.detail;
      console.log('Telegram user:', user);

      // Call your function with the Telegram user data
      yourCustomFunction(user);
    };

    // Listen for the Telegram login event
    window.addEventListener('telegram-web-app-login', handleTelegramLogin);

    // Create the script element for the Telegram widget
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'Anijojo_bot');  // Your Bot Username
    script.setAttribute('data-size', 'medium');  // Widget Size: small, medium, large
    script.setAttribute('data-auth-url', '');  // No backend callback URL
    script.setAttribute('data-request-access', 'write');  // Permissions requested from the user
    document.getElementById('telegram-login')?.appendChild(script);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('telegram-web-app-login', handleTelegramLogin);
    };
  }, []);

  // Define your custom function here
  const yourCustomFunction = (user:any) => {
    // Implement your custom logic with the user data
    console.log('Custom function called with user:', user);
    // Extract username and id from the user object
    const { username, id } = user;
    console.log(`Username: ${username}, ID: ${id}`);
  };

  return <div id="telegram-login"></div>;

};

export default TeleApp;
