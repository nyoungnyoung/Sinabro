import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function KakaoSignUp() {
  const navigate = useNavigate();

  const moveKakao = () => {
    navigate("/signup/kakao");
  };

  return (
    <StyledDiv onClick={moveKakao}>
      <h3>카카오톡 회원가입</h3>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 60%;
  height: 100px;
  border: 1px solid black;
  line-height: 58px;
  margin: auto;
  cursor: pointer;
`;
export default KakaoSignUp;
