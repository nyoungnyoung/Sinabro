import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpPw2({ signUpData }) {
  //제 커서 보이시나요 네네!
  //컴포넌트에서 props는 기본적으로 머냐...그...객체로 오는디
  //거기서 구조분해할당해서 바로 키값 받아오는 게 위의 방법이거든요
  //근데 중괄호가 안쳐져 있어서 함수가 없는 파라미터로 인식하고 undefined로 넣은거같아요
  // 아아아앙아...그렇군요..! 은인이십니다ㅜㅜㅜㅜ
  // 나가볼게요~~
  //아닙니당
  //화이팅하세여 ㅔ네네네!!
  // 감사합ㄴ디ㅏ!!!여
  const [pw2, setPw2] = useState("");

  const navigate = useNavigate();

  const changePw2 = (event) => {
    setPw2(event);
  };

  const moveToComplete = () => {
    navigate("/signup/complete");
  };

  const backToPassword2 = () => {
    navigate("/signup/pw2");
  };

  const apiSignUpData = () => {
    axios
      .post("http//localhost:5000/common/sign-up", {
        name: signUpData.name,
        password: signUpData.password,
        phone: signUpData.phone,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const checkPassword = () => {
    if (pw2 === signUpData.password) {
      apiSignUpData();
      moveToComplete();
    } else {
      backToPassword2();
      setPw2("");
    }
  };

  console.log("signUpData", signUpData); //이거 출력값 보여주세여 주석으로 보여주심 될 거같아요 캡처해서 보내드렸어요!!
  console.log("signUpData password", signUpData.password); //undefined입니다ㅜㅜ
  //아니 이게 왜 안돼 그러니까요ㅜㅜㅜ
  //다시해보시겟어요??
  // 넵넵!! 됩니당!!! 어떻게 하신건가요...??네네!!
  //스크롤 올려주세여

  return (
    <div>
      <h1>비밀번호를 다시 한 번 입력해주세요</h1>
      <input
        type="text"
        value={pw2}
        onChange={(event) => {
          changePw2(event.target.value);
        }}
      />
      <button
        onClick={() => {
          checkPassword();
        }}
      >
        확인
      </button>
    </div>
  );
}

export default SignUpPw2;
