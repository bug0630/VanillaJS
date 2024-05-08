import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel';
// import '../bestArtCarousel.scss';
export default function BestArt() {
  const images = [
    require('./img/ai-24-05-pc.jpg'),
    require('./img/am-24-04-pc-3.jpg'),
    require('./img/am-24-05-pc.jpg'),
    require('./img/am-24-04-pc-3.jpg'),
  ];
  const comments = ['.', '', '', ''];
  const pageLinks = ['/artist', '/auction', '', ''];
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
  }, [showBoardSection]); // showBoardSection 상태가 변경될 때마다 useEffect 재실행

  return (
    <div className="bestWrap">
      <div className="whiteBoard">
        <div className={`boardSection ${showBoardSection ? 'show' : ''}`}>
          <div className="bestArtCrousel">
            {' '}
            <Carousel
              images={images}
              comments={comments}
              pageLinks={pageLinks}
            ></Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
