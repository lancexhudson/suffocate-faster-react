import React from 'react';
import './HeroShowsAlt.css';
import '../App.css';
import SF072123 from '../assets/SF072123.jpeg';
import SF081923 from '../assets/SF081923.png';
import { Link } from 'react-router-dom';

function HeroShowsAlt() {
  return (
    <div className="hero-music-container">
      <div className="album-music-container">
        <div id="title">LEXINGTON, KY</div>
        <div id="title-sub">JULY 21</div>
        {/* <div className="artwork"> */}
        <img src={SF072123} alt="This is the Way Vol. 1" className="artwork" />
        <div id="link">
          {' '}
          <a href="https://google.com/" className="link-hover">
            TICKETS
          </a>
        </div>
      </div>
      <div className="album-music-container">
        <div id="title">PONTIAC, MI</div>
        <div id="title-sub">AUGUST 19</div>

        {/* <div className="artwork"> */}
        <img
          src={SF081923}
          alt="Don't Kill the Messenger"
          className="artwork"
        />

        <div id="link">
          <a href="https://google.com/" className="link-hover">
            TICKETS
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroShowsAlt;
