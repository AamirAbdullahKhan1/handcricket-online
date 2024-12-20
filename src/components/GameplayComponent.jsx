import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function GameplayComponent({ playerBattingFirst, onRestartGame, onGameEnd }) {
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

      if (playerChoice === computerMove) {
        if (!firstInningsComplete) {
          endFirstInnings();
        } else {
          endGame(playerBatting ? 'computer' : 'player');
        }
      } else {
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
      }
    
      setTimeout(() => {
        setPlayerChoice(null);
      }, 1000);
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
    onGameEnd(winner);
  };

  const handlePlayerMove = (move) => {
    if (!showAnimation && !gameOver) {
      setPlayerChoice(move);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center p-4 sm:p-8 pt-20 sm:pt-24 bg-[#fefcdb] min-h-screen"
    >
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-md mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-600 text-center">
          {playerBatting ? "You're Batting 🏏" : "You're Bowling 🎳"}
        </h2>
        <div className="mb-4 sm:mb-6 w-full">
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex justify-between items-center bg-gray-100 p-3 sm:p-4 rounded-lg shadow"
          >
            <div className="text-center">
              <p className="text-sm sm:text-lg font-semibold">Player</p>
              <p className="text-xl sm:text-3xl font-bold text-blue-500">{playerScore}</p>
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-lg font-semibold">Computer</p>
              <p className="text-xl sm:text-3xl font-bold text-red-500">{computerScore}</p>
            </div>
          </motion.div>
          {target && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-3 sm:mt-4 text-center bg-yellow-100 p-2 rounded-lg"
            >
              <p className="text-sm sm:text-lg font-semibold">Target: <span className="text-lg sm:text-2xl text-yellow-600">{target}</span></p>
            </motion.div>
          )}
        </div>
        {!gameOver && !showAnimation && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-5 gap-2 mb-4 sm:mb-6"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <motion.button
                key={num}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePlayerMove(num)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-4 px-2 sm:px-4 rounded-lg transition duration-300 ease-in-out text-sm sm:text-xl"
              >
                {num}
              </motion.button>
            ))}
          </motion.div>
        )}
        <AnimatePresence>
          {playerChoice !== null && computerChoice !== null && !showAnimation && !gameOver && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-3 sm:mt-4 text-center bg-gray-200 p-3 sm:p-4 rounded-lg"
            >
              <p className="text-sm sm:text-xl">You chose: <span className="font-bold text-blue-600">{playerChoice}</span></p>
              <p className="text-sm sm:text-xl">Computer chose: <span className="font-bold text-red-600">{computerChoice}</span></p>
              {playerChoice === computerChoice && (
                <p className="text-sm sm:text-xl font-bold mt-2 text-red-600">
                  {playerBatting ? "You're out!" : "Computer is out!"}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        {showAnimation && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div 
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-4 sm:p-8 rounded-lg text-center"
            >
              <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">First Innings Complete!</h3>
              <p className="text-base sm:text-xl">Switching sides...</p>
            </motion.div>
          </motion.div>
        )}
        {gameOver && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 sm:mt-6 text-center bg-green-100 p-4 sm:p-6 rounded-lg"
          >
            <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">Game Over!</h3>
            <p className="text-lg sm:text-2xl mb-3 sm:mb-4">{winner === 'player' ? 'You win! 🎉' : 'Computer wins! 🤖'}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRestartGame}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-sm sm:text-base"
            >
              Play Again
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default GameplayComponent;

