import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Agree = () => {
  const navigate = useNavigate();

  const [agree, setAgree] = useState(false);

  const changeAgree = () => {
    setAgree(!agree);
  };

  const moveToPw1 = () => {
    navigate("/signup/pw1");
  };

  return (
    <StyledDiv>
      <StyledDiv2>
        <StyledP>사이트 이용을 위한 약관동의를 해주세요.</StyledP>
        <AgreeDiv>개인정보 이용 안내</AgreeDiv>
        <StyledDiv3>
          <input type="checkbox" onClick={changeAgree} />
          <p>약관에 동의합니다</p>
        </StyledDiv3>
        {agree && <StyledButton onClick={moveToPw1}>다음 단계로</StyledButton>}
      </StyledDiv2>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  background-color: #fff9be;
  height: 540px;
`;

const StyledDiv2 = styled.div`
  background-color: white;
  border: 1px whitesmoke solid;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  width: 90vh;
  height: 50vh;
  text-align: left;
  margin: auto;
`;

const StyledP = styled.p`
  font-size: 25px;
  margin-left: 50px;
  margin-top: 30px;
`;

const AgreeDiv = styled.div`
  border: 1px solid black;
  width: 75vh;
  height: 20vh;
  margin-left: 50px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 50px;
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
export default Agree;
