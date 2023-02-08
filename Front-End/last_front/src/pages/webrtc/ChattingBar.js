import React from "react";
import styled from "styled-components";

function ChattingBar({ changeChatOff }) {
  return (
    <StyledDiv>
      <h3>채팅창</h3>
      <div>채팅입력</div>
      <StyledButton onClick={changeChatOff}>메뉴바로 돌아가기</StyledButton>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  width: 20%;
  height: 90vh;
  background-color: whitesmoke;
`;

const StyledButton = styled.button`
  font-size: 100%;
  font-weight: 1000;
  margin-top: 15px;
  width: 90%;
  height: 8%;
  background-color: gray;
  border: 0px #f7c815 solid;
  cursor: pointer;
  :hover {
    background-color: #f7c815;
    color: white;
    font-weight: 1000;
  }
`;
export default ChattingBar;
