import React from 'react';
import '../App.css';
import './HeroMusic.css';
import { Button } from './Button';

function HeroMusic() {
  return (
    <div className="hero-music-container">
      <h1>COMING</h1>
      <h2>SOON</h2>
      <div className="album-container">
        <div className="artwork-container"></div>
        <div className="hero-btns">
          {/* <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={console.log('hey')}
          >
            PLAY SONG <i className="far fa-play-circle" />
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            PRE-ORDER
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default HeroMusic;
