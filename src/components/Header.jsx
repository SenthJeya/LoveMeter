import React from 'react';
import Logo from '/love-meter-logo.jpg';

function Header() {
  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-10 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <h1 className="text-4xl font-extrabold text-center animate-pulse flex items-center justify-center gap-4">
          <img 
            src={Logo} 
            alt="Love Meter Logo" 
            className="w-20 rounded-full border-2 border-pink-500 shadow-lg"
          />
          <div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-red-500 mr-2 drop-shadow-md">
              Love
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 drop-shadow-md">
              Meter
            </span>
          </div>
        </h1>
      </div>
    </header>
  );
}

export default Header;