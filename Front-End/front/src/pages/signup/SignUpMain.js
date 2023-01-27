import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignUpId1 from "./SignUpId1";
import SignUpId2 from "./SignUpId2";
import SignUpPw1 from "./SignUpPw1";
import SignUpPw2 from "./SignUpPw2";
import SignUpPw3 from "./SignUpPw3";
import SignUpName from "./SignUpName";
import SignUpBirth from "./SignUpBirth";
import SignUpPhone1 from "./SignUpPhone1";
import SignUpPhone2 from "./SignUpPhone2";
import SignUpAgree from "./SignUpAgree";
import SignUpMsg from "./SignUpMsg";
import CustomerService from "./CustomerService";
import KakaoSignUp from "./KakaoSignUp";

function SignUpMain() {
  const navigate = useNavigate();

  const moveSignUpId1 = () => {
    navigate("/signup/id1");
  };
  return (
    <div>
      <h2>회원가입</h2>

      {/* 회원가입 시작하기 */}
      <StyledDiv>
        <h5>회원가입 시작하기</h5>
        <button onClick={moveSignUpId1}>다음단계로</button>
      </StyledDiv>

      {/* 고객센터 안내 */}
      <CustomerService />

      {/* 카카오톡 회원가입 */}
      <KakaoSignUp />

      {/* 라우터 정의 */}
      <Routes>
        <Route path="/id1" element={<SignUpId1 />}></Route>
        <Route path="/id2" element={<SignUpId2 />}></Route>
        <Route path="/pw1" element={<SignUpPw1 />}></Route>
        <Route path="/pw2" element={<SignUpPw2 />}></Route>
        <Route path="/pw3" element={<SignUpPw3 />}></Route>
        <Route path="/name" element={<SignUpName />}></Route>
        <Route path="/birth" element={<SignUpBirth />}></Route>
        <Route path="/phone1" element={<SignUpPhone1 />}></Route>
        <Route path="/phone2" element={<SignUpPhone2 />}></Route>
        <Route path="/agree" element={<SignUpAgree />}></Route>
        <Route path="/msg" element={<SignUpMsg />}></Route>
      </Routes>
    </div>
  );
}

const StyledDiv = styled.div`
  width: 60%;
  height: 100px;
  border: 1px solid black;
  margin: auto;
`;
export default SignUpMain;
