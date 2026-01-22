import React from 'react';
import { Instagram } from 'lucide-react';

function Footer({ className }) {
  return (
    <footer className={`bg-gray-900 border-t border-gray-800 transition-all duration-300 ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <p className="text-sm text-gray-500 hover:text-gray-400 transition-colors duration-300 flex items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} Love Meter.</span>
          <span className="hidden sm:inline">|</span>
          <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            Developed by SENTHURAN JEIYACHANDIRAN
          </span>
          <span className="hidden sm:inline">|</span>
          <a 
            href="https://www.instagram.com/ramana._.gaming?igsh=MTAzdzg0cm1sZm1vMQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition-colors duration-300 p-1 hover:bg-white/5 rounded-full mt-1"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;