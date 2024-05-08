import { Link } from 'react-router-dom';
import '../../styles/header.css';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <>
      <header>
        <div className="navbar">
          <Link to={'/'}>
            <div className="box">
              <img src={logo} alt="" className="logo" />
            </div>
          </Link>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className="text">
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
          <Link className="lab-btn " to={'login'}>
            로그인
          </Link>
        </div>
      </header>
    </>
  );
}
