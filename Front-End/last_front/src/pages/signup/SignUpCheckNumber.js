import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

function SignUpCheckNumber({ authCode }) {
  const [checkNumber, setCheckNumber] = useState("");

  const navigate = useNavigate();

  const changeCheckNumber = (event) => {
    setCheckNumber(event);
  };

  const moveToPw1 = () => {
    navigate("/signup/pw1");
  };

  //   const sendAuthCode = () => {
  //     axios.post(baseUrl + '/common/send-auth-code', {
  //       phone: axiosNumber,
  //     }).then((response) => console.log(response.data))
  //       .catch((error) => console.log(error));
  // };

  console.log(checkNumber);
  console.log(authCode);
  return (
    <div>
      <h1>전화번호로 전송된 인증번호를 입력해주세요</h1>
      <input
        type="text"
        value={checkNumber}
        onChange={(event) => {
          changeCheckNumber(event.target.value);
        }}
      />
      <button
        onClick={() => {
          moveToPw1();
        }}
      >
        확인
      </button>
    </div>
  );
}

export default SignUpCheckNumber;
