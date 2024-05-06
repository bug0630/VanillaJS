import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = ({ images, comments, pageLinks, intervalTime = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, intervalTime);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <Link to={pageLinks[currentIndex]}>
        {' '}
        <div className="slide">
          <img src={images[currentIndex]} alt="slide" />
        </div>
      </Link>
      <button className="prev" onClick={goToPrevSlide}>
        Previous
      </button>
      <button className="next" onClick={goToNextSlide}>
        Next
      </button>
      <div className="comment">{comments[currentIndex]}</div>
    </div>
  );
};

export default Carousel;
