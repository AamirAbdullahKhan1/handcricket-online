import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-[#fefcdb] ${isScrolled ? 'bg-purple-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-white mr-2">🏏</span>
              <span className={`text-[27px] text-black uppercase font-extrabold ${isScrolled ? 'text-white' : 'text-white'} transition-colors duration-300`}>
                Hand Cricket
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline text-gray-900 font-semibold text-[18px] uppercase space-x-8">
              <a href="/" className='hover:bg-black hover:text-white transition-all duration-300 px-4 py-[8px] rounded-[18px]'>Home</a>
              <a href="#" className='hover:bg-black hover:text-white transition-all duration-300 px-4 py-[8px] rounded-[18px]'>Rules</a>
              <a href="#" className='hover:bg-black hover:text-white transition-all duration-300 px-4 py-[8px] rounded-[18px]'>Leaderboard</a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, text }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
    >
      {text}
    </a>
  );
}

export default Navbar;

