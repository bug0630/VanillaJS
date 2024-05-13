import { useState, useEffect } from 'react';
import SelectBox from './SelectBox';

const artSolt = [
  { value: 'new', name: '신작품' },
  { value: 'low', name: '낮은가격' },
  { value: 'high', name: '높은가격' },
];

export default function SearchTab() {
  // URL 쿼리스트링 값 가져오기
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    console.log('query 파라미터 값:', query); // 확인을 위한 console.log 추가
    setQueryString(query || '');
  }, []); // 이펙트가 한 번만 실행되도록 빈 배열 전달

  return (
    <div className="searchTab">
      <p>{queryString ? `${queryString} 검색 결과` : '검색 결과'}</p>
      <SelectBox options={artSolt}></SelectBox>
    </div>
  );
}
