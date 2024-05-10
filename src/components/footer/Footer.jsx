import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import '../../styles/footer.css';
import { SiKakaotalk, SiFacebook, SiInstagram } from 'react-icons/si';
export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div class="container">
          <div>
            <img src={logo} className="logo" />
          </div>
          <div class="row">
            <div>
              <div class="useful-link">
                <h2>Useful Links</h2>
                <div class="use-links">
                  <Link to={'auction'}>경매 리스트</Link>
                  <Link to={'auctionlist'}>경매 상품</Link>
                  <Link to={'artist'}>이달의 작가</Link>
                  <Link to={'artdetail'}>작품 상세</Link>
                </div>
              </div>
            </div>
            <div>
              <div class="social-links">
                <h2>Social</h2>
                <div class="social-icons">
                  <SiKakaotalk />
                  KakaoTalk
                  <SiFacebook /> Facebook
                  <SiInstagram /> Instagram
                </div>
              </div>
            </div>
            <div>
              <div class="address">
                <h2>Contact</h2>
                <div class="address-links">
                  <li class="address1">서울 강동구 고덕로 429 5층</li>
                  <li>문의전화: 1577-8888</li>
                  <li>carte@gmail.com</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copy-right-sec">©Copyright C'Arte Corp</div>
      </footer>
    </>
  );
}
