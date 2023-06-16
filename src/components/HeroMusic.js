import React from 'react';
import '../App.css';
import './HeroMusic.css';
import onlyTime from '../assets/onlyTime.jpg';
import messenger from '../assets/messenger.jpeg';
import artwork from '../assets/artwork.png';

function HeroMusic() {
  return (
    <div className="hero-music-container">
      <div className="album-music-container">
        <div id="title">THIS IS THE WAY VOL. 1</div>
        <div id="title-sub">SMARTPUNK</div>
        {/* <div className="artwork"> */}
        <img src={artwork} alt="This is the Way Vol. 1" className="artwork" />
        {/* </div> */}
      </div>
      <div className="album-music-container">
        <div id="title">DON'T KILL THE MESSENGER</div>
        <div id="title-sub">1981 RECORDS</div>
        {/* <div className="artwork"> */}
        <img
          src={messenger}
          alt="Don't Kill the Messenger"
          className="artwork"
        />
        {/* </div> */}
      </div>
      <div className="album-music-container">
        <div id="title">ONLY TIME WILL TELL</div>
        <div id="title-sub">BROKEN SOUNDS</div>
        {/* <div className="artwork"> */}
        <img src={onlyTime} alt="Only Time Will Tell" className="artwork" />
        {/* </div> */}
      </div>
    </div>
  );
}

export default HeroMusic;
