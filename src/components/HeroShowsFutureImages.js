import { useState } from 'react';
import './HeroShowsFutureImages.css';

const HeroShowsFutureImages = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  return (
    <div className="future-shows-container">
      {/* <div className="galleryWrap"> */}
      {/* {galleryImages &&
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
        })} */}
      {/* </div> */}
    </div>
  );
};

export default HeroShowsFutureImages;
