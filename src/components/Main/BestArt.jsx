import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel';

export default function BestArt() {
  const images = [
    require('./img/sunset_in_venice.webp'),
    require('./img/starry_night.webp'),
    require('./img/mona_lisa.webp'),
  ];
  const comments = ['', '', '', ''];
  const pageLinks = ['', '', '', ''];
  const [showBoardSection, setShowBoardSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500 && !showBoardSection) {
        setShowBoardSection(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showBoardSection]);

  return (
    <div className="bestWrap">
      <div className="dark">
        <div className={`boardSection ${showBoardSection ? 'show' : ''}`}>
          <h2>Auction</h2>
          <div className="bestCarousel">
            <Carousel
              images={images}
              comments={comments}
              pageLinks={pageLinks}
            />
          </div>
          <Link to="./auctionlist">
            <button className="bidBtn">입찰하러 가기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
