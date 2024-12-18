import React, { useState } from 'react';
import TossComponent from './TossComponent';
import GameplayComponent from './GameplayComponent';

function GamePage({ onRestartGame }) {
  const [tossComplete, setTossComplete] = useState(false);
  const [playerBattingFirst, setPlayerBattingFirst] = useState(false);

  const handleTossComplete = (playerWonToss, choseToBat) => {
    setTossComplete(true);
    setPlayerBattingFirst(playerWonToss ? choseToBat : !choseToBat);
  };

  const handleRestartGame = () => {
    setTossComplete(false);
    setPlayerBattingFirst(false);
    onRestartGame();
  };

  return (
    <div className="flex-grow">
      {!tossComplete ? (
        <TossComponent onTossComplete={handleTossComplete} />
      ) : (
        <GameplayComponent playerBattingFirst={playerBattingFirst} onRestartGame={handleRestartGame} />
      )}
    </div>
  );
}

export default GamePage;

