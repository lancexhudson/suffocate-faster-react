import React from 'react';
// import '../App.css';
import './HeroBio.css';
import { Button } from './Button';

function HeroBio() {
  return (
    <div className="hero-bio-container">
      {/* <div className="album-container"> */}

      {/* </div> */}
      <div className="artwork-container">
        <p id="about">
          SUFFOCATE FASTER IS A STRAIGHT EDGE HARDCORE BAND FROM CINCINNATI,
          OHIO, USA. SINCE 2001, THE BAND HAS RELEASED TWO FULL-LENGTH ALBUMS
          AND IS CURRENTLY SIGNED WITH SMARTPUNK RECORDS WITH TWO EPS SLATED FOR
          RELEASE IN 2023.
        </p>
        <img
          src="https://user-images.githubusercontent.com/106623072/234729894-009cb551-d4b8-47e3-8080-3cfa92aaa04c.jpg"
          alt="promo"
          id="promo-pic"
        />

        <p id="members">
          SUFFOCATE FASTER IS: CHRIS TOWNING, CHRIS ALSIP, LANCE HUDSON, AND
          COREY WILLIAMS
        </p>
      </div>
    </div>
  );
}

export default HeroBio;
