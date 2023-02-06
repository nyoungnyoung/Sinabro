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
    <StyledDiv>
      {/* <h1>Lobby</h1> */}
      {/* <p>제일 처음에 로그인 하기 전에 나오는 메인페이지</p> */}
      <div>
        <StyledP>시나브로</StyledP>
        <StyledP2>: 조금씩 천천히</StyledP2>
        <StyledButton
          className="w-btn-outline w-btn-red-outline"
          onClick={moveToSignUp}
        >
          회원가입
        </StyledButton>
        <br />
        <StyledButton onClick={moveToLogin}>로그인</StyledButton>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  // background-color: #fff9be;
  background-size: cover;
  height: 100vh;
`;
const StyledP = styled.p`
  font-size: 120px;
  margin: 0;
  padding-top: 100px;
  font-family: "Chilgok_Cye";
`;

const StyledP2 = styled.p`
  font-family: "Chilgok_Cye";
  font-size: 30px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 40px;
`;
const StyledButton = styled.button`
  width: 150px;
  // background-color: #300e01;
  // color: white;
  font-size: 25px;
  font-family: "Chilgok_Cye";
  margin-top: 30px;
  cursor: pointer;
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

export default Lobby;
