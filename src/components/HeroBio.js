import React from 'react';
import '../App.css';
import './HeroBio.css';
import { Button } from './Button';

function HeroBio() {
  return (
    <div className="hero-bio-container">
      {/* <div className="album-container"> */}

      {/* </div> */}
      <div className="artwork-container">
        <p id="about">
          SUFFOCATE FASTER IS A STRAIGHT EDGE HARDCORE BAND FROM CINCINNATI
          OHIO, USA. FORMED IN 2001, THE BAND HAS TOURED THE U.S. WITH BANDS
          LIKE BURY YOUR DEAD AND TERROR. THE BAND AS TWO FULL LENGTHS AND 2 EPS
          RELEASED.
        </p>
        <img
          src="https://user-images.githubusercontent.com/106623072/234729894-009cb551-d4b8-47e3-8080-3cfa92aaa04c.jpg"
          alt="promo"
          id="promo-pic"
        />
      </div>
      <p id="members">
        SUFFOCATE FASTER IS: CHRIS TOWNING, CHRIS ALSIP, LANCE HUDSON, AND COREY
        WILLIAMS
      </p>
    </div>
  );
}

export default HeroBio;
