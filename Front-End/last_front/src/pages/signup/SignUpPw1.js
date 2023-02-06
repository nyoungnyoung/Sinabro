import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPw1({ HandleSignUp }) {
  const [pw1, setPw1] = useState("");

  const navigate = useNavigate();

  const changePw1 = (event) => {
    setPw1(event);
  };
  const moveToPw2 = () => {
    navigate("/signup/pw2");
  };

  return (
    <div>
      <h1>비밀번호를 입력해주세요</h1>
      <input
        type="text"
        vlaue={pw1}
        onChange={(event) => {
          changePw1(event.target.value);
        }}
      />
      <button
        onClick={() => {
          moveToPw2();
          HandleSignUp(pw1, "password");
        }}
      >
        등록
      </button>
    </div>
  );
}

export default SignUpPw1;
