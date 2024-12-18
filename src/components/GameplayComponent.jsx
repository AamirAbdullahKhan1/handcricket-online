import React, { useState, useEffect } from 'react';

function GameplayComponent({ playerBattingFirst, onRestartGame }) {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [target, setTarget] = useState(null);
  const [playerBatting, setPlayerBatting] = useState(playerBattingFirst);
  const [firstInningsComplete, setFirstInningsComplete] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (playerChoice !== null) {
      const computerMove = Math.floor(Math.random() * 10) + 1;
      setComputerChoice(computerMove);

      if (playerBatting) {
        const newPlayerScore = playerScore + playerChoice;
        setPlayerScore(newPlayerScore);
        if (firstInningsComplete && newPlayerScore >= target) {
          endGame('player');
        }
      } else {
        const newComputerScore = computerScore + computerMove;
        setComputerScore(newComputerScore);
        if (firstInningsComplete && newComputerScore >= target) {
          endGame('computer');
        }
      }

      if (!firstInningsComplete && (playerChoice === computerMove)) {
        endFirstInnings();
      }
    }
  }, [playerChoice]);

  const endFirstInnings = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setFirstInningsComplete(true);
      setTarget(playerBatting ? playerScore + 1 : computerScore + 1);
      setPlayerBatting(!playerBatting);
      setPlayerScore(0);
      setComputerScore(0);
      setPlayerChoice(null);
      setComputerChoice(null);
      setShowAnimation(false);
    }, 3000);
  };

  const endGame = (winner) => {
    setGameOver(true);
    setWinner(winner);
  };

  const handlePlayerMove = (move) => {
    if (!showAnimation && !gameOver) {
      setPlayerChoice(move);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 min-h-[calc(100vh-64px)]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">
          {playerBatting ? "You're Batting 🏏" : "You're Bowling 🎳"}
        </h2>
        <div className="mb-6 w-full">
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
            <div className="text-center">
              <p className="text-lg font-semibold">Player</p>
              <p className="text-3xl font-bold text-blue-500">{playerScore}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">Computer</p>
              <p className="text-3xl font-bold text-red-500">{computerScore}</p>
            </div>
          </div>
          {target && (
            <div className="mt-4 text-center bg-yellow-100 p-2 rounded-lg">
              <p className="text-lg font-semibold">Target: <span className="text-2xl text-yellow-600">{target}</span></p>
            </div>
          )}
        </div>
        {!gameOver && !showAnimation && (
          <div className="grid grid-cols-5 gap-2 mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <button
                key={num}
                onClick={() => handlePlayerMove(num)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                {num}
              </button>
            ))}
          </div>
        )}
        {playerChoice !== null && computerChoice !== null && !showAnimation && !gameOver && (
          <div className="mt-4 text-center bg-gray-200 p-4 rounded-lg animate-fade-in">
            <p className="text-xl">You chose: <span className="font-bold text-blue-600">{playerChoice}</span></p>
            <p className="text-xl">Computer chose: <span className="font-bold text-red-600">{computerChoice}</span></p>
          </div>
        )}
        {showAnimation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg text-center animate-bounce">
              <h3 className="text-3xl font-bold mb-4">First Innings Complete!</h3>
              <p className="text-xl">Switching sides...</p>
            </div>
          </div>
        )}
        {gameOver && (
          <div className="mt-6 text-center bg-green-100 p-6 rounded-lg animate-fade-in">
            <h3 className="text-3xl font-bold mb-4">Game Over!</h3>
            <p className="text-2xl mb-4">{winner === 'player' ? 'You win! 🎉' : 'Computer wins! 🤖'}</p>
            <button
              onClick={onRestartGame}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameplayComponent;

