import { useState } from 'react';
import './HeroShowsPastImages.css';
import ImageSlider from './ImageSlider';
import { SliderDataPast } from './SliderDataPast';

const HeroShowsPastImages = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  return (
    <div className="past-shows-container">
      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
    // <ImageSlider slides={SliderDataPast} />
  );
};

export default HeroShowsPastImages;
