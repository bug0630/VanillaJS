import Available from '../components/Search/Available';
import SearchTab from '../components/Search/SearchTab';
import Result from '../components/Search/Result';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../styles/Search.scss';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 검색어를 저장할 Context 생성
const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export default function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const [searchQuery, setSearchQuery] = useState(query); // 검색어 상태 추가

  useEffect(() => {
    setSearchQuery(query); // URL 쿼리스트링으로부터 검색어 업데이트
  }, [query]);

  return (
    <SearchContext.Provider value={searchQuery}>
      <Header />
      <div className="searchLab">
        <SearchTab />
        <Available></Available>
        <Result></Result>
      </div>
      <Footer></Footer>
    </SearchContext.Provider>
  );
}
