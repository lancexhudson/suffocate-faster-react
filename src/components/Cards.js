import React from 'react';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <div className="cards-container">
        <div class="interest-item">
          <a
            href="https://open.spotify.com/artist/6Rc0ucIC3dyYQAzv5n3xnA"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-spotify" id="interest-icon" />
          </a>
        </div>

        <div class="interest-item">
          <a
            href="https://music.apple.com/us/artist/suffocate-faster/191209878"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-apple" id="interest-icon" />
          </a>
        </div>
        <div class="interest-item">
          <a
            href="https://www.instagram.com/suffocatefaster/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram" id="interest-icon" />
          </a>
        </div>
        <div class="interest-item">
          <a
            href="https://twitter.com/suffocatexfstr"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter" id="interest-icon" />
          </a>
        </div>
        <div class="interest-item">
          <a
            href="https://www.facebook.com/suffocatefasterohio/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook" id="interest-icon" />
          </a>
        </div>
      </div>
      {/* <div id="contact">FOR INFO & BOOKING CONTACT</div> */}
      {/* <div id="contact2">CHRISTOPHER TOWNING: CTOWNING@GMAIL.COM</div> */}
    </div>
  );
}

export default Cards;
