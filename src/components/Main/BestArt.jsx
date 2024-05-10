import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel';

export default function BestArt() {
  const images = [
    require('./img/ai-24-05-pc.jpg'),
    require('./img/am-24-04-pc-3.jpg'),
    require('./img/am-24-05-pc.jpg'),
    require('./img/am-24-04-pc-3.jpg'),
  ];
  const comments = ['작품1', '작품2', '작품3', '작품4'];
  const pageLinks = ['/artist', '/auction', '', ''];
  const [showBoardSection, setShowBoardSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1200 && !showBoardSection) {
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
        </div>
      </div>
    </div>
  );
}
