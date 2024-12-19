import React from 'react';

function HomePage({ onStartGame, playerWins, computerWins }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-[#fefcdb]">
      <h1 className="text-5xl font-bold mb-8 text-gray-800 uppercase tracking-widest">Hand Cricket</h1>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-700">Game Stats</h2>
        <p className="text-lg text-gray-600">Player Wins: {playerWins}</p>
        <p className="text-lg text-gray-600">Computer Wins: {computerWins}</p>
      </div>
      <p className="text-xl mb-8 text-center max-w-md text-gray-700">
        Challenge the computer in an exciting game of Hand Cricket! Test your skills and strategy.
      </p>
      <button
        onClick={onStartGame}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        <span className='uppercase text-[19px] tracking-wider font-poppins'>Player</span> vs <span className='uppercase tracking-wider font-poppins text-[19px]'>Computer</span>
      </button>
      <button
        disabled
        className="mt-4 font-poppins bg-gray-400 text-white font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed"
      >
        Play Online (Coming Soon)
      </button>
    </div>
  );
}

export default HomePage;

