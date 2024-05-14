import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Result.scss';

export default function Result() {
  // 상태 초기화
  const [artData, setArtData] = useState([]);
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    console.log('query 파라미터 값:', query); // 확인을 위한 console.log 추가
    setQueryString(query || '');
  }, []); // 이펙트가 한 번만 실행되도록 빈 배열 전달

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

  // 검색어를 통한 필터링된 작품 목록
  const filteredArtData = artData.filter((item) => {
    // 카테고리가 존재하고 카테고리가 검색어를 포함하면 필터링
    if (
      item.category &&
      item.category.toLowerCase().includes(queryString.toLowerCase())
    ) {
      console.log('Category:', item.category); // 카테고리 확인을 위한 console.log 추가
      return true;
    }

    // 아티스트 이름이 검색어를 포함하면 필터링
    if (
      item.artist_name &&
      item.artist_name.toLowerCase().includes(queryString.toLowerCase())
    ) {
      console.log('Artist Name:', item.artist_name); // 아티스트 이름 확인을 위한 console.log 추가
      return true;
    }

    // 위의 경우가 아니라면 필터링하지 않음
    return false;
  });

  return (
    <div>
      <ul className="resultCard">
        {filteredArtData.map((item) => (
          <Link to={`/productdetail/${item.id}`} key={item.id}>
            {' '}
            <li key={item.id}>
              <img src={item.art_img[0]} alt={item.title}></img>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <p className="artistName">Artist: {item.artist_name}</p>
              <p className="price">Price: {item.price}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
