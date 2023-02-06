import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpNumber({ HandleSignUp, HandleAuthCode }) {
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const changeNumber = (event) => {
    setPhone(event);
  };

  const moveToCheckNumber = () => {
    navigate("/signup/checknumber");
  };

  const moveToExisted = () => {
    navigate("/signup/existed");
  };

  const phoneCheck = (phone) => {
    axios
      .post("http://localhost:5000/common/phone-check/", {
        phone: phone,
      })
      .then((response) => {
        if (response.data === true) {
          // 이미 있다고 페이지 바꿔야함
          moveToExisted();
        } else {
          // send-auth-code api 실행
          axios
            .post("http://localhost:5000/common/send-auth-code/", {
              phone: phone,
            })
            .then((response) => {
              console.log(response.data);
              HandleAuthCode(response.data);
            })
            .catch((error) => console.log(error));

          // 인증번호 입력 화면으로 전환
          moveToCheckNumber();
        }
      })
      .catch((error) => console.log(error));
  };

  // const sendAuthCode = () => {
  //   axios.post(baseUrl + '/common/send-auth-code', {
  //     phone: axiosNumber,
  //   }).then((response) => console.log(response.data))
  //     .catch((error) => console.log(error));
  // };

  return (
    <div>
      <h1>전화번호를 입력해주세요</h1>
      <input
        type="text"
        value={phone}
        onChange={(event) => {
          changeNumber(event.target.value);
        }}
      />
      <button
        onClick={() => {
          HandleSignUp(phone, "phone");
          phoneCheck(phone);
          // moveToCheckNumber();
        }}
      >
        등록
      </button>
    </div>
  );
}

export default SignUpNumber;
