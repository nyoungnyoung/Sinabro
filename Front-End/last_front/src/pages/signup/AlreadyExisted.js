import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AlreadyExisted = () => {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate("/login");
  };

  return (
    <StyledDiv>
      <div>
        <StyledH3>이미 존재하는 전화번호 입니다. 로그인해주세요!</StyledH3>
      </div>
      <StyledButton onClick={moveToLogin}>로그인 하러가기</StyledButton>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: #fff9be;
  height: 100vh;
`;

const StyledH3 = styled.h3`
  margin: 0;
  padding: 15px;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 700;
  background-color: #f7c815;
  font-size: 20px;
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
export default AlreadyExisted;
