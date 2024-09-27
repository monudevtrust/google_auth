import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    setIsLoggedIn(true); // Update state to show Home component
  };

 

  return (
    <GoogleOAuthProvider clientId="567904536363-0orl509ukih65u2p2qrkma26lp6u79ip.apps.googleusercontent.com">
      {isLoggedIn ? <Home /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </GoogleOAuthProvider>
  );
};

export default App;
