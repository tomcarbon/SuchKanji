/* ChatGPT Ref: ./src/components/KanjiDisplay.js */
import React from 'react';
import '../css/KanjiDisplay.css';
import kanjiData from './kanjiData';

const KanjiDisplay = ({ currentIndex, showTranslation }) => {
  const kanji = kanjiData[currentIndex].kanji;
  const translation = kanjiData[currentIndex].translation;

  return (
    <div className="kanji-display-container">
      <div className="kanji-display-kanji">{kanji}</div>
      {showTranslation && <div>{translation}</div>}
    </div>
  );
};

export default KanjiDisplay;
