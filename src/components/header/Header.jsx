import { Link } from 'react-router-dom';
import '../../styles/header.css';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { FaSearch, FaRegWindowClose } from 'react-icons/fa';

export default function Header() {
  //Search Toggle
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsSearchOpen(false); // Close search when opening nav
  };

  const toggleSearch = () => {
    console.log('aa');
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(false); // Close nav when opening search
  };

  return (
    <>
      <header>
        <div className={`nav ${isNavOpen ? 'openNav' : ''}`}>
          {/* logo */}
          <Link to={'/'}>
            <img src={logo} alt="" className="logo" />
          </Link>
          {/* MenuList */}
          <ul className="text" style={{ display: isSearchOpen ? 'none' : '' }}>
            <li>
              <Link to={'/auction'} className="link">
                경매 리스트
              </Link>
            </li>
            <li>
              <Link to={'/auctionlist'} className="link">
                경매 상품
              </Link>
            </li>
            <li>
              <Link to={'/artist'} className="link">
                이달의 작가
              </Link>
            </li>
            <li>
              <Link to={'/artdetail'} className="link">
                작품 상세
              </Link>
            </li>
          </ul>
          <div className="search-login">
            {isSearchOpen && (
              <input
                className="input"
                type="text"
                placeholder="검색.."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            )}

            <div className="search-icon" onClick={toggleSearch}>
              {/* Search icon goes here */}
              <FaSearch />
            </div>
            <Link className="lab-btn" to={'/login'}>
              로그인
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
