import React from 'react';
// import '../App.css';
import './HeroBio.css';
import { Button } from './Button';
import SFPromo from '../assets/SFPromo.jpg';

function HeroBio() {
  return (
    <div className="hero-bio-container">
      <p id="about">
        SUFFOCATE FASTER IS A STRAIGHT EDGE HARDCORE BAND FROM CINCINNATI, OH,
        USA.{' '}
      </p>
      <div>
        <img src={SFPromo} alt="promo" id="promo-pic" />
      </div>
      <p id="about">
        FORMED IN 2001, THE BAND RELEASED THEIR FULL-LENGTH DEBUT, "ONLY TIME
        WILL TELL" ON BROKEN SOUNDS RECORDS IN 2005. JUST TWO YEARS LATER,
        "DON'T KILL THE MESSENGER" WAS RELEASED ON 1981 RECORDS. THE BAND HAS
        REMAINED ACTIVE, PLAYING FESTIVALS AND TOURING THE UNITED STATES. <br />
        <br />
        IN APRIL 2023, SUFFOCATE FASTER SIGNED WITH SMARTPUNK RECORDS AND
        RELEASED THEIR FIRST SINGLE IN OVER A DECADE, "LOST ONES" OFF THE EP
        "THIS IS THE WAY VOL. 1" SET TO BE RELEASED IN JUNE 2023.
        <br />
        <br />
        SUFFOCATE FASTER IS COREY, JOHN, LANCE, CHRIS, AND CHRIS
      </p>

      {/* <div id="member-list">
        SUFFOCATE FASTER IS CHRIS TOWNING, CHRIS ALSIP, LANCE HUDSON, AND COREY
        WILLIAMS
      </div> */}
    </div>
  );
}

export default HeroBio;
