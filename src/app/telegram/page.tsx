"use client"
import React, { useEffect } from 'react';

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

  return (
    <div className="App flex">
      <div id="telegram-login"></div>
    </div>
  );
};

export default TeleApp;
