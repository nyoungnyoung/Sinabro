import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate("/main");
  };
  return (
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
export default Navbar;
