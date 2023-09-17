/* ChatGPT Ref: ./src/components/KanjiGame.js */
import React, { useState, useEffect } from 'react';
import '../css/KanjiGame.css';
import backgroundImages from './backgroundImages';
import foo from '../images/background009.jpg';
import Menu from './Menu';
import NewGameScreen from './NewGameScreen';
import HistoryScreen from './HistoryScreen';
import SettingsScreen from './SettingsScreen';
import AboutScreen from './AboutScreen';
import GameOver from './GameOver';
import kanjiData from './kanjiData'; // Add this import statement
import {playSound, stopSounds, stopSound} from '../common/Sounds';

const KanjiGame = ({ onContinue }) => {
  const [activeScreen, setActiveScreen] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [optionsCount, setOptionsCount] = useState(3); // Initialize with default number of options
  const [difficulty, setDifficulty] = useState(localStorage.getItem('difficulty') || 'easy');
  const [currentBackground, setCurrentBackground] = useState(backgroundImages[0]);
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'Zen Mode');


 function changeBackground (index)  {
//    setCurrentBackground(backgroundImages[index]);
    setCurrentBackground(backgroundImages[index])
//    alert(`changeBackground(${index} for '${backgroundImages[index]}'}). currentBackground = '${currentBackground}`)
  };


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const handleNewGameClick = () => {
  console.info("handleNewGameClick() in KanjiGame.js")
  if (mode == "Wow Mode") {
    console.info("wow mode")
      changeBackground(5);
      playSound("timerSong001.mp3")
  } else {
    console.info("zen mode")
      changeBackground(getRandomInt(0,29));
        playSound("zen1.mp3")
  }
  setScore(0);
  setQuestionCount(0);
  setGameOver(false);
  createQuestion(kanjiData);
};


  // Function to handle difficulty change
  const handleDifficultyChange = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        setOptionsCount(3);
        break;
      case 'medium':
        setOptionsCount(5);
        break;
      case 'difficult':
        setOptionsCount(20);
        break;
      default:
        setOptionsCount(3);
    }
  };

  useEffect(() => {
    createQuestion(kanjiData);
  }, [questionCount]);

  const handleScreenChange = (screen) => {
    console.info(`handlScreenChange: screen = ${screen}`)
    setActiveScreen(screen);
    setGameOver(false);
  };

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
  };

  function shuffleOptions(options) {
    // Shuffle the array of options using Fisher-Yates (Knuth) Shuffle algorithm
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }


  function randomIndex(dataLength) {
    const correctIndex = Math.floor(Math.random() * dataLength); // Random index for correct button

    let incorrectIndex1, incorrectIndex2;
    do {
      incorrectIndex1 = Math.floor(Math.random() * dataLength); // Random index for first incorrect button
    } while (incorrectIndex1 === correctIndex);

    do {
      incorrectIndex2 = Math.floor(Math.random() * dataLength); // Random index for second incorrect button
    } while (incorrectIndex2 === correctIndex || incorrectIndex2 === incorrectIndex1);

    return { correctIndex, incorrectIndex1, incorrectIndex2 };
  }

  const [options, setOptions] = useState([]);

  function createQuestion(data) {
    const dataLength = data.length;
    const { correctIndex, incorrectIndex1, incorrectIndex2 } = randomIndex(dataLength);
    const options = [
      data[correctIndex].translation,
      data[incorrectIndex1].translation,
      data[incorrectIndex2].translation,
    ];

    setCurrentIndex(correctIndex);
    setShowTranslation(false);
    setIsAnswered(false);
    setOptions(shuffleOptions(options));
  }

  return (
    <div className="kanjigame-container" style={{ backgroundImage: `url(${currentBackground})` }}>

      <Menu onScreenChange={handleScreenChange} setScore={setScore} />
      <div className="kanjigame-content">
        <div className="white-rectangle">
          {gameOver ? (
            <GameOver score={score} startNewGame={handleNewGameClick} />
          ) : (
            <>
              {activeScreen === 'newGame' && (
                <NewGameScreen
                  onContinue={onContinue}
                  onGameOver={() => setGameOver(true)}
                  score={score}
                  setScore={setScore}
                  resetGame={resetGame}
                  optionsCount={optionsCount} 
                  selectedDifficulty={difficulty} 
                  onNewGame={handleNewGameClick}
                />
              )}
              {activeScreen === 'history' && <HistoryScreen onContinue={onContinue} />}
              {activeScreen === 'settings' && <SettingsScreen onDifficultyChange={handleDifficultyChange} onContinue={onContinue} />}
              {activeScreen === 'about' && <AboutScreen onContinue={onContinue} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default KanjiGame;

/*

    </div><div className="kanjigame-container" style={{ backgroundImage: `url(${currentBackground})` }}>
    */