import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "./pages/lobby/Lobby";
import Login from "./pages/login/Login";
import SignUpMain from "./pages/signup/SignUpMain";
import Main from "./pages/main/Main";
import LectureDetail from "./pages/main/LectureDetail";
import TeacherMain from "./pages/teacher/TeacherMain";
import WebRtcMain from "./pages/webrtc/WebRtcMain";
import Cs from "./pages/cs/Cs";
// import CompleteSignUp from "./pages/signup/CompleteSignUp";
// import TeacherClassCreate from "./pages/teacher/TeacherClassCreate";
// import TeacherClassDetail from "./pages/teacher/TeacherClassDetail";
// import CheckNumber from "./pages/signup/CheckNumber";
import styled from "styled-components";

const StyledFonts = styled.div`
  font-family: "SeoulNamsanB";
`;

function App() {
  return (
    <StyledFonts className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/*" element={<SignUpMain />} />
          {/* <Route path="/signup/check" element={<CheckNumber />} />
          <Route path="/signup/complete" element={<CompleteSignUp />} /> */}
          <Route path="/main/*" element={<Main />} />
          <Route path="/detail/:lectureId" element={<LectureDetail />} />
          <Route path="/teacher/*" element={<TeacherMain />} />
          <Route path="/webrtc/:lectureId/*" element={<WebRtcMain />} />
          <Route path="/cs" element={<Cs />} />
        </Routes>
      </BrowserRouter>
    </StyledFonts>
  );
}

export default App;
