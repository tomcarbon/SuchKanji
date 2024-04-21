import React from 'react';
import '../css/AboutScreen.css';
import kanjiData from './kanjiData'; // Ensure this path is correct

const AboutScreen = () => {
  return (
    <div className="about-screen">
      <h1>About Kanji Learning App</h1>
      <hr />
      <h2>This game is loaded with top 100 common Kanji verbs.</h2>
      <h3>There are three different difficulty levels:</h3>
      <p>Easy: 3 answers to choose from.</p>
      <p>Medium: 5 answers to choose from.</p>
      <p>Difficult: 20 answers to choose from.</p>
      <h3>There are two modes - Zen Mode and Wow Mode:</h3>
      <p><strong>Zen Mode</strong>: there is no timer, no intense music, take your time, and relax...</p>
      <p><strong>Wow Mode</strong>: (no description given) Can you get 10/10 on Wow Mode Difficult?</p>
      <h3>Here are the 100 Common Japanese Verbs that are used:</h3>
      <div className="kanji-list">
        {kanjiData.kanjiData.map((item, index) => ( // Adjusted to kanjiData.kanjiData
          <div key={index} className="kanji-item">
            <div className="kanji">{item.kanji}</div>
            <div className="romaji">{item.romaji}</div>
            <div className="translation">{item.translation}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutScreen;