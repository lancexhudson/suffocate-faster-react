import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroHome.css';
import artwork from '../assets/artwork.png';
import epVinyl from '../assets/epVinyl.png';
import lostOnes from '../assets/lost-ones.mp3';
import PlayerLogic from '../player/PlayerLogic';
import Player from '../player/Player';
import { Link } from 'react-router-dom';
import HeroShows from './HeroShows';

function HeroHome() {
  //   function play() {
  //     new Audio(lostOnes).play();
  //   }

  return (
    <div className="hero-container">
      <h1>"LOST ONES"</h1>
      <p id="upcoming">FROM THE UPCOMING EP</p>
      <p id="title">THIS IS THE WAY VOL. 1</p>
      <div className="album-container">
        {/* <div className="artwork-container"> */}
        <img src={epVinyl} alt="" className="artwork" />
        {/* </div> */}
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            id="toggle"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://soundcloud.com/user-750412490/lost-ones/s-knDtt7T8l3D';
            }}
          >
            {' '}
            SOUNDCLOUD <i className="fa-brands fa-soundcloud" />
            {/* PLAY SONG <i className="far fa-play-circle" /> */}
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            // onClick={play}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://smartpunkshop.com/collections/suffocate-faster';
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
