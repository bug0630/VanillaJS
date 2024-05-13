import Available from '../components/Search/Available';
import SearchTab from '../components/Search/SearchTab';
import Result from '../components/Search/Result';
import '../styles/Search.scss';
export default function Search() {
  return (
    <div className="searchLab">
      <SearchTab></SearchTab>
      <Available></Available>
      <Result></Result>
    </div>
  );
}
