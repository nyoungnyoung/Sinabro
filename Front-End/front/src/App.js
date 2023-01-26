import "./App.css";
import Main from "./pages/main/Main";
import Board from "./pages/board/Board";
import Accounts from "./pages/accounts/Accounts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import MyPage from "./pages/mypage/MyPage";
import Manage from "./pages/manage/Manage";
import Admin from "./pages/admin/Admin";
import Cs from "./pages/cs/Cs";
import RealTime from "./pages/realtime/RealTime";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/board/*" element={<Board />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cs" element={<Cs />} />
          <Route path="/realtime" element={<RealTime />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
