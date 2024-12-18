import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-[26px] font-bold uppercase"><a href="/">🏏 Hand Cricket</a></h1>
        <div className="flex space-x-6 max-lg:px-6 px-4">
          <a href="#" className="hover:text-blue-200 transition-colors duration-200 uppercase">Rules</a>
          <a href="#" className="hover:text-blue-200 transition-colors duration-200 uppercase">Leaderboard</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
