import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    <StyledDiv>
      <StyledDiv2>
        <StyledP>고객님이 사용하실 비밀번호를 입력해주세요.</StyledP>
        <StyledInput
          type="text"
          vlaue={pw1}
          onChange={(event) => {
            changePw1(event.target.value);
          }}
          placeholder="여기에 비밀번호를 입력해주세요 :)"
        />
        <StyledButton
          onClick={() => {
            moveToPw2();
            HandleSignUp(pw1, "password");
          }}
        >
          등록
        </StyledButton>
      </StyledDiv2>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background-color: #fff9be;
  // background-color: white;
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
  font-size: 20px;
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
export default SignUpPw1;
