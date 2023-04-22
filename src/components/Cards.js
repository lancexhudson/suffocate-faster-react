import React from 'react';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      {/* <h1>check out this band</h1> */}
      <div className="cards__container">
        <div class="interest_item">
          <a
            href="https://open.spotify.com/artist/6Rc0ucIC3dyYQAzv5n3xnA"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-spotify" id="interest_icon" />
          </a>
        </div>

        <div class="interest_item">
          <a
            href="https://music.apple.com/us/artist/suffocate-faster/191209878"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-apple" id="interest_icon" />
          </a>
        </div>
        <div class="interest_item">
          <a
            href="https://www.instagram.com/suffocatefaster/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram" id="interest_icon" />
          </a>
        </div>
        <div class="interest_item">
          <a
            href="https://www.facebook.com/suffocatefasterohio/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook" id="interest_icon" />
          </a>
        </div>
      </div>
      <div id="contact">FOR INFO & BOOKING CONTACT</div>
      <div id="contact2">CHRISTOPHER TOWNING: CTOWNING@GMAIL.COM</div>
    </div>
  );
}

export default Cards;
