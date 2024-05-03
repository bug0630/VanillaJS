import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import "./styles/reset.css";
import Search from "./pages/Search";
import LoginRegister from "./pages/LoginRegister";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/artDetail/:artId" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/search" element={<Search></Search>}></Route>
      </Routes>
    </div>
  );
}

export default App;
