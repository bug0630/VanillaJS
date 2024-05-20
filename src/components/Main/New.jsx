import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function New() {
  const [showBoardSection, setShowBoardSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2500 && !showBoardSection) {
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
              search: '?query=' + encodeURIComponent('중세미술'),
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Fran%C3%A7ois_Clouet_-_Elisabeth_of_Austria_%28ca._1571%29_-_Google_Art_Project.jpg/429px-Fran%C3%A7ois_Clouet_-_Elisabeth_of_Austria_%28ca._1571%29_-_Google_Art_Project.jpg"
              alt="productBanner"
            ></img>
            <h4>중세미술</h4>
            <p>신앙과 권력의 상징</p>
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: 'search',
              search: '?query=' + encodeURIComponent('근세미술'),
            }}
          >
            <img
              src="https://i.namu.wiki/i/XEZDuTPW4bfTdxtBgo0Z_F7j1vyixV20b0rdhEGGRxRWgypje49XB_uDg0NB7AGul5PeyNimHWPAo_E13h1dEkRUx_UGUop41J9Hf2RE_WNUKFQxvC--PiKOkAEtHkKd8x679uvindy8wj6w2rlGKw.jpg"
              alt="productBanner"
            ></img>
            <h4>근세미술</h4>
            <p>현실과 상상의 만남</p>
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: 'search',
              search: '?query=' + encodeURIComponent('근대미술'),
            }}
          >
            <img
              src="https://img.hankyung.com/photo/202207/01.30636853.1.jpg"
              alt="productBanner"
            ></img>
            <h4>근대미술</h4>
            <p>혁명적인 탐구와 다양성</p>
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
