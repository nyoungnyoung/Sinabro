import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpMain from "./SignUpMain";
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
import KakaoSignUp from "./socialLogin/KakaoSignUp";

function SignUp() {
  return (
    <div>
      <h1>회원가입 페이지</h1>

      {/* 라우터 정의 */}
      <Routes>
        <Route path="/" element={<SignUpMain />}></Route>
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
        <Route path="/kakao" element={<KakaoSignUp />}></Route>
      </Routes>
    </div>
  );
}

export default SignUp;
