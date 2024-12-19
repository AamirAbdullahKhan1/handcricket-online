import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import RulesPage from './components/RulesPage';
import LeaderboardPage from './components/LeaderboardPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [gameStarted, setGameStarted] = useState(false);
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);

  useEffect(() => {
    const storedPlayerWins = localStorage.getItem('playerWins');
    const storedComputerWins = localStorage.getItem('computerWins');
    if (storedPlayerWins) setPlayerWins(parseInt(storedPlayerWins));
    if (storedComputerWins) setComputerWins(parseInt(storedComputerWins));
  }, []);

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
          <HomePage onStartGame={() => setGameStarted(true)} playerWins={playerWins} computerWins={computerWins} />
        );
      case 'rules':
        return <RulesPage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      default:
        return <HomePage onStartGame={() => setGameStarted(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fefcdb] flex flex-col">
      <Navbar onNavigate={handleNavigation} />
      <div className="flex-grow pt-16">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;

