import { Link } from 'react-router-dom';
import '../../styles/header.css';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import { FaSearch, FaUser, FaBars, FaTimes, FaCartPlus } from 'react-icons/fa';
import DropDownProfile from '../dropdownProfile/DropDownProfile';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  //Search Toggle
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isMenu, setIsMenu] = useState(false);
  // console.log(isNavOpen);
  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem('isLoggedIn')));
  }, [isLoggedIn]);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
    // setIsNavOpen(true);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsSearchOpen(false);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(false); // Close nav when opening search
  };

  const isDesktop = useMediaQuery({
    query: '(min-width: 900px)',
  });

  return (
    <>
      <header>
        <div className={`nav ${isNavOpen ? 'none' : ''}`}>
          {/* logo */}
          <Link to={'/'}>
            <img src={logo} alt="" className="logo" />
          </Link>
          {/* MenuList */}
          {(isDesktop || isNavOpen) && (
            <ul
              id="text"
              className="navbar active"
              style={{ display: isSearchOpen ? 'none' : '' }}
            >
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
            {isLoggedIn && <FaCartPlus className="Cart-plus" />}
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
            {openProfile && (
              <DropDownProfile
                setIsLoggedIn={setIsLoggedIn}
                setOpenProfile={setOpenProfile}
              />
            )}
          </div>
          <div id="mobile" onClick={handleClick}>
            {isNavOpen ? (
              <FaTimes className="mobileicon" />
            ) : (
              <FaBars className="mobileicon" />
            )}
          </div>{' '}
        </div>
      </header>
    </>
  );
}
