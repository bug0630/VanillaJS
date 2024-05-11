import { Link } from 'react-router-dom';
import '../../styles/header.css';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import DropDownProfile from '../dropdownProfile/DropDownProfile';

export default function Header(isLoggedIn) {
  //Search Toggle
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsSearchOpen(false); // Close search when opening nav
  };

  const toggleSearch = () => {
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
          {handleClick ? (
            <ul id="text" style={{ display: isSearchOpen ? 'none' : '' }}>
              <li>
                <Link to={'/auctionlist'} className="link">
                  경매
                </Link>
              </li>
              <li>
                <Link to={'/auction'} className="link">
                  판매
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
          ) : (
            ''
          )}
          <div className="search-login">
            {isSearchOpen && (
              <input
                className="input"
                type="text"
                placeholder="검색..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            )}
            <div className="search-icon" onClick={toggleSearch}>
              {/* Search icon goes here */}
              <FaSearch />
            </div>
            {isLoggedIn ? (
              <FaUser
                className="profileImage"
                onClick={() => setOpenProfile((prev) => !prev)}
              />
            ) : (
              <Link className="lab-btn" to={'/login'}>
                로그인
              </Link>
            )}
            {openProfile && <DropDownProfile />}
          </div>
          <div id="mobile" onClick={handleClick}>
            {isShow ? (
              <FaTimes className="mobileicon" />
            ) : (
              <FaBars className="mobileicon" />
            )}
          </div>
        </div>
      </header>
    </>
  );
}
