/** @jsxImportSource @emotion/react */
import '../styles/reset.css';
import '../styles/LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

import React, { useState } from 'react';

export default function LoginRegister() {
  const [action, setAction] = useState('');
  const registerLink = () => {
    setAction('active');
  };

  const loginLink = () => {
    setAction('');
  };

  return (
    <div className={`wrapper ${action}`}>
      <div className="form-box login">
        <form action="">
          <h1>로그인</h1>
          <div className="input-box">
            <FaUser className="icon" />
            <input type="text" placeholder="아이디를 입력해 주세요" />
          </div>
          <div className="input-box">
            <FaLock className="icon" />
            <input type="password" placeholder="비밀번호를 입력해 주세요" />
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              사용자 기억하기
            </label>
            <a href="#">비밀번호 잊으셨나요?</a>
          </div>
          <button type="submit">로그인</button>
          <div className="register-link">
            <p>
              계정이 없으신가요?{' '}
              <a href="#" onClick={registerLink}>
                가입하기
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form action="">
          <h1>회원 가입</h1>
          <div className="input-box">
            <FaUser className="icon" />
            <input type="text" placeholder="아이디를 입력해 주세요" />
          </div>
          <div className="input-box">
            <FaLock className="icon" />
            <input type="password" placeholder="비밀번호를 입력해 주세요" />
          </div>
          <div className="input-box">
            <FaUser className="icon" />
            <input type="text" placeholder="이름을 입력해 주세요" />
          </div>
          <div className="input-box">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="이메일을 입력해 주세요" />
          </div>
          <div className="input-box">
            <input type="date" placeholder="생년월일 입력해 주세요" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              이용약관 동의
            </label>
          </div>
          <button type="submit" className="reg-btn">
            {' '}
            가입하기
          </button>
          <div className="register-link">
            <p>
              이미 계정 있으신가요?{' '}
              <a href="#" onClick={loginLink}>
                로그인하기
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
