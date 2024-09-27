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

  // Verify that the client ID is set correctly
  console.log('Google Client ID:', import.meta.env.VITE_GOOGLE_CLIENT_ID);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      {isLoggedIn ? <Home /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </GoogleOAuthProvider>
  );
};

export default App;
