// ChatGPT Ref: ./src/components/countdownTimer.js
import React, { useState, useEffect } from 'react';
import '../css/CountdownTimer.css';

const CountdownTimer = ({ initialTime = 20, onTimeOut }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeOut();  // Call the parent's game over handler.
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup timer on component unmount.
  }, [timeLeft, onTimeOut]);

  return (
    <div className="countdown-container"> {timeLeft.toString().padStart(2, '0')} </div>
  );
};

export default CountdownTimer;
