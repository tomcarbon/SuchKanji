/* ChatGPT Ref: ./src/components/SettingsScreen.js */
import React, { useState } from 'react';
import '../css/SettingsScreen.css';

const SettingsScreen = ({ onDifficultyChange, onContinue }) => {
    const [difficulty, setDifficulty] = useState(localStorage.getItem('difficulty') || 'easy');
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'Zen Mode');

  const handleDifficultyChange = (event) => {
    const selectedDifficulty = event.target.value;
    setDifficulty(selectedDifficulty);
    localStorage.setItem('difficulty', selectedDifficulty);
    onDifficultyChange(selectedDifficulty);
    window.location.reload(); // Reload the page to reflect the changes
  };

  const handleModeChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
    localStorage.setItem('mode', selectedMode);
    // Optional: You can also add onModeChange callback to handle the mode change if required
    window.location.reload();
  };

  return (
    <div>
      <h1>SETTINGS SCREEN</h1>
     <div className='settings-screen-mode'>
        <h3>Mode</h3>
        <hr></hr>
        <div>
          <input
            type="radio"
            id="zenMode"
            name="mode"
            value="Zen Mode"
            checked={mode === 'Zen Mode'}
            onChange={handleModeChange}
          />
          <label htmlFor="zenMode">Zen Mode</label>
        </div>
        <div>
          <input
            type="radio"
            id="wowMode"
            name="mode"
            value="Wow Mode"
            checked={mode === 'Wow Mode'}
            onChange={handleModeChange}
          />
          <label htmlFor="wowMode">Wow Mode</label>
        </div>
      </div>
       <div className='settings-screen-difficulty'>
        <h3>Difficulty</h3>
        <hr></hr>
        <div>
          <input
            type="radio"
            id="easy"
            name="difficulty"
            value="easy"
            checked={difficulty === 'easy'}
            onChange={handleDifficultyChange}
          />
          <label htmlFor="easy">Easy</label>
        </div>
        <div>
          <input
            type="radio"
            id="medium"
            name="difficulty"
            value="medium"
            checked={difficulty === 'medium'}
            onChange={handleDifficultyChange}
          />
          <label htmlFor="medium">Medium</label>
        </div>
        <div>
          <input
            type="radio"
            id="difficult"
            name="difficulty"
            value="difficult"
            checked={difficulty === 'difficult'}
            onChange={handleDifficultyChange}
          />
          <label htmlFor="difficult">Difficult</label>
        </div>
      </div>

       <div className='settings-screen-kanjiset'>
        <h3>Selected Kanji Data Sets</h3>

        <h4>Free</h4>

        <p>Verb Pack 1 (50)</p>
        <p>Verb Pack 2 (50)</p>
        <p>JLPT N5</p>
        <p>Assorted 100 (100)</p>

        <h4>SKC Such Kanji Club</h4>
        <p>JLPT N4</p>
        <p>JLPT N3</p>
        <p>JLPT N2</p>
        <p>Verb Pack 3 (50)</p>
        <p>Verb Pack 4 (50)</p>
        <p>Verb Pack 5 (50)</p>
        <p>Verb Pack 6 (50)</p>

      </div>
    </div>
  );
};

export default SettingsScreen;