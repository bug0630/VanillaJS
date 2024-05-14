import { useState, useEffect } from 'react';
import SelectBox from './SelectBox';
import { useSearch } from '../../pages/Search'; // useSearch 추가

const artSolt = [
  { value: 'new', name: '신작품' },
  { value: 'low', name: '낮은가격' },
  { value: 'high', name: '높은가격' },
];

export default function SearchTab() {
  const searchQuery = useSearch(); // 검색어 상태 가져오기

  return (
    <div className="searchTab">
      <p>{searchQuery ? `${searchQuery} 검색 결과` : '검색 결과'}</p>{' '}
      {/* 검색어 출력 */}
      <SelectBox options={artSolt}></SelectBox>
    </div>
  );
}
