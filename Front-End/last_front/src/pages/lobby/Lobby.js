import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./Lobby.css";

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
      <div className="image">
        <StyledP>시나브로</StyledP>
        <StyledP2>: 조금씩 천천히</StyledP2>
        <StyledDiv3>
          <StyledButton onClick={moveToSignUp}>회원가입</StyledButton>
          <StyledButton onClick={moveToLogin}>로그인</StyledButton>
        </StyledDiv3>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background-color: #fff9be;
  /* background-color: whitesmoke; */
  /* background-size: cover; */
  height: 100vh;
`;

// const StyledDiv2 = styled.div`
//   background-image: url("src\image\blackboard.png");
//   background-repeat: no-repeat;
//   background-position: center;
// `;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledP = styled.p`
  font-size: 120px;
  margin: 0;
  padding-top: 130px;
  text-shadow: 3px 3px 3px gray;
  font-family: "Chilgok_Cye";
  color: whitesmoke;
  font-weight: 700;
`;

const StyledP2 = styled.p`
  color: whitesmoke;
  font-weight: 700;
  font-family: "Chilgok_Cye";
  font-size: 30px;
  text-shadow: 2px 2px 2px gray;
  padding: 0;
  margin-top: 0;
  margin-bottom: 40px;
`;
const StyledButton = styled.button`
  font-weight: 700;
  width: 150px;
  // background-color: #300e01;
  // color: white;
  background-color: #f7c815;
  font-size: 25px;
  font-family: "Chilgok_Cye";
  margin-top: 45px;
  margin-left: 30px;
  margin-right: 30px;
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
