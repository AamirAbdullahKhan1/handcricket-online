import React, { useState } from 'react';
import TossComponent from './TossComponent';
import GameplayComponent from './GameplayComponent';

function GamePage({ onRestartGame, onGameEnd }) {
  const [tossComplete, setTossComplete] = useState(false);
  const [playerBattingFirst, setPlayerBattingFirst] = useState(false);

  const handleTossComplete = (playerWonToss, choseToBat) => {
    setTossComplete(true);
    setPlayerBattingFirst(playerWonToss ? choseToBat : !choseToBat);
  };

  return (
    <div className="flex-grow">
      {!tossComplete ? (
        <TossComponent onTossComplete={handleTossComplete} />
      ) : (
        <GameplayComponent 
          playerBattingFirst={playerBattingFirst} 
          onRestartGame={onRestartGame}
          onGameEnd={onGameEnd}
        />
      )}
    </div>
  );
}

export default GamePage;

