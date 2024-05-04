import React, { useState, useEffect } from 'react';

const Carousel = ({ images, intervalTime = 10000 }) => {
  // 현재 슬라이드의 인덱스를 관리하는 상태
  const [currentIndex, setCurrentIndex] = useState(0);

  // 다음 슬라이드로 이동하는 함수
  const goToNextSlide = () => {
    // 다음 슬라이드의 인덱스 계산
    const newIndex = (currentIndex + 1) % images.length;
    // 상태 업데이트
    setCurrentIndex(newIndex);
  };

  // 이전 슬라이드로 이동하는 함수
  const goToPrevSlide = () => {
    // 이전 슬라이드의 인덱스 계산
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    // 상태 업데이트
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(goToNextSlide, intervalTime);
    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval 정리
  }, [currentIndex]); // currentIndex가 변경될 때마다 interval을 재설정

  return (
    <div className="carousel-container">
      {/* 현재 슬라이드를 보여주는 영역 */}
      <div className="slide">
        <img src={images[currentIndex]} alt="slide" />
      </div>
      {/* 이전 슬라이드로 이동하는 버튼 */}
      <button className="prev" onClick={goToPrevSlide}>
        Previous
      </button>
      {/* 다음 슬라이드로 이동하는 버튼 */}
      <button className="next" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
