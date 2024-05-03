import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import "./styles/reset.css";
import Auction from "./pages/Auction";
import Search from "./pages/Search";
import ArtistInfo from "./pages/ArtistInfo";
import LoginRegister from "./pages/LoginRegister";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/artDetail/:artId" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="auction" element={<Auction />} />
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/artist" element={<ArtistInfo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
