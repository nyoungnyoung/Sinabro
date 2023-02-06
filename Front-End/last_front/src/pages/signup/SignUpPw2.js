import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function SignUpPw2({ signUpData }) {
  //컴포넌트에서 props는 기본적으로 머냐...그...객체로 오는디
  //거기서 구조분해할당해서 바로 키값 받아오는 게 위의 방법이거든요
  //근데 중괄호가 안쳐져 있어서 함수가 없는 파라미터로 인식하고 undefined로 넣은거같아요
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

  // console.log("signUpData", signUpData);
  // console.log("signUpData password", signUpData.password);

  return (
    <StyledDiv>
      <StyledDiv2>
        <StyledP>사용하실 비밀번호를 다시 한 번 입력해주세요.</StyledP>
        <StyledInput
          type="text"
          value={pw2}
          onChange={(event) => {
            changePw2(event.target.value);
          }}
          placeholder="여기에 비밀번호를 다시 한 번 입력해주세요 :)"
        />
        <StyledButton
          onClick={() => {
            checkPassword();
          }}
        >
          확인
        </StyledButton>
      </StyledDiv2>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  // background-color: #fff9be;
  // background-color: white;
  height: 100vh;
`;

const StyledDiv2 = styled.div`
  background-color: white;
  border: 1px black solid;
  width: 90vh;
  height: 30vh;
  text-align: left;
  margin: auto;
`;

const StyledP = styled.p`
  font-size: 25px;
  margin-left: 50px;
  margin-top: 40px;
`;

const StyledInput = styled.input`
  width: 50vh;
  height: 30px;
  font-size: 15px;
  padding: 10px;
  margin-right: 15px;
  margin-left: 50px;
`;

const StyledButton = styled.button`
  width: 60px;
  height: 50px;
  font-size: 15px;
`;
export default SignUpPw2;
