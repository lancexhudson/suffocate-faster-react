import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroHome.css';
import artwork from '../assets/artwork.png';

function HeroHome() {
  return (
    <div className="hero-container">
      <h1>"LOST ONES"</h1>
      <p>From the EP,</p>
      <p>THIS IS THE WAY</p>
      <div className="album-container">
        <div className="artwork-container">
          <img src={artwork} alt="" className="artwork" />
        </div>
        <div className="hero-btns">
          <Button
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
            PRE-ORDER <i className="fa-solid fa-record-vinyl" />
            {/* https://smartpunkshop.com/collections/suffocate-faster */}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroHome;
