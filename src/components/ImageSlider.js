import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Shows from './pages/Shows';
import HeroShows from './HeroShows';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="future-shows-container">
      <div className="album-container">
        {/* <div className="upcoming-text">UPCOMING SHOWS</div> */}
        {/*  <div className="hero-btns">
           <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            id="toggle"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = <Link to={HeroShows} />;
            }}
          >
            {' '}
            UPCOMING SHOWS
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={play}
            onClick={<Link to="/pastShows" />}
          >
            PAST SHOWS
          </Button>
        </div>*/}
      </div>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ImageSlider;
