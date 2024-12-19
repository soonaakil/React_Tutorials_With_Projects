import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index] !== '') return;

    const newBoard = [...board];
    newBoard[index] = player;

    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');

    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
  };

  const handleReset = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setPlayer('X');
    setWinner(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {board.map((cell, index) => (
          <div
            key={index}
            className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex justify-center items-center cursor-pointer"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      {winner && (
        <p className="text-lg font-medium mb-4">
          Player {winner} wins!
        </p>
      )}
      <button
        className="block w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
        onClick={handleReset}
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
