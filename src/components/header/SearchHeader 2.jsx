import { Link } from 'react-router-dom'; // useHistory import 제거
import { useHistory } from 'react-router-dom'; // useHistory 추가
import '../../styles/header.css';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import { FaSearch, FaUser, FaBars, FaTimes, FaCartPlus } from 'react-icons/fa';
import DropDownProfile from '../dropdownProfile/DropDownProfile';
import { useMediaQuery } from 'react-responsive';

export default function SearchHeader() {
  //Search Toggle
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [openProfile, setOpenProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const history = useHistory(); // useHistory 추가

  const handleProfileClick = () => {
    setOpenProfile(!openProfile);
  };

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem('isLoggedIn')));
  }, [isLoggedIn]);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsSearchOpen(false);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(false); // Close nav when opening search
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      history.push(`/search?query=${searchText}`); // history.push로 페이지 이동
    }
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
                onKeyPress={handleKeyPress} // 엔터 키 이벤트 처리
              />
            )}
            <div className="search-icon" onClick={toggleSearch}>
              {/* Search icon goes here */}
              <FaSearch />
            </div>
            {isLoggedIn && <FaCartPlus className="Cart-plus" />}
            {isLoggedIn ? (
              <div className="profileImage" onClick={handleProfileClick}>
                <FaUser className="user-icon" />
                {openProfile && (
                  <DropDownProfile
                    setIsLoggedIn={setIsLoggedIn}
                    setOpenProfile={setOpenProfile}
                  />
                )}
              </div>
            ) : (
              <Link className="lab-btn" to="/login">
                로그인
              </Link>
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
