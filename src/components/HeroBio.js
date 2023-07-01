import React from 'react';
// import '../App.css';
import './HeroBio.css';
import { Button } from './Button';

function HeroBio() {
  return (
    <div className="hero-bio-container">
      {/* <div className="album-container"> */}
      {/* </div> */}

      <p id="about">
        SUFFOCATE FASTER IS A STRAIGHT EDGE HARDCORE BAND FROM CINCINNATI, OH,
        USA. FORMED IN 2001, THE BAND RELEASED THEIR FULL-LENGTH DEBUT, "ONLY
        TIME WILL TELL" ON BROKEN SOUNDS RECORDS IN 2005. JUST TWO YEARS LATER,
        "DON'T KILL THE MESSENGER" WAS RELEASED ON 1981 RECORDS. THE BAND HAS
        REMAINED ACTIVE, PLAYING FESTIVALS AND TOURING THE UNITED STATES. <br />
        <br />
        IN APRIL 2023, SUFFOCATE FASTER SIGNED WITH SMARTPUNK RECORDS AND
        RELEASED THEIR FIRST SINGLE IN OVER A DECADE, "LOST ONES" OFF THE EP
        "THIS IS THE WAY VOL. 1" SET TO BE RELEASED IN JUNE 2023.
      </p>
      <div className="right-panel">
        <img
          src="https://user-images.githubusercontent.com/106623072/234729894-009cb551-d4b8-47e3-8080-3cfa92aaa04c.jpg"
          alt="promo"
          id="promo-pic"
        />

        <div className="members">
          SUFFOCATE FASTER IS CHRIS TOWNING, CHRIS ALSIP, LANCE HUDSON, AND
          COREY WILLIAMS
        </div>
      </div>
      {/* </div> */}
      {/* <div className="artwork-container">
        <p id="about">
          SUFFOCATE FASTER IS A STRAIGHT EDGE HARDCORE BAND FROM CINCINNATI,
          OHIO, USA. SINCE 2001, THE BAND HAS RELEASED TWO FULL-LENGTH ALBUMS
          AND IS CURRENTLY SIGNED WITH SMARTPUNK RECORDS WITH TWO EPS SLATED FOR
          RELEASE IN 2023.
        </p>
        <div>
          <img
            src="https://user-images.githubusercontent.com/106623072/234729894-009cb551-d4b8-47e3-8080-3cfa92aaa04c.jpg"
            alt="promo"
            id="promo-pic"
          />
        </div>
        <p id="members">
          SUFFOCATE FASTER IS: CHRIS TOWNING, CHRIS ALSIP, LANCE HUDSON, AND
          COREY WILLIAMS
        </p>
      </div> */}
    </div>
  );
}

export default HeroBio;
