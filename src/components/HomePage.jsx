import React from 'react';

function HomePage({ onStartGame }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white">
      <h1 className="text-5xl font-bold mb-8 animate-pulse uppercase">Hand Cricket</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Challenge the computer in an exciting game of Hand Cricket! Test your skills and strategy.
      </p>
      <button
        onClick={onStartGame}
        title='Lessgoo!!'
        className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
      >
        Play vs Computer
      </button>
      <button
        title='Pls wait 🙏🏻'
        disabled
        className="mt-4 bg-gray-400 text-white font-bold py-2 px-4 rounded-full opacity-50 cursor-not-allowed"
      >
        Play Online (Coming Soon)
      </button>
    </div>
  );
}

export default HomePage;

