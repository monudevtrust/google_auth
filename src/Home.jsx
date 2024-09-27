import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold text-center">Welcome to the Home Page!</h1>
        <p className="text-center mt-4">You have successfully logged in.</p>
      </div>
    </div>
  );
};

export default Home;
