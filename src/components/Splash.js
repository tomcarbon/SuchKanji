/* ChatGPT Ref: ./src/components/Splash.js */
import React from 'react';
import '../css/Splash.css';

 function resetLocalStorage() {
    localStorage.setItem('combinedData', [])
 }

const Splash = ({ onContinue }) => {
  const handleContinue = () => {
    onContinue();
  };


  return (
    <div className="splash-container">
      <div className="splash-content">
        <h1>Welcome to Kanji Learning App</h1>
        <button className="continue-button" onClick={handleContinue}>
        <button onClick={resetLocalStorage}>reset</button>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Splash;
