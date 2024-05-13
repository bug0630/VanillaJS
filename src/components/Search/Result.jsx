import React, { useState, useEffect } from 'react';

export default function Result() {
  // 상태 초기화
  const [artData, setArtData] = useState([]);

  // 컴포넌트가 마운트되었을 때 데이터 가져오기
  useEffect(() => {
    fetchArtData();
  }, []);

  // 데이터를 가져오는 함수
  const fetchArtData = () => {
    fetch(process.env.PUBLIC_URL + '/data/art.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // 데이터를 상태에 저장
        setArtData(data);
      })
      .catch((error) => {
        console.error('Error fetching art data:', error);
      });
  };
  return (
    <div>
      <h2>Art Data</h2>
      <ul>
        {artData.map((item) => (
          <li key={item.id}>
            <img
              src={process.env.PUBLIC_URL + './images/art_img/' + item.art_img}
              alt={item.title}
            ></img>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Artist: {item.artist_name}</p>
            <p>Price: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
