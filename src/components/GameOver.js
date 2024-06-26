/* ChatGPT Ref: components/GameOver.js */

import React, {useState} from 'react';
import '../css/GameOver.css';
import {stopSound} from '../common/Sounds';

const GameOver = ({ score, startNewGame }) => {
const [mode, setMode] = useState(localStorage.getItem('mode') || 'Zen Mode');

  const feedbackMessages_Wow = [
    "蛙",
    "猿",
    "イルカ",
    "柴犬!",
  ];
  const feedbackMessages_Zen = [
    "たぬき",
    "鯉",
    "鷹",
    "龍"
  ];

  let feedbackMessages = mode == 'Zen Mode' ?  feedbackMessages_Zen : feedbackMessages_Wow;

  let feedbackMessage = feedbackMessages[0];

  if (score >= 3) {
    feedbackMessage = feedbackMessages[1];
  }
  if (score >= 6) {
    feedbackMessage = feedbackMessages[2];
  }
  if (score > 9) {
    feedbackMessage = feedbackMessages[3];
  }

  
  stopSound("timerSong001.mp3")

  return (
    <div className="game-over-container">
      <h1>Game Over</h1>
      <h2 className="score-message">
        Score: {score}/10 
      </h2>
      <br/>
      <h1>
        <span className="score-feedback">{feedbackMessage}</span>
      </h1>
      <button className="new-game-button" onClick={startNewGame}>
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
