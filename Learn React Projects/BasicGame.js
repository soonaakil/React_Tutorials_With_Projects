import React, { useState, useEffect } from 'react';

const Game = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [enemyPosition, setEnemyPosition] = useState({ x: 0, y: 0 });
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEnemyPosition({ x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 100) });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handlePlayerMove = (direction) => {
    switch (direction) {
      case 'up':
        setPlayerPosition({ x: playerPosition.x, y: playerPosition.y - 10 });
        break;
      case 'down':
        setPlayerPosition({ x: playerPosition.x, y: playerPosition.y + 10 });
        break;
      case 'left':
        setPlayerPosition({ x: playerPosition.x - 10, y: playerPosition.y });
        break;
      case 'right':
        setPlayerPosition({ x: playerPosition.x + 10, y: playerPosition.y });
        break;
      default:
        break;
    }
  };

  const handleCollision = () => {
    if (Math.abs(playerPosition.x - enemyPosition.x) < 10 && Math.abs(playerPosition.y - enemyPosition.y) < 10) {
      setLives(lives - 1);
      if (lives === 1) {
        setGameOver(true);
      }
    }
  };

  const handleScore = () => {
    if (Math.abs(playerPosition.x - enemyPosition.x) < 10 && Math.abs(playerPosition.y - enemyPosition.y) < 10) {
      setScore(score + 1);
    }
  };

  useEffect(() => {
    handleCollision();
    handleScore();
  }, [playerPosition, enemyPosition]);

  if (gameOver) {
    return (
      <div>
        <h1>Game Over!</h1>
        <p>Final Score: {score}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Score: {score}</h1>
      <h1>Lives: {lives}</h1>
      <div>
        <button onClick={() => handlePlayerMove('up')}>Up</button>
        <button onClick={() => handlePlayerMove('down')}>Down</button>
        <button onClick={() => handlePlayerMove('left')}>Left</button>
        <button onClick={() => handlePlayerMove('right')}>Right</button>
      </div>
      <div>
        <p>Player Position: ({playerPosition.x}, {playerPosition.y})</p>
        <p>Enemy Position: ({enemyPosition.x}, {enemyPosition.y})</p>
      </div>
    </div>
  );
};

export default Game;
