import { useState, useEffect } from 'react';
import SelectBox from './SelectBox';
import { useLocation } from 'react-router-dom';

const artSolt = [
  { value: 'new', name: '신작품' },
  { value: 'low', name: '낮은가격' },
  { value: 'high', name: '높은가격' },
];

export default function SearchTab() {
  // URL 쿼리스트링 값 가져오기
  const [queryString, setQueryString] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    // 확인을 위한 console.log 추가
    setQueryString(query || '');
  }, [location.search]); // 의존성 배열에 location.search 추가

  return (
    <div className="searchTab">
      <p>{queryString ? `${queryString} 검색 결과` : '검색 결과'}</p>
      <SelectBox options={artSolt}></SelectBox>
    </div>
  );
}
