/* ChatGPT Ref: ./src/components/KanjiAnswerButtons.js */
import React, { useState, useEffect } from 'react';
import '../css/KanjiAnswerButtons.css';

const KanjiAnswerButtons = ({ options, onClick, onRoundChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    setSelectedOption(null); // Reset selectedOption when the round changes
    setShuffledOptions(shuffleOptions(options));
  }, [options, onRoundChange]);

  const handleOptionClick = (option, index) => {
    setSelectedOption(option);
    setSelectedAnswerIndex(index);
    onClick(option);
  };

  return (
    <div className="kanji-answer-buttons">
      {shuffledOptions.map((option, index) => (
        <button
          key={index}
          className={`kanji-answer-button ${
            selectedAnswerIndex === index
              ? option === options[0] // Check if the selected option is the correct one
                ? 'correct'
                : 'incorrect' // If not, apply the incorrect class
              : ''
          }`}
          onClick={() => handleOptionClick(option, index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const shuffleOptions = (options) => {
  // Shuffle the array of options using Fisher-Yates (Knuth) Shuffle algorithm
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
};

export default KanjiAnswerButtons;
