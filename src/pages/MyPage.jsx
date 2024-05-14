import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import React, { useRef } from 'react';

export default function MyPage() {
  const id = useRef(localStorage.getItem('id')); // localStorage에서 값을 가져와서 useRef에 할당
  const name = useRef(localStorage.getItem('name')); // localStorage에서 값을 가져와서 useRef에 할당
  const email = useRef(localStorage.getItem('email')); // localStorage에서 값을 가져와서 useRef에 할당

  return (
    <>
      <Header />
      <h1>마이페이지</h1>

      <div>
        <p>아이디: {id.current}</p> <p>이름: {name.current}</p>{' '}
        <p>이메일: {email.current}</p>{' '}
      </div>

      <Footer />
    </>
  );
}
