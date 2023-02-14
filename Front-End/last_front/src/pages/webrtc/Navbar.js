import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Navbar({ handleMode, handleScreenShare }) {

  const role = "teacher";

  // const [mode, setMode] = useState("focus");

  const changeShare = async () => {
    await handleScreenShare();
    // setMode("share");
    handleMode("share");
  };
  // console.log(mode);

  const changeFocus = () => {
    handleMode("focus");
  };
  // console.log(mode);

  const changeTogether = () => {
    handleMode("together");
  };
  // console.log(mode);

  // useEffect(() => {
  //   handleMode(mode);
  // }, [mode]);

  const navigate = useNavigate();

  const moveToMain = () => {
    navigate("/main");
  };

  if (role === "teacher") {
    return (
      // 강사일때
      <Wrapper>
        <HeaderWrapper>
          <StyledButton onClick={moveToMain}>시나브로</StyledButton>
        </HeaderWrapper>

        <LeftWrapper>
          <ModeButton onClick={changeShare}>share</ModeButton>
          <ModeButton onClick={changeFocus}>focus</ModeButton>
          <ModeButton onClick={changeTogether}>together</ModeButton>
        </LeftWrapper>
      </Wrapper>
    );
  } else {
    return (
      // 수강생일 때
      <Wrapper>
        <HeaderWrapper>
          <StyledButton onClick={moveToMain}>시나브로</StyledButton>
        </HeaderWrapper>

        <LeftWrapper>
          <StyledP>
            현재 수강하고 계신 강의는 000 강사님의 00000 교실입니다 :){" "}
          </StyledP>
        </LeftWrapper>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  margin: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  // position: fixed;
  width: 100%;
  align-items: center;
  border-bottom: solid rgba(248, 208, 83, 0.5);
  background-color: #fbc300;
  z-index: 999;
`;

const HeaderWrapper = styled.div`
  margin: 0 2em 0 2em;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const LeftWrapper = styled.div`
  width: 800px;
`;

const StyledP = styled.p`
  color: black;
  font-weight: 700;
`;

const StyledButton = styled.button`
  font-family: "Chilgok_Cye";
  background-color: #fbc300;
  font-size: 30px;
  width: 150px;
  height: 40px;
  border: 0px solid #583e26;
  border-radius: 15px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background-color: #583e26;
    color: white;
  }
`;

const ModeButton = styled.button`
  width: 110px;
  height: 40px;
  margin-left: 10px;
  border-radius: 15px;
  border: 0px solid red;
  background-color: #331400;
  color: white;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: red;
  }
`;
export default Navbar;
