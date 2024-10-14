import React from 'react';
import { FiSearch, FiShoppingCart, FiHeart } from 'react-icons/fi';

export default function Navbar() { 
  return (
    <nav className="w-full flex items-center justify-between p-4 shadow-md">
      <div className="text-2xl font-bold">
        <span>Silon</span>
        <span className="text-red-500">.</span>
      </div>

      <div className="flex space-x-6">
        <a href="#home" className="text-sm font-medium hover:text-red-500">HOME</a>
        <a href="#about" className="text-sm font-medium hover:text-red-500">ABOUT</a>
        <a href="#services" className="text-sm font-medium hover:text-red-500">SERVICES</a>
        <a href="#projects" className="text-sm font-medium hover:text-red-500">PROJECTS</a>
        <a href="#blog" className="text-sm font-medium hover:text-red-500">BLOG</a>
        <a href="#contact" className="text-sm font-medium hover:text-red-500">CONTACT</a>
      </div>

      <div className="flex items-center space-x-4">
        <FiSearch className="text-xl cursor-pointer hover:text-red-500" />
        
        <div className="relative">
          <FiShoppingCart className="text-xl cursor-pointer hover:text-red-500" />
          
        </div>

        <div className="relative">
          <FiHeart className="text-xl cursor-pointer hover:text-red-500" />
          
        </div>
      </div>
    </nav>
  );
}