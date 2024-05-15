/** @jsxImportSource @emotion/react */
import '../styles/reset.css';
import '../styles/LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import DaumPostcode from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import { SiKakaotalk, SiGmail, SiFacebook, SiNaver } from 'react-icons/si';
import CheckBox from '../../src/components/checkbox/Checkbox';

export default function LoginRegister() {
  const [action, setAction] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const registerLink = () => {
    setAction('active');
  };

  const loginLink = () => {
    setAction('');
  };
  const navigation = useNavigate();
  const [service, setService] = React.useState(false);
  const id = useRef();
  const password = useRef();
  const name = useRef();
  const email = useRef();
  const loginId = useRef();
  const loginPassword = useRef();

  const [showMain, setShowMain] = useState(false);
  const localRegister = localStorage.getItem('register');
  const localId = localStorage.getItem('id');
  const localPassword = localStorage.getItem('password');
  const localName = localStorage.getItem('name');
  const localEmail = localStorage.getItem('email');

  useEffect(() => {
    if (localRegister) {
      setShowMain(true);
    }
  });

  const handleRegisterButtonClick = () => {
    if (!service) {
      alert('서비스 이용약관에 동의해주세요!');
    } else {
      handleClick();
    }
  };
  const handleClick = () => {
    if (
      id.current.value &&
      password.current.value &&
      name.current.value &&
      email.current.value &&
      service
    ) {
      localStorage.setItem('id', id.current.value);
      localStorage.setItem('password', password.current.value);
      localStorage.setItem('name', name.current.value);
      localStorage.setItem('email', email.current.value);
      localStorage.setItem('register', email.current.value);
      alert('회원 가입 완료되었습니다!🎉');
      navigation('/login');
    } else {
      alert('모든 필드를 작성하고 서비스 이용약관에 동의해주세요!');
    }
  };

  const handleSignIn = () => {
    if (
      loginId.current.value == localStorage.getItem('id') &&
      loginPassword.current.value == localStorage.getItem('password')
    ) {
      localStorage.setItem('isLoggedIn', true);

      alert('로그인 되었습니다');
      navigation('/');
    } else {
      alert('아이디나 비밀번호를 확인하세요!!');
    }
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn}> </Header>
      <div className="login-wrapper">
        <div className={`wrapper ${action}`}>
          <div className="form-box login">
            <form action="">
              <h1>로그인</h1>
              <div className="input-box">
                <FaUser className="icon" />
                <input
                  ref={loginId}
                  type="text"
                  placeholder="아이디를 입력해 주세요"
                />
              </div>
              <div className="input-box">
                <FaLock className="icon" />
                <input
                  ref={loginPassword}
                  type="password"
                  placeholder="비밀번호를 입력해 주세요"
                />
              </div>
              <div className="remember-forget">
                <label>
                  <input type="checkbox" />
                  사용자 기억하기
                </label>
              </div>
              <button type="submit" onClick={handleSignIn}>
                <Link to={'/'} />
                로그인
              </button>
              <div className="register-link">
                <p>
                  계정이 없으신가요?
                  <a href="#" onClick={registerLink}>
                    가입하기
                  </a>
                </p>
                <hr />
                <div>
                  <div>SNS 로그인</div>
                  <div className="snslogin">
                    <SiKakaotalk size={30} /> <SiGmail size={30} />{' '}
                    <SiFacebook size={30} /> <SiNaver size={30} />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="form-box register">
            <form action="">
              <h1>회원 가입</h1>
              <div className="input-box">
                <FaUser className="icon" />
                <input
                  type="text"
                  placeholder="아이디를 입력해 주세요"
                  ref={id}
                />
              </div>
              <div className="input-box">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="비밀번호를 입력해 주세요"
                  ref={password}
                />
              </div>
              <div className="input-box">
                <FaUser className="icon" />
                <input
                  type="text"
                  placeholder="이름을 입력해 주세요"
                  ref={name}
                />
              </div>
              <div className="input-box">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  placeholder="이메일을 입력해 주세요"
                  ref={email}
                />
              </div>
              <div className="remember-forget">
                <label>
                  <CheckBox checked={service} onChange={setService}>
                    (필수) 서비스 이용약관
                  </CheckBox>
                </label>
              </div>
              <button
                type="button"
                className="reg-btn"
                onClick={handleRegisterButtonClick}
              >
                가입하기
              </button>
              <div className="register-link">
                <p>
                  이미 계정 있으신가요?
                  <a href="#" onClick={loginLink}>
                    로그인하기
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
