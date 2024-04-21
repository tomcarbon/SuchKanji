/* ChatGPT Ref: components/KanjiDisplay.js */
import React from 'react';
import '../css/KanjiDisplay.css';
import kanjiData from './kanjiData';

const KanjiDisplay = ({ wasCorrect, currentIndex, lastIndex, showTranslation }) => {
  /* OLD for multi, before simplification 
  const initialData = localStorage.getItem('combinedData');
  const gameData = initialData ? JSON.parse(initialData) : kanjiData.kanjiData; // Fall back to default data
  */
  const gameData = kanjiData.kanjiData; // Fall back to default data - new simplified see KanjiDisplay.js for original
//  console.log(`KanjiDisplay.js: wasCorrect = ${wasCorrect}, currentIndex = ${currentIndex}, lastIndex = ${lastIndex}, showLastTranslation = ${showTranslation}`)
  const kanji = gameData[currentIndex].kanji;
  const translation = gameData[lastIndex].translation;
  const romaji = gameData[lastIndex].romaji;

  return (
    <div className="kanji-display-container">
      <div className="kanji-display-kanji">{kanji}</div>
      {showTranslation && 
        <div className="kanji-display-translation" style={wasCorrect ? {color: "darkgreen"} : {color: "darkred"}}>{translation} / {romaji}
        </div>
      }
    </div>
  );
};

export default KanjiDisplay;
