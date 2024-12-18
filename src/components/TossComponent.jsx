import React, { useState, useEffect } from 'react';

function TossComponent({ onTossComplete }) {
  const [tossChoice, setTossChoice] = useState(null);
  const [tossResult, setTossResult] = useState(null);
  const [playerWonToss, setPlayerWonToss] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleToss = () => {
    setLoading(true);
    setTimeout(() => {
      const result = Math.random() < 0.5 ? 'heads' : 'tails';
      setTossResult(result);
      setPlayerWonToss(result === tossChoice);
      setLoading(false);
    }, 2000);
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
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-[#fefcdb] text-white p-8">
      <h2 className="text-6xl text-green-500 uppercase font-bold mb-8">Toss Time!</h2>
      {!tossChoice && (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-2xl mb-4 text-black uppercase">Choose Heads or Tails:</p>
          <div className="flex space-x-4 justify-center">
            <button
              onClick={() => setTossChoice('heads')}
              className="bg-yellow-400 hover:bg-yellow-500 uppercase text-blue-900 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
            >
              Heads
            </button>
            <button
              onClick={() => setTossChoice('tails')}
              className="bg-yellow-400 hover:bg-yellow-500 uppercase text-blue-900 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
            >
              Tails
            </button>
          </div>
        </div>
      )}
      {tossChoice && !tossResult && (
        <button
          onClick={handleToss}
          className="bg-green-500 hover:bg-black text-white font-bold py-3 px-6 rounded-full mt-4 animate-bounce transition duration-300 ease-in-out transform hover:scale-105 uppercase "
        >
          Flip Coin
        </button>
      )}
      {loading && (
        <div className="mt-8 flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-yellow-400 border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-xl text-black font-medium">Flipping the coin...</p>
        </div>
      )}
      {tossResult && (
        <div className="mt-8 text-center flex flex-col items-center">
          <p className="text-2xl mb-4 text-black">The coin shows: <span className="font-bold text-black">{tossResult}</span></p>
          <p className="text-3xl font-bold mb-6 text-black">{playerWonToss ? "You won the toss!" : "Computer won the toss!"}</p>
          {playerWonToss && (
            <div className="space-y-4">
              <p className="text-xl text-black">What would you like to do?</p>
              <div className="flex space-x-4 justify-center">
                <button
                  onClick={() => handleChoice('bat')}
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 "
                >
                  Bat
                </button>
                <button
                  onClick={() => handleChoice('bowl')}
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 "
                >
                  Bowl
                </button>
              </div>
            </div>
          )}
          {!playerWonToss && (
            <p className="text-xl animate-pulse text-black">Computer is making its choice...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default TossComponent;

