import React, { useState } from 'react';
import BtnComprar from '../components/BtnComprar';

function createCarousel({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>
        <img
          src="src/images/Vector.png"
          alt="prevSlide"
        />
      </button>
      <div className="slide">
        <img src={data[currentSlide].photo} alt={data[currentSlide].photo} />
        <p>{data[currentSlide].descriptionShort}</p>
        <p>{data[currentSlide].price}</p>
        <BtnComprar />
      </div>
      <button onClick={nextSlide}>
        <img
          src="src/images/Vector (1).png"
          alt="nextSlide"
        />

      </button>
    </div>
  );
}

export default createCarousel;
