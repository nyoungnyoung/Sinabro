import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function CompleteSignUp({ signUpData }) {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate("/login");
  };
  return (
    <StyledDiv>
      <div>
        <StyledP>안녕하세요, {signUpData.name}님</StyledP>
        <StyledP>
          고객님께서 가입할 때 사용하신 전화번호와 비밀번호를 이용해서 사이트를
          이용해주시면 됩니다!
        </StyledP>
        <br />
        <StyledButton onClick={moveToLogin}>로그인하러 가기</StyledButton>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  background-color: #fff9be;
  height: 100vh;
`;

const StyledP = styled.p`
  font-size: 23px;
  margin: 0;
  padding: 10px;
`;

const StyledButton = styled.button`
  width: 200px;
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
export default CompleteSignUp;
