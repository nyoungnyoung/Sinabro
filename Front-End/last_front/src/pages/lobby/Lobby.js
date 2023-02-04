import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Lobby() {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate("/login");
  };

  const moveToSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="Lobby">
      {/* <h1>Lobby</h1> */}
      {/* <p>제일 처음에 로그인 하기 전에 나오는 메인페이지</p> */}
      <StyledH1>시나브로</StyledH1>
      <StyledButton onClick={moveToSignUp}>회원가입</StyledButton>
      <StyledButton onClick={moveToLogin}>로그인</StyledButton>
    </div>
  );
}

const StyledH1 = styled.h1`
  font-size: 100px;
`;
const StyledButton = styled.button`
  font-size: 40px;
  margin-top: 30px;
  margin-left: 30px;
  cursor: pointer;
`;

export default Lobby;
