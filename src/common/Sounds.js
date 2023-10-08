/* ChatGPT Ref: common/Sounds.js */
import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import goodBeep from '../audio/goodBeep.mp3';
import goodWin1 from '../audio/goodWin1.mp3';
import blastAll from '../audio/blastAll.mp3';
import frogCroak from '../audio/frogCroak.mp3';
import timerSong001 from '../audio/timerSong001.mp3';
import zen1 from '../audio/zen1.mp3';
import zenGood00 from '../audio/zenGood00.mp3';
import zenGood01 from '../audio/zenGood01.mp3';
import zenGood02 from '../audio/zenGood02.mp3';
import zenGood03 from '../audio/zenGood03.mp3';
import zenGood04 from '../audio/zenGood04.mp3';
import zenGood05 from '../audio/zenGood05.mp3';
import zenGood06 from '../audio/zenGood06.mp3';
import zenGood07 from '../audio/zenGood07.mp3';
import zenGood08 from '../audio/zenGood08.mp3';
import zenGood09 from '../audio/zenGood09.mp3';


const sound1 = new Howl({
    src: [goodBeep],
    preload: true
});

const sound2 = new Howl({
    src: [blastAll],
    preload: true
});

const sound3 = new Howl({
    src: [frogCroak],
    preload: true
});

const sound4 = new Howl({
    src: [timerSong001],
    preload: true
});

const sound5 = new Howl({
    src: [zen1],
    preload: true
});

const soundA0 = new Howl({
    src: [zenGood00],
    preload: true
});

const soundA1 = new Howl({
    src: [zenGood01],
    preload: true
});

const soundA2 = new Howl({
    src: [zenGood02],
    preload: true
});

const soundA3 = new Howl({
    src: [zenGood03],
    preload: true
});

const soundA4 = new Howl({
    src: [zenGood04],
    preload: true
});

const soundA5 = new Howl({
    src: [zenGood05],
    preload: true
});

const soundA6 = new Howl({
    src: [zenGood06],
    preload: true
});

const soundA7 = new Howl({
    src: [zenGood07],
    preload: true
});

const soundA8 = new Howl({
    src: [zenGood08],
    preload: true
});

const soundA9 = new Howl({
//    src: [zenGood09],
    src: [zen1],
    preload: true
});

const soundGW1 = new Howl({
    src: [goodWin1],
    preload: true
});

export function playSound(frog, isMuted) {
 if (isMuted) {
    // do nothing
 } else {
  switch (frog) {
    case  'goodBeep.mp3':
        sound1.play();
      break;
    case 'blastAll.mp3': 
        sound2.play();
      break;
    case 'frogCroak.mp3':
        sound3.play();
      break;
    case 'timerSong001.mp3':
        sound4.play();
      break;
    case 'zen1.mp3': 
      sound5.play();
      break;
    case 'zenGood00.mp3': 
      soundA0.play();
      break;
    case 'zenGood01.mp3': 
      soundA1.play();
      break;
    case 'zenGood02.mp3': 
      soundA2.play();
      break;
    case 'zenGood03.mp3': 
      soundA3.play();
      break;
    case 'zenGood04.mp3': 
      soundA4.play();
      break;
    case 'zenGood05.mp3': 
      soundA5.play();
      break;
    case 'zenGood06.mp3': 
      soundA6.play();
      break;
    case 'zenGood07.mp3': 
      soundA7.play();
      break;
    case 'zenGood08.mp3': 
      soundA8.play();
      break;
    case 'zenGood09.mp3': 
      soundA9.play();
      break;
    case 'goodWin1.mp3': 
      soundGW1.play();
      break;
    default: 
      console.log(`playSound error with '${frog}`)
      break;
  }
 }
}

export function stopSounds() {
    sound1.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    soundA0.stop();
    soundA1.stop();
    soundA2.stop();
    soundA3.stop();
    soundA4.stop();
    soundA5.stop();
    soundA6.stop();
    soundA7.stop();
    soundA8.stop();
    soundA9.stop();
    soundGW1.stop();
}

export function stopSound(frog) {
  switch (frog) {
    case  'goodBeep.mp3':
        sound1.stop();
      break;
    case 'blastAll.mp3': 
        sound2.stop();
      break;
    case 'frogCroak.mp3':
        sound3.stop();
      break;
    case 'timerSong001.mp3':
        sound4.stop();
      break;
    case 'zen1.mp3': 
      sound5.stop();
      break;
    case 'zenGood00.mp3': 
      soundA0.stop();
      break;
    case 'zenGood01.mp3': 
      soundA1.stop();
      break;
    case 'zenGood02.mp3': 
      soundA2.stop();
      break;
    case 'zenGood03.mp3': 
      soundA3.stop();
      break;
    case 'zenGood04.mp3': 
      soundA4.stop();
      break;
    case 'zenGood05.mp3': 
      soundA5.stop();
      break;
    case 'zenGood06.mp3': 
      soundA6.stop();
      break;
    case 'zenGood07.mp3': 
      soundA7.stop();
      break;
    case 'zenGood08.mp3': 
      soundA8.stop();
      break;
    case 'zenGood09.mp3': 
      soundA9.stop();
      break;
    case 'goodWin1.mp3': 
      soundGW1.stop();
      break;
    default: 
      console.log(`playSound error with '${frog}`)
      break;
  }
}


export default {playSound, stopSounds, stopSound}
