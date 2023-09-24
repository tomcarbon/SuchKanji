/* ChatGPT Ref: ./src/components/Menu.js */
import React, { useState } from 'react';
import logo from '../images/logo.png';
import soundIconON from '../images/soundON.png';
import soundIconOFF from '../images/soundOFF.png';
import '../css/Menu.css';

const Menu = ({ onScreenChange, setScore }) => {
  const [rainbowMode, setRainbowMode] = useState(false);
  const [logoMove, setLogoMove] = useState(false);
  const [isItMuted, setIsItMuted] = useState(false);
  var isMuted = localStorage.getItem('isMuted') || "false"

  const handleIsMutedButtonClick = () => {
    const newVal = isItMuted ? false : true
    localStorage.setItem('isMuted', newVal);
    setIsItMuted(newVal)
  };

  const handleAboutButtonClick = () => {
    setRainbowMode(!rainbowMode);
    onScreenChange('about');
  };

  const handleSettingsButtonClick = () => {
    setLogoMove(!logoMove);
    onScreenChange('settings');
  };

  const handleNewGameButtonClick = () => {
    console.info(`Menu.js: handleNewGameButtonClick()`)
//    setScore(0)
    onScreenChange('newGame');
  };

  const handleHistoryButtonClick = () => {
    onScreenChange('history');
  };

  return (
    <div className="menu-container">
      <div className={`logo-container ${logoMove ? 'logo-move' : ''}`} onAnimationEnd={() => setLogoMove(false)} >
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h2 className={rainbowMode ? 'rainbow-title' : ''}>Such Kanji!</h2>
      <button className="menu-button" onClick={handleNewGameButtonClick}>
        Play
      </button>
      <button className="menu-button" onClick={handleSettingsButtonClick}>
        Settings
      </button>
      <button className="menu-button" onClick={handleHistoryButtonClick}>
        History
      </button>
      <button className="menu-button" onClick={handleAboutButtonClick}>
        About
      </button>
      <img src={isMuted ? soundIconOFF  : soundIconON} alt="soundIcon" className="soundicon" onClick={handleIsMutedButtonClick} draggable={false} />
    </div>
  );
};

export default Menu;
