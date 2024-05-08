import React, { useEffect, useState } from 'react';

export default function BestArt() {
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
          loasdfsdafdasfasf
        </div>
      </div>
    </div>
  );
}
