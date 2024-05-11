import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DropDownProfile = () => {
  const navigate = useNavigate(); // Move useNavigate here

  const handleLogout = () => {
    navigate('/'); // Use navigate here to redirect
  };

  return (
    <div className="dropdown">
      <ul className="dropdown-list">
        <li className="AboutPage">
          <Link to="/mypage">내 정보</Link>{' '}
          {/* Place the text inside Link component */}
        </li>
        <li onClick={handleLogout}>로그아웃</li>
      </ul>
    </div>
  );
};

export default DropDownProfile;
