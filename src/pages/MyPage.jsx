import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../../src/styles/Mypage.css';
import React, { useRef, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

export default function MyPage() {
  const id = useRef(localStorage.getItem('id')); // localStorage에서 값을 가져와서 useRef에 할당
  const name = useRef(localStorage.getItem('name')); // localStorage에서 값을 가져와서 useRef에 할당
  const email = useRef(localStorage.getItem('email')); // localStorage에서 값을 가져와서 useRef에 할당
  const inputRef = useRef(localStorage.getItem('inputRef')); // localStorage에서 값을 가져와서 useRef에 할당
  const address = useRef(localStorage.getItem('address')); // localStorage에서 값을 가져와서 useRef에 할당
  const number = useRef(localStorage.getItem('number')); // localStorage에서 값을 가져와서 useRef에 할당
  const date = useRef(localStorage.getItem('date')); // localStorage에서 값을 가져와서 useRef에 할당

  const [image, setImage] = useState('');
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    // const file = event.target.files[0];
    setImage(event.target.files[0]);
  };
  const handleDataClick = () => {
    localStorage.setItem('inputRef', inputRef.current.value);
    localStorage.setItem('address', address.current.value);
    localStorage.setItem('number', number.current.value);
    localStorage.setItem('date', date.current.value);
  };
  return (
    <>
      <Header />
      <div className="Mypage">
        <h2>회원 정보</h2>
        <div className="UserImg">
          <div onClick={handleImageClick}>
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="user"
                className="img-display-after"
              />
            ) : (
              <FaRegUserCircle
                size={100}
                className="img-display-before"
              ></FaRegUserCircle>
            )}

            <input
              type="file"
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>
        </div>
        <table border={1}>
          <colgroup>
            <col style={{ width: '190px' }} />
            <col style={{ width: 'auto' }} />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">아이디</th>
              <td>
                <input
                  className="input-box"
                  type="text"
                  placeholder={id.current}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">이름</th>
              <td>
                <input
                  className="input-box"
                  type="text"
                  placeholder={name.current}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">이메일</th>
              <td>
                <input
                  className="input-box"
                  type="text"
                  placeholder={email.current}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">주소</th>
              <td>
                <input
                  ref={address}
                  className="input-box"
                  type="text"
                  placeholder="주소 입력"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">휴대전화</th>
              <td>
                <input
                  ref={number}
                  className="input-box"
                  type="number"
                  placeholder="전화번호 입력"
                />
              </td>
            </tr>

            <tr>
              <th scope="row">생년월일</th>
              <input ref={date} className="input-box" type="date" />
            </tr>
          </tbody>
        </table>
        <button onClick={handleDataClick}>회원정보 수정</button>
      </div>

      <Footer />
    </>
  );
}
