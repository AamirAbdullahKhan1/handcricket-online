import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        {gameStarted ? (
          <GamePage onRestartGame={() => setGameStarted(false)} />
        ) : (
          <HomePage onStartGame={() => setGameStarted(true)} />
        )}
      </div>
    </div>
  );
}

export default App;

