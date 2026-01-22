import React from 'react';

function Loading({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900/40 backdrop-blur-md z-50 transition-opacity duration-500">
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-xl bg-pink-500/30 animate-pulse"></div>
        <img 
          src="/love-meter-logo.jpg" 
          alt="Love Meter Logo" 
          className="w-32 rounded-full border-2 border-pink-500 shadow-2xl animate-bounce relative z-10 object-cover"
        />
      </div>
      <h1 className="mt-8 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 animate-pulse tracking-[0.5em]">
        --LOVE--
      </h1>
    </div>
  );
}

export default Loading;
