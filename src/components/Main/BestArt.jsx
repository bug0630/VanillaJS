import React, { useEffect, useState } from 'react';

export default function BestArt() {
  const [showBoardSection, setShowBoardSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500 && !showBoardSection) {
        setShowBoardSection(true); // 스크롤 위치가 1000px 이상이고, 요소가 아직 나타나지 않았을 때만 보이기
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
