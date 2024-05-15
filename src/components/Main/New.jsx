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
              search: '?query=' + encodeURIComponent('중세미술'),
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Hubert_van_Eyck_or_Jan_van_Eyck_or_both_-_The_Three_Marys_at_the_Tomb_-_Google_Art_Project.jpg/400px-Hubert_van_Eyck_or_Jan_van_Eyck_or_both_-_The_Three_Marys_at_the_Tomb_-_Google_Art_Project.jpg"
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
              src="https://i.namu.wiki/i/lcl9V7cptudXHbazYE-Ks-ZFI84JHsfuFRD3tji3vV4GSgANiKPVnLM4wZJwZ6cGguZtNeFXNaqEHFKzzv7MtreQzs7ZcS2WjXVTfn0G8sLxTfagY2rX5zYh3n_-K5l6cQwksRqeregY16tlRVAMmg.jpg"
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Van_Gogh_-_Le_Moulin_de_la_Galette8.jpeg/260px-Van_Gogh_-_Le_Moulin_de_la_Galette8.jpeg"
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
