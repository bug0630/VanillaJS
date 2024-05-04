import React, { useState, useEffect } from 'react';

const Carousel = ({ images, comments, intervalTime = 10000 }) => {
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

  // 자동 슬라이드 전환을 위한 useEffect
  useEffect(() => {
    // interval 설정하여 자동으로 다음 슬라이드로 전환
    const interval = setInterval(goToNextSlide, intervalTime);
    // 컴포넌트가 언마운트될 때 interval 정리
    return () => clearInterval(interval);
  }, [currentIndex]); // currentIndex가 변경될 때마다 interval을 재설정

  return (
    <div className="carousel-container">
      {/* 슬라이드 영역 */}
      <div className="slide">
        {/* 현재 슬라이드 이미지 표시 */}
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
      {/* 바뀌는 텍스트 표시 */}
      <div className="comment">{comments[currentIndex]}</div>
    </div>
  );
};

export default Carousel;
