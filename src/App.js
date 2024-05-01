import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import "./styles/reset.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Main />} />
        <Route path="/artDetail/:artId" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <LoginRegister />
    </div>
  );
}

export default App;
