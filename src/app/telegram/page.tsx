"use client"
import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'Anijojo_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');
    document.getElementById('telegram-login')?.appendChild(script);
  }, []);

  const onTelegramAuth = (user: any) => {
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
    // Send user data to your backend for verification and further processing  
    fetch('http://localhost:8080/auth/telegram/callback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => {
      // Handle response from the server
      console.log("res",response);
    }).catch(error => {
      console.error('Error:', error);
    });
  };
  
  (window as any).onTelegramAuth = onTelegramAuth;
  
  return (
    <div className="App flex justify-center w-full m-auto items-center">
      <h1>Login with Telegram</h1>
      <div id="telegram-login"></div>
      <button onClick={onTelegramAuth}>send</button>
    </div>
  );
};

export default App;

