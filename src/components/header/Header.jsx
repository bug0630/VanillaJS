import { Link } from 'react-router-dom';
import '../../styles/header.css';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { FaSearch, FaRegWindowClose } from 'react-icons/fa';

export default function Header() {
  //Search Toggle
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsSearchOpen(false); // Close search when opening nav
  };

  const toggleSearch = () => {
    console.log('aa');
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(false); // Close nav when opening search
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <header>
        <div className={`nav ${isNavOpen ? 'openNav' : ''}`}>
          <FaSearch
            className={`uil uil-bars navOpenBtn ${isNavOpen ? 'hidden' : ''}`}
            onClick={toggleNav}
          />

          {/* logo */}
          <Link to={'/'}>
            <div className="box">
              <img src={logo} alt="" className="logo" />
            </div>
          </Link>
          {/* MenuList */}
          <ul className={`text ${isNavOpen ? 'showNav' : ''}`}>
            <FaRegWindowClose
              className="uil uil-times navCloseBtn"
              onClick={closeNav}
            />
            <li>
              <Link to={'auction'} className="link">
                경매 리스트
              </Link>
            </li>
            <li>
              <Link to={'auctionlist'} className="link">
                경매 상품
              </Link>
            </li>
            <li>
              <Link to={'artist'} className="link">
                이달의 작가
              </Link>
            </li>
            <li>
              <Link to={'artdetail'} className="link">
                작품 상세
              </Link>
            </li>
          </ul>
          {/* SearchBar */}
          <FaSearch
            className={`uil uil-search search-icon ${
              isSearchOpen ? 'hidden' : ''
            }`}
            id="searchIcon"
            onClick={toggleSearch}
          />
          {isSearchOpen && (
            <div className={`search-box `}>
              <input type="text" placeholder="검색" />
            </div>
          )}

          {/* Login Button */}
          <Link className="lab-btn" to={'/login'}>
            로그인
          </Link>
        </div>
      </header>
    </>
  );
}
