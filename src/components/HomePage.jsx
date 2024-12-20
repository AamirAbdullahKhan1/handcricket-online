import React from 'react';

function HomePage({ onStartGame, playerWins, computerWins }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fefcdb] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 text-gray-800 uppercase tracking-widest text-center">Hand Cricket</h1>
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-700">Game Stats</h2>
        <p className="text-base sm:text-lg text-gray-600">Player Wins: {playerWins}</p>
        <p className="text-base sm:text-lg text-gray-600">Computer Wins: {computerWins}</p>
      </div>
      <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-center max-w-md text-gray-700">
        Challenge the computer in an exciting game of Hand Cricket! Test your skills and strategy.
      </p>
      <button
        onClick={onStartGame}
        className="bg-blue-500 hover:bg-black text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 hover:scale-105 text-base sm:text-lg"
      >
        <span className='uppercase tracking-wider font-poppins'>Player vs Computer</span>
      </button>
      <button
        disabled
        title='Please wait'
        className="mt-4 font-poppins bg-gray-400 text-white font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed text-sm sm:text-base"
      >
        Play Online (Coming Soon)
      </button>
    </div>
  );
}

export default HomePage;

