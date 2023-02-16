import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../store/baseURL";
import styled from "styled-components";

function SignUpPw2({ signUpData }) {
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
      .post("/common/sign-up", {
        name: signUpData.name,
        password: signUpData.password,
        phone: signUpData.phone,
      })
      .then((response) => {
        console.log("sign up done");
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
      alert("비밀번호가 일치하지 않습니다! 다시 입력해주세요 :)");
      backToPassword2();
      setPw2("");
    }
  };

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
  background-color: #fff9be;
  height: 100vh;
`;

const StyledDiv2 = styled.div`
  background-color: white;
  border: 1px whitesmoke solid;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  width: 90vh;
  height: 40vh;
  text-align: left;
  margin: auto;
`;

const StyledP = styled.p`
  font-size: 25px;
  margin-left: 50px;
  margin-top: 70px;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  width: 50vh;
  height: 30px;
  font-size: 15px;
  padding: 10px;
  margin-right: 15px;
  margin-left: 50px;
  :focus {
    outline: 3px solid yellow;
  }
`;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  margin-left: 50px;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 700;
  background-color: #f7c815;
  font-size: 15px;
  font-family: "Chilgok_Cye";
  padding: 10px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  :hover {
    letter-spacing: 2px;
    transform: scale(1.2);
    cursor: pointer;
    background-color: #ff5f2e;
    color: white;
    outline: 0;
  }
`;
export default SignUpPw2;
