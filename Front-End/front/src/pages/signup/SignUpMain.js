import React from "react";
// import { Route, Routes } from "react-router-dom";
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

function SignUpMain() {
  return (
    <div>
      <h1>SignUp Main</h1>
      <SignUpId1 />
      <SignUpId2 />
      <SignUpPw1 />
      <SignUpPw2 />
      <SignUpPw3 />
      <SignUpName />
      <SignUpBirth />
      <SignUpPhone1 />
      <SignUpPhone2 />
      <SignUpAgree />
      <SignUpMsg />
    </div>
  );
}

export default SignUpMain;
