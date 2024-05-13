import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function New() {
  const [showBoardSection, setShowBoardSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2300 && !showBoardSection) {
        setShowBoardSection(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showBoardSection]); // showBoardSection 상태가 변경될 때마다 useEffect 재실행

  return (
    <div className={`newWrap ${showBoardSection ? 'show' : ''}`}>
      <h2>New</h2>
      <ul className="newProduct">
        <li>
          <Link
            to={{
              pathname: 'search',
              search: '?query=' + encodeURIComponent('현대미술'),
            }}
          >
            <img src="images/art_img/img4.webp" alt="productBanner"></img>
            <h4>고대미술</h4>
            <p>예술의 탄생</p>
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: 'search',
              search: '?query=' + encodeURIComponent('현대미술'),
            }}
          >
            <img src="images/art_img/img11.webp" alt="productBanner"></img>
            <h4>중세미술</h4>
            <p>신앙과 권력의 상징</p>
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: 'search',
              search: '?query=' + encodeURIComponent('현대미술'),
            }}
          >
            <img src="images/art_img/img12.webp" alt="productBanner"></img>
            <h4>르네상스</h4>
            <p>인간의 영감과 창의</p>
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: 'search',
              search: '?query=' + encodeURIComponent('현대미술'),
            }}
          >
            <img src="images/art_img/img13.webp" alt="productBanner"></img>
            <h4>현대미술</h4>
            <p>다양성과 혁신</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
