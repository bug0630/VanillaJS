import Available from '../components/Search/Available';
import SearchTab from '../components/Search/SearchTab';
import Result from '../components/Search/Result';
import Header from '../components/header/Header';
import '../styles/Search.scss';
export default function Search() {
  return (
    <div className="searchLab">
      <Header></Header>
      <SearchTab></SearchTab>
      <Available></Available>
      <Result></Result>
    </div>
  );
}
