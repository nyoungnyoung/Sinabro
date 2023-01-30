import "./App.css";
import Main from "./pages/main/Main";
import Board from "./pages/board/Board";
// import Accounts from "./pages/accounts/Accounts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import MyPage from "./pages/mypage/MyPage";
import Manage from "./pages/manage/Manage";
import SignUpMain from "./pages/signup/SignUpMain";
import Admin from "./pages/admin/Admin";
import Cs from "./pages/cs/Cs";
import RealTime from "./pages/realtime/RealTime";
import LectureInfo from "./pages/detail/LectureInfo";
import LectureIndex from "./pages/detail/LectureIndex";
import LectureReview from "./pages/detail/LectureReview";
import Login from "./pages/login/Login";
import FindId from "./pages/findid/FindId";
import FindPw from "./pages/findpw/FindPw";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/accounts" element={<Accounts />} /> */}
          <Route path="/signup/*" element={<SignUpMain />} />
          <Route path="/login/:step" element={<Login />} />
          <Route path="/findid/:step" element={<FindId />} />
          <Route path="/findpw/:step" element={<FindPw />} />
          <Route path="/board/*" element={<Board />} />
          <Route path="/detail/:lectureId" element={<Detail />}>
            <Route path="info" element={<LectureInfo />} />
            <Route path="index" element={<LectureIndex />} />
            <Route path="Review" element={<LectureReview />} />
          </Route>
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
