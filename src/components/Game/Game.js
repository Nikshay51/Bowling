import React from 'react';
import Scorecard from '../Scorecard';
import Controls from '../Controls';
import './Game.css';

const Game = ({ game: { frames, cumulativeScores, gameOver, pins, rolls } }) => {
  const totalScore = cumulativeScores.slice(-1)[0];

  return (
    <div className='Game'>
      <Scorecard
        frames={frames}
        cumulativeScores={cumulativeScores}
        totalScore={totalScore}
      />
      <Controls
        gameOver={gameOver}
        lastRoll={pins.slice(-1)[0]}
        rolls={rolls}
      />
      {gameOver && (
        <div className='Game-over-text'>
          <h1>Game Over</h1>
          <h2>You Scored: {totalScore}</h2>
        </div>
      )}
    </div>
  );
};

export default Game;

/*
This code defines a React functional component called "Game". It imports the "Scorecard" and "Controls" components from their respective files, as well as a CSS file for styling. The component takes in an object "game" as a prop and extracts the necessary properties such as frames, cumulativeScores, gameOver, pins, and rolls from it using destructuring assignment.

The component then renders a Scorecard component with the frames, cumulativeScores, and totalScore props passed down. It also renders a Controls component with the gameOver, lastRoll, and rolls props passed down. Finally, if the game is over, it renders a div with a "Game Over" message and the final score.

The component is exported as the default export, so it can be imported and used in other parts of the application.
 */








