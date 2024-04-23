/* ChatGPT Ref: ./src/components/SettingsScreen.js */
import React, { useState } from 'react';
import '../css/SettingsScreen.css';
import dataPacks from './kanjiData';



const SettingsScreen = ({ onDifficultyChange, onContinue }) => {
    const [difficulty, setDifficulty] = useState(localStorage.getItem('difficulty') || 'easy');
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'Zen Mode');
    const [selectedPacks, setSelectedPacks] = useState({});

    console.log(dataPacks)
    const handlePackChange = (event) => {
      setSelectedPacks({
          ...selectedPacks,
          [event.target.name]: event.target.checked
      });
    };

    const handleSave = () => {
        const combinedData = [];
        for (const pack in selectedPacks) {
            if (selectedPacks[pack]) {
                combinedData.push(...dataPacks.dataPacks[pack]);
            }
        }
        localStorage.setItem('combinedData', JSON.stringify(combinedData));
    };

    const [freePacks, setFreePacks] = useState({
        verbPack1: false,
        verbPack2: false
    });
    
  const toggleAll = (setPackState, currentPackState, allSelected) => {
      const newState = {};
      for (const pack in currentPackState) newState[pack] = !allSelected;
      setPackState(newState);
  };

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

  const isMember = true;

  return (
    <div className='settings-screen'>
      <h1>SETTINGS SCREEN</h1>
      <div> 

     <div className='settings-screen-mode'>
        <h3>Mode</h3>
        <div className='settings-screen-f11'>try F11</div>
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
      </div>

        </div>
    );
};

export default SettingsScreen;
