import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import "./styles/reset.css";
import Auction from "./pages/Auction";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Main />} />
        <Route path="/artDetail/:artId" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="auction" element={<Auction />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
