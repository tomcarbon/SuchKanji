/* ChatGPT Ref: components/NewGameScreen.js */
import React, { useState, useEffect } from 'react';
import KanjiDisplay from './KanjiDisplay';
import KanjiAnswerButtons from './KanjiAnswerButtons';
import KanjiControls from './KanjiControls';
import kanjiData from './kanjiData';
import {playSound, stopSounds, stopSound} from '../common/Sounds';
import CountdownTimer from './CountdownTimer';


const ZEN_TIMEOUT_TIME = 1250
const WOW_TIMEOUT_TIME = 250

const NewGameScreen = ({ selectedDifficulty, onContinue, onGameOver, score, setScore, resetGame, optionsCount, onNewGame, isMuted }) => {

  const [questionCount, setQuestionCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameLevel, setCurrentGameLevel] = useState(1);
  const [options, setOptions] = useState([]);

  const mode = localStorage.getItem('mode') || "Zen Mode"

  useEffect(() => {
    createQuestion(kanjiData);
    console.info("NGS.js: useEffect -> createQuestion")
  }, [questionCount]);

function createQuestion(data) {
  const dataLength = data.length;
  const correctIndex = Math.floor(Math.random() * dataLength);
  const incorrectIndices = [...Array(dataLength).keys()].filter((index) => index !== correctIndex);

  // Calculate optionsCount based on selectedDifficulty
  let optionsCount;
  if (selectedDifficulty === 'easy') {
    optionsCount = 3;
  } else if (selectedDifficulty === 'medium') {
    optionsCount = 5;
  } else {
    optionsCount = 20;
  }

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  // Shuffle incorrect options
  const shuffledIncorrectIndices = shuffleOptions(incorrectIndices).slice(0, optionsCount - 1);
  let options;
  if (getRandomInt(0,1) == 0) {
    options = shuffleOptions([
      data[correctIndex].romaji,
      ...shuffledIncorrectIndices.map((index) => data[index].romaji),
    ]);
  } else {
    options = shuffleOptions([
      data[correctIndex].translation,
      ...shuffledIncorrectIndices.map((index) => data[index].translation),
    ]);
}

  setCurrentIndex(correctIndex);
  setOptions(options);
}


  const handleNewGameClick = () => {
    stopSounds();
    onNewGame(); // Call the passed function to trigger new game setup
  };

  const handleAnswerClick = (selectedOption) => {
    let tempscore
    if (selectedOption === kanjiData[currentIndex].translation || selectedOption === kanjiData[currentIndex].romaji) {
      setWasCorrect(true);
      setScore(score + 1);
      tempscore = score + 1

      if (mode == "Wow Mode") {
        if (score < 9) {
          playSound("goodBeep.mp3", isMuted)
        }
        else {
          playSound("goodWin1.mp3", isMuted) // got all 10 right
        }
      } else if (mode == "Zen Mode") {
        const stg = `zenGood0${score}.mp3`; // last one is special if all 10 are right
        playSound(stg, isMuted)
      }
    } else {
      setWasCorrect(false);
      tempscore = score
      playSound("frogCroak.mp3", isMuted)

    }

    setLastIndex(currentIndex)
    setShowTranslation(true);
    {   // show the correct or incorrect answer for 250ms
    setTimeout(() => {
          setShowTranslation(false);
      setQuestionCount(questionCount + 1);

      if (questionCount === 9) {
          const gameHistory = JSON.parse(localStorage.getItem('gameHistory')) || [];
          console.log(tempscore)
          const newGame = {
            "score": tempscore,
            "gameLevel": gameLevel,
            timestamp: new Date().toLocaleString(),
  //          difficulty: optionsCount == 3 ? "easy" : optionsCount == 5 ? "medium": "difficult"
            difficulty: selectedDifficulty
          };
          console.log(newGame)
          gameHistory.push(newGame);
          localStorage.setItem('gameHistory', JSON.stringify(gameHistory));

  //        setGameOver(true);
          onGameOver();
          setCurrentGameLevel(gameLevel + 1)
      } 
    }, mode == 'Zen Mode' ? ZEN_TIMEOUT_TIME : WOW_TIMEOUT_TIME);
    }
  };

  function shuffleOptions(options) {
    // Shuffle the array of options using Fisher-Yates (Knuth) Shuffle algorithm
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }

  return (
    <div>
       {mode === "Wow Mode" && <CountdownTimer onTimeOut={onGameOver} />}

      <KanjiDisplay wasCorrect={wasCorrect} currentIndex={currentIndex} lastIndex={lastIndex} showTranslation={showTranslation} />
      <KanjiAnswerButtons options={options} onClick={handleAnswerClick} />
      <KanjiControls />
      {gameOver && (
        <button className="menu-button" onClick={handleNewGameClick}>
          New Game
        </button>
      )}
    </div>
  );
};

export default NewGameScreen;
