/* ChatGPT Ref: ./src/App.js */
import React, { useState }  from 'react';
import { Splash, GameOver, KanjiGame } from './components';


import './App.css';
function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleContinue = () => {
    setShowSplash(false);
  };
//        localStorage.setItem('combinedData', [])

  return (
    <div className="App">
      {showSplash ? (
        <Splash onContinue={handleContinue} />
      ) : (
        <KanjiGame onContinue={handleContinue}  />
      )}
    </div>
  );
}

export default App;
