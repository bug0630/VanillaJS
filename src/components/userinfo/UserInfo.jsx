import React, { useState, useEffect } from 'react';

function UserInfo() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // 로컬 스토리지에서 사용자 정보 가져오기
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      {userInfo ? (
        <div>
          <p>사용자 이름: {userInfo.username}</p>
          <p>이메일: {userInfo.email}</p>
        </div>
      ) : (
        <p>사용자 정보가 없습니다.</p>
      )}
    </div>
  );
}

export default UserInfo;
