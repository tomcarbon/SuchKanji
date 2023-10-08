/* ChatGPT Ref: ./src/components/HistoryScreen.js */
import React from 'react';
import '../css/HistoryScreen.css'; // Import the CSS file for HistoryScreen

const HistoryScreen = () => {
  // Retrieve the game history from local storage
  const gameHistory = JSON.parse(localStorage.getItem('gameHistory')) || [];

  const handleResetHistory = () => {
    localStorage.removeItem('gameHistory'); // Remove the game history from local storage
    window.location.reload(); // Reload the page to reflect the changes
  };

  return (
    <div>
      <h1>HISTORY</h1>

      <ul className="game-history-list">
        {gameHistory.map((game, index) => (
          <li className="game-history-list-item" key={index}>
            Game {index + 1}: {game.score}/10 (Date: {game.timestamp} Difficulty: {game.difficulty})
          <hr/>
          </li>
        ))}
      </ul>
      {gameHistory.length > 0 && (
        <button className="game-history-remove-button" onClick={handleResetHistory}>Reset History</button>
      )}
    </div>
  );
};

export default HistoryScreen;
