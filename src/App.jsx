import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';


function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow">
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

