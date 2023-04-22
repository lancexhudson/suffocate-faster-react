import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroHome.css';
import artwork from '../assets/artwork.png';
import lostOnes from '../assets/lost-ones.mp3';

function HeroHome() {
  function play() {
    new Audio(lostOnes).play();
  }

  return (
    <div className="hero-container">
      <h1>"LOST ONES"</h1>
      <p id="upcoming">FROM THE UPCOMING EP</p>
      <p id="title">THIS IS THE WAY VOL. 1</p>
      <div className="album-container">
        <div className="artwork-container">
          <img src={artwork} alt="" className="artwork" />
        </div>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            id="toggle"
            onClick={play}
          >
            PLAY SONG <i className="far fa-play-circle" />
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                ('https://smartpunkshop.com/collections/suffocate-faster',
                '_blank');
            }}
          >
            PRE-ORDER <i className="fa-solid fa-record-vinyl" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroHome;
