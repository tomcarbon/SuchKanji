/* ChatGPT Ref: ./src/components/KanjiDisplay.js */
import React from 'react';
import '../css/KanjiDisplay.css';
import kanjiData from './kanjiData';

const KanjiDisplay = ({ wasCorrect, currentIndex, lastIndex, showTranslation }) => {
  console.log(`KanjiDisplay.js: wasCorrect = ${wasCorrect}, currentIndex = ${currentIndex}, lastIndex = ${lastIndex}, showLastTranslation = ${showTranslation}`)
  const kanji = kanjiData[currentIndex].kanji;
  const translation = kanjiData[lastIndex].translation;

  return (
    <div className="kanji-display-container">
      <div className="kanji-display-kanji">{kanji}</div>
      {showTranslation && 
        <div className="kanji-display-translation" style={wasCorrect ? {color: "darkgreen"} : {color: "darkred"}}>{translation}
        </div>
      }
    </div>
  );
};

export default KanjiDisplay;
