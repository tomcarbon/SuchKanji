/* ChatGPT Ref: ./src/components/SettingsScreen.js */
import React, { useState } from 'react';
import '../css/SettingsScreen.css';

const SettingsScreen = ({ onDifficultyChange, onContinue }) => {
    const [difficulty, setDifficulty] = useState(localStorage.getItem('difficulty') || 'easy');
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'Zen Mode');

    const [freePacks, setFreePacks] = useState({
        verbPack1: false,
        verbPack2: false,
        nounPack1: false,
        nounPack2: false,
        assorted1: false,
        assorted2: false,
        jlptN5: false
    });
    
    const [memberPacks, setMemberPacks] = useState({
        verbPack3:      false,
        verbPack4:      false,
        verbPack5:      false,
        verbPack6:      false,
        jlptN4:         false,
        jlptN3:         false,
        jlptN2:         false,
        nounPack3:      false,
        nounPack4:      false
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
        <div>
          <div className="members-only">
            <input
              type="radio"
              id="arcadeMode"
              name="mode"
              value="Arcade Mode"
              checked={mode === 'Arcade Mode'}
              onChange={handleModeChange}
            />
          <label htmlFor="wowMode">Arcade Mode</label>
          </div>
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

           <div className='settings-screen-kanjiset'>
                <h3>Selected Kanji Data Sets</h3>
                
                <div className="kanji-group">
                    <h4>Free</h4>
                    <button onClick={() => toggleAll(setFreePacks, freePacks, Object.values(freePacks).every(val => val))}>Select All / Clear</button>
                    {Object.entries(freePacks).map(([key, value]) => (
                        <div key={key}>
                            <input type="checkbox" id={key} checked={value} onChange={() => setFreePacks({...freePacks, [key]: !value})} />
                            <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')} (50)</label>
                        </div>
                    ))}
                </div>
                
                <div className="kanji-group">
                  <div className="members-only">
                    <h4>SKC Such Kanji Club - become a member for 100 dogecoin per year!</h4>
                    <button onClick={() => toggleAll(setMemberPacks, memberPacks, Object.values(memberPacks).every(val => val))}>Select All / Clear</button>
                    {Object.entries(memberPacks).map(([key, value]) => (
                        <div key={key}>
                            <input type="checkbox" id={key} checked={value} onChange={() => setMemberPacks({...memberPacks, [key]: !value})} />
                            <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')} (50)</label>
                        </div>
                    ))}
                  </div>
                </div>

            </div>
        </div>
    );
};

export default SettingsScreen;
