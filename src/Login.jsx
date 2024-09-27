import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

const Login = ({ onLoginSuccess }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    onLoginSuccess(response); // Call the success handler from App component
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
    setErrorMessage('An error occurred during login. Please try again.');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </div>
    </div>
  );
};

export default Login;
