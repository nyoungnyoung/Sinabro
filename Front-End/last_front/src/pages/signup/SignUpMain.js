import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUpCheckNumber from "./SignUpCheckNumber";
import SignUpName from "./SignUpName";
import SignUpNumber from "./SignUpNumber";
import SignUpPw1 from "./SignUpPw1";
import SignUpPw2 from "./SignUpPw2";
import CompleteSignUp from "./CompleteSignUp";
import AlreadyExisted from "./AlreadyExisted";

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

  console.log(signUp);

  return (
    <div>
      <h1>회원가입 페이지</h1>
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
        <Route path="/complete" element={<CompleteSignUp />}></Route>
        <Route path="/existed" element={<AlreadyExisted />}></Route>
      </Routes>
    </div>
  );
}

export default SignUpMain;
