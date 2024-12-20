import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleNavigation = (page) => {
    onNavigate(page);
    closeSidebar();
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#fefcdb]' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" onClick={() => handleNavigation('home')} className="flex items-center">
                <span className="text-2xl font-bold text-black mr-2">🏏</span>
                <span className="text-[20px] sm:text-[27px] text-black uppercase font-extrabold">
                  Hand Cricket
                </span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline text-gray-900 font-semibold text-[18px] uppercase space-x-8">
                <a href="#" onClick={() => handleNavigation('home')} className='hover:bg-black hover:text-white transition-all duration-300 px-4 py-[8px] rounded-[18px]'>Home</a>
                <a href="#" onClick={() => handleNavigation('rules')} className='hover:bg-black hover:text-white transition-all duration-300 px-4 py-[8px] rounded-[18px]'>Rules</a>
                <a href="#" onClick={() => handleNavigation('leaderboard')} className='hover:bg-black hover:text-white transition-all duration-300 px-4 py-[8px] rounded-[18px]'>Leaderboard</a>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={toggleSidebar} className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-64 bg-[#fefcdb] shadow-lg z-50 md:hidden"
          >
            <div className="flex flex-col h-full justify-between p-4">
              <div>
                <button onClick={closeSidebar} className="absolute top-4 right-4 text-black hover:text-gray-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="mt-8 flex flex-col space-y-4">
                  <a href="#" onClick={() => handleNavigation('home')} className='text-black hover:bg-black hover:text-white transition-all duration-300 px-4 py-2 rounded-md'>Home</a>
                  <a href="#" onClick={() => handleNavigation('rules')} className='text-black hover:bg-black hover:text-white transition-all duration-300 px-4 py-2 rounded-md'>Rules</a>
                  <a href="#" onClick={() => handleNavigation('leaderboard')} className='text-black hover:bg-black hover:text-white transition-all duration-300 px-4 py-2 rounded-md'>Leaderboard</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

