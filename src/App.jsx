import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import RulesPage from './components/RulesPage';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
    if (page === 'home') {
      setGameStarted(false);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return gameStarted ? (
          <GamePage onRestartGame={() => setGameStarted(false)} />
        ) : (
          <HomePage onStartGame={() => setGameStarted(true)} />
        );
      case 'rules':
        return <RulesPage />;
      default:
        return <HomePage onStartGame={() => setGameStarted(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex flex-col">
      <Navbar onNavigate={handleNavigation} />
      <div className="flex-grow pt-16">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;

