import React from 'react';
import './HeroShowsAlt.css';
import '../App.css';
import SF072123 from '../assets/SF072123.jpeg';
import SF081923 from '../assets/SF081923.png';
import { Link } from 'react-router-dom';

function HeroShowsAlt() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="hero-music-container">
      <div className="album-music-container">
        <div id="title">LEXINGTON, KY</div>
        <div id="title-sub">JULY 21</div>
        <img src={SF072123} alt="Lexington, KY" className="artwork" />
        <div
          id="link"
          onClick={() =>
            openInNewTab('https://www.facebook.com/alsbarlexington/')
          }
        >
          TICKETS
        </div>
        {/* <div id="link">
          {' '}
          <a
            href="https://www.facebook.com/alsbarlexington/"
            className="link-hover"
          >
            TICKETS
          </a>
        </div> */}
      </div>
      <div className="album-music-container">
        <div id="title">PONTIAC, MI</div>
        <div id="title-sub">AUGUST 19</div>
        <img src={SF081923} alt="Pontiac, MI" className="artwork" />
        <div
          id="link"
          onClick={() =>
            openInNewTab(
              'https://www.ticketweb.com/event/bleeding-through-walls-of-jericho-the-crofoot-ballroom-tickets/13265348?pl=crofoot&edpPlParam=%3Fpl%3Dcrofoot'
            )
          }
        >
          TICKETS
        </div>
      </div>
    </div>
  );
}

export default HeroShowsAlt;
