import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SignUpCheckNumber from "./SignUpCheckNumber";
import SignUpName from "./SignUpName";
import SignUpNumber from "./SignUpNumber";
import SignUpPw1 from "./SignUpPw1";
import SignUpPw2 from "./SignUpPw2";
import CompleteSignUp from "./CompleteSignUp";
import AlreadyExisted from "./AlreadyExisted";
import Agree from "./Agree";

function SignUpMain() {
  const [signUp, setSignUp] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const [authCode, setAuthCode] = useState("");

  const HandleSignUp = (event, type) => {
    setSignUp({
      ...signUp,
      [type]: event,
    });
  };

  const HandleAuthCode = (event) => {
    setAuthCode(event);
  };

  return (
    <StyledDiv>
      <StyledH1>회원가입</StyledH1>
      <Routes>
        <Route
          path="/"
          element={<SignUpName HandleSignUp={HandleSignUp} />}
        ></Route>
        <Route
          path="/number"
          element={
            <SignUpNumber
              HandleSignUp={HandleSignUp}
              HandleAuthCode={HandleAuthCode}
            />
          }
        ></Route>
        <Route
          path="/checknumber"
          element={<SignUpCheckNumber authCode={authCode} />}
        ></Route>
        <Route
          path="/pw1"
          element={<SignUpPw1 HandleSignUp={HandleSignUp} />}
        ></Route>
        <Route path="/pw2" element={<SignUpPw2 signUpData={signUp} />}></Route>
        <Route path="/agree" element={<Agree />}></Route>
        <Route
          path="/complete"
          element={<CompleteSignUp signUpData={signUp} />}
        ></Route>
        <Route path="/existed" element={<AlreadyExisted />}></Route>
      </Routes>
    </StyledDiv>
  );
}

const StyledH1 = styled.h1`
  padding: 30px;
  margin: 0px;
  background-color: #fff9be;
`;

const StyledDiv = styled.div`
  background-color: #fff9be;
  padding-top: 15vh;
`;
export default SignUpMain;
