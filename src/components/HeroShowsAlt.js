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
    <div className="hero-shows-container">
      <div className="shows-container">
        <div id="location">LEXINGTON, KY</div>
        <div id="date">JULY 21</div>
        <img src={SF072123} alt="Lexington, KY" className="flyer" />
        <div
          id="ticket-link"
          onClick={() =>
            openInNewTab('https://www.facebook.com/alsbarlexington/')
          }
        >
          TICKETS
        </div>
      </div>
      <div className="shows-container">
        <div id="location">PONTIAC, MI</div>
        <div id="date">AUGUST 19</div>
        <img src={SF081923} alt="Pontiac, MI" className="flyer" />
        <div
          id="ticket-link"
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
