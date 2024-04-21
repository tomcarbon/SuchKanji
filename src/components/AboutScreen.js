/* ChatGPT Ref: ./src/components/AboutScreen.js */
import React from 'react';
import '../css/AboutScreen.css';

const AboutScreen = () => {
  return (
    <div className="about-screen">
      <h1>About Kanji Learning App</h1>
      <hr />
      <h4> This game is loaded with top 100 common Kanji verbs.</h4>
      <p>See below for the full list</p>
      <h5>There are three different difficulty levels:</h5>
      <p>Easy : 3 answers to choose from.</p>
      <p>Medium : 5 answers to choose from.</p>
      <p>Difficult : 20 answers to choose from.</p>

      <h5>There are two modes - Zen Mode and Wow Mode:</h5>
      <p>Zen Mode, there is no timer, no intense music, take your time, and relax...</p>
      <p>Wow Mode: (no description given) Can you get 10/10 on Wow Mode Difficult?</p>
      
      

    </div>
  );
};

export default AboutScreen;
