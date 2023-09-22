import React from 'react';
import './HeroShowsAlt.css';
import '../App.css';
import SF072123 from '../assets/SF072123.jpeg';
import SF081923 from '../assets/SF081923.png';
import SF072023 from '../assets/SF072023.png';
import SF091023 from '../assets/SF091023.jpeg';
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
      <div className="shows-container">
        <div id="location">CINCINNATI, OH</div>
        <div id="date">SEPTEMBER 10</div>
        <img src={SF091023} alt="Chicago, IL" className="flyer" />
        <div
          id="ticket-link"
          onClick={() =>
            openInNewTab(
              'https://l.facebook.com/l.php?u=http%3A%2F%2Fcincyticket.com%2Fsonofday%3Ffbclid%3DIwAR287iMmv4uf_PGy08GJlkelKz4MP2_wV8NQYD0HjIV2DZg8-DBNbk1ghG4&h=AT0Kjw2Z1tJGBki8oshJOz3YHtfvolj5SnoS-NlrNGPMcDYXxuP7C5UiTb63LaD3ccCXUT8qGKSkcOIuJpvR5QRpB6FoIKQDB5_-6bSYqzesdjnN4TrJu4ff-QqqPnH7QIWWSA&__tn__=-UK-R&c[0]=AT3h9-bGHHDIGHtWWDwXllqnUTgG2IrF3_DQZlzgK8xhQon_HN-CB8Eb3AxYGKwfWP9QDrh-WiJr-A-UHvXXQ_WfOY5VFjB8c9InLvUQASQM4m-sAVnW7A5Q1k_IswL1-RCap7pFz0WovIyCQEQw4Vts-LIEMiiY3krYUl2mzQZEcUVvOoAE7503Qr_KssG_Ie92vhWB9ASv'
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
