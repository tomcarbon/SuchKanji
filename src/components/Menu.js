/* ChatGPT Ref: components/Menu.js */
import React, { useState} from 'react';
import logo from '../images/logo.png';
import soundIconON from '../images/soundON.png';
import soundIconOFF from '../images/soundOFF.png';
import {playSound, stopSounds, stopSound} from '../common/Sounds';
import '../css/Menu.css';

const Menu = ({ onScreenChange, setScore, isMuted, setIsMuted, firstLetterOfBackground  }) => {
  const [rainbowMode, setRainbowMode] = useState(false);
  const [logoMove, setLogoMove] = useState(false);

  const shouldShowLogo = firstLetterOfBackground.toLowerCase() == 'd';

  const handleIsMutedButtonClick = () => {
    stopSounds();
    setIsMuted(!isMuted);
    localStorage.setItem('isMuted', !isMuted ? '1' : '0');
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
      {shouldShowLogo && (
        <div className={`logo-container ${logoMove ? 'logo-move' : ''}`} onAnimationEnd={() => setLogoMove(false)}>
          <img src={logo} alt="Logo" className="logo" />
        </div>
      )}
      <h2 className={'rainbow-title'}>Such Kanji!</h2>
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

/*

      <h2 className={rainbowMode ? 'rainbow-title' : ''}>Such Kanji!</h2>
*/