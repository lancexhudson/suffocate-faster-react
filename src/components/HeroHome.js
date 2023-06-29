import React from 'react';
import { useRef, useState, useEffect } from 'react';
// import AudioPlayer from './AudioPlayer';
import '../App.css';
import { Button } from './Button';
import './HeroHome.css';
import artwork from '../assets/artwork.png';
import epVinyl from '../assets/epVinyl.png';
import lostOnes from '../assets/lost-ones.mp3';
import PlayerLogic from '../player/PlayerLogic';
// import Player from '../player/Player';
import { Link } from 'react-router-dom';
import HeroShows from './HeroShows';
import Player from './AudioPlayer';
import promoMerch from '../assets/promoMerch.jpeg';

function HeroHome() {
  // function play() {
  //   new Audio(lostOnes).play();
  // }

  // function pause() {
  //   new Audio(lostOnes).pause();
  // }

  // function togglePlay() {
  //   if (!play) {
  //     pause();
  //   }
  // }

  return (
    <div className="hero-container">
      {/* <h2>THIS IS THE WAY VOL. 1</h2> */}
      <p id="upcoming">THIS IS THE WAY VOL. 1</p>

      <p id="upcoming">NOW STREAMING</p>
      {/* <p id="title">PRE-ORDERS ARE AVAILABLE AT SMARTPUNK</p> */}
      <div className="album-container">
        <img src={promoMerch} alt="" className="artwork" />

        <div className="hero-btns">
          {/* <Button> 
          // className="btns"
          // buttonStyle="btn--outline"
          // buttonSize="btn--large"
          // id="toggle"
          //onClick={togglePlay}
          // onClick={(e) => {
          // e.preventDefault();
          // window.location.href =
          // 'https://soundcloud.com/user-750412490/lost-ones/s-knDtt7T8l3D';
          // }}
          // >
            {' '}
            {/* SOUNDCLOUD <i className="fa-brands fa-soundcloud" /> */}
          {/* PLAY SONG <i className="far fa-play-circle" /> */}
          {/* </Button> */}
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://smartpunkshop.com/collections/suffocate-faster';
            }}
          >
            SMARTPUNK.COM <i className="fa-solid fa-record-vinyl" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroHome;
