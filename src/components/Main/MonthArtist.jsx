import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
export default function MonthArtist() {
  const [showBoardSection, setShowBoardSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !showBoardSection) {
        setShowBoardSection(true); // 스크롤 위치가 1000px 이상이고, 요소가 아직 나타나지 않았을 때만 보이기
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showBoardSection]); // showBoardSection 상태가 변경될 때마다 useEffect 재실행

  return (
    <div className={`artMonth ${showBoardSection ? 'show' : ''}`}>
      <h2>Artist of the Month</h2>
      <div className="artistInfo">
        {' '}
        <img
          className="artistPhoto"
          src="images/artist_img/artist1.webp"
          alt="artist"
        ></img>
        <div className="artistComment">
          <h2>작가 comment</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            architecto illum minus ratione tenetur corrupti ipsa, dolore
            officiis eveniet cum voluptate numquam. Odit unde eum modi quia
            possimus pariatur fuga!
          </p>
          <ul className="artMonthList">
            <li>
              <Link to="/">
                <img src="images/art_img/img4.webp"></img>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="images/art_img/img5.webp"></img>
              </Link>
            </li>{' '}
            <li>
              <Link to="/">
                <img src="images/art_img/img6.webp"></img>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
