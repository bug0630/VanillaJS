import React from 'react';
import logo from '../../assets/logo.svg';
import { useEffect, useState } from 'react';

export default function Sell() {
  const [showBoardSection, setShowBoardSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3200 && !showBoardSection) {
        setShowBoardSection(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showBoardSection]); // showBoardSection 상태가 변경될 때마다 useEffect 재실행

  return (
    <div className={`sellWrap ${showBoardSection ? 'show' : ''}`}>
      <h2>Sell width C'Arte</h2>
      <div className="sellbox">
        <div className="logoSection">
          {' '}
          <img src={logo} alt="logo"></img>
        </div>
        <div className="proposal">
          <p>C'Arte에 문의해주세요 </p>
          <div className="sellBtn">Request</div>
        </div>
      </div>
    </div>
  );
}
