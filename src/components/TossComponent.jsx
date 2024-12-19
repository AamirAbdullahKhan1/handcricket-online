import React, { useState, useEffect } from 'react';

function TossComponent({ onTossComplete }) {
  const [tossChoice, setTossChoice] = useState(null);
  const [tossResult, setTossResult] = useState(null);
  const [playerWonToss, setPlayerWonToss] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipSound = new Audio('/flip-sound.mp3');

  const handleToss = () => {
    setIsFlipping(true);
    flipSound.play();
    setTimeout(() => {
      const result = Math.random() < 0.5 ? 'heads' : 'tails';
      setTossResult(result);
      setPlayerWonToss(result === tossChoice);
      setIsFlipping(false);
    }, 3000);
  };

  useEffect(() => {
    if (tossResult !== null && !playerWonToss) {
      setTimeout(() => {
        const computerChoice = Math.floor(Math.random() * 10) + 1;
        const computerBats = computerChoice % 2 === 1;
        onTossComplete(false, computerBats);
      }, 2000);
    }
  }, [tossResult, playerWonToss, onTossComplete]);

  const handleChoice = (choice) => {
    onTossComplete(true, choice === 'bat');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-[#fefcdb] p-8">
      <h2 className="text-6xl font-bold mb-8 text-gray-800 uppercase">Toss Time!</h2>
      {!tossChoice && (
        <div className="space-y-4 text-center">
          <p className="text-2xl font-medium mb-6 text-gray-700">Choose Heads or Tails:</p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => setTossChoice('heads')}
              className="bg-green-500 hover:bg-black uppercase font-poppins text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Heads
            </button>
            <button
              onClick={() => setTossChoice('tails')}
              className="bg-green-500 hover:bg-black uppercase font-poppins text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Tails
            </button>
          </div>
        </div>
      )}
      {tossChoice && !tossResult && (
        <div className="mt-8 text-center">
          <button
            onClick={handleToss}
            disabled={isFlipping}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
          >
            Flip Coin
          </button>
          {isFlipping && (
            <div className="mt-8">
              <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-xl">Flipping the coin...</p>
            </div>
          )}
        </div>
      )}
      {tossResult && (
        <div className="mt-8 text-center">
          <p className="text-2xl mb-4 text-gray-800">The coin shows: <span className="font-bold">{tossResult}</span></p>
          <p className="text-3xl font-bold mb-6 text-gray-800">{playerWonToss ? "You won the toss!" : "Computer won the toss!"}</p>
          {playerWonToss && (
            <div className="space-y-4">
              <p className="text-xl text-gray-700">What would you like to do?</p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => handleChoice('bat')}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                >
                  Bat
                </button>
                <button
                  onClick={() => handleChoice('bowl')}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                >
                  Bowl
                </button>
              </div>
            </div>
          )}
          {!playerWonToss && (
            <p className="text-xl animate-pulse text-gray-700">Computer is making its choice...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default TossComponent;

