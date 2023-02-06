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
  font-size: 20px;
  padding: 10px;
  margin-right: 15px;
  margin-left: 50px;
`;

const StyledButton = styled.button`
  width: 60px;
  height: 50px;
  font-size: 15px;
`;
export default SignUpPw1;
