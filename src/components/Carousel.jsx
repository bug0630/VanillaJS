import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Carousel.scss';

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
  }, [currentIndex, goToNextSlide, intervalTime]);

  return (
    <div className="carouselContainer ">
      <Link to={pageLinks[currentIndex]}>
        {' '}
        <div className="slide">
          {[0, 1, 2].map((offset) => (
            <img
              key={currentIndex + offset}
              src={images[(currentIndex + offset) % images.length]}
              alt="slide"
            />
          ))}
        </div>
      </Link>
      <button className="prev" onClick={goToPrevSlide}>
        <img src="images/arrow_icon.svg"></img>
      </button>
      <button className="next" onClick={goToNextSlide}>
        <img src="images/arrow_icon.svg"></img>
      </button>
      <div className="comment">{comments[currentIndex]}</div>
    </div>
  );
};

export default Carousel;
