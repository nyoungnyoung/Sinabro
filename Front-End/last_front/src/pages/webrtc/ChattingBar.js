import React from "react";
import styled from "styled-components";

function ChattingBar({ changeChatOff }) {
  return (
    <StyledDiv>
      <h3>채팅창</h3>
      <ChatDiv>채팅입력</ChatDiv>
      <StyledButton onClick={changeChatOff}>메뉴바로 돌아가기</StyledButton>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  width: 20%;
  height: 90vh;
  background-color: black;
  color: white;
`;

const ChatDiv = styled.div`
  margin-left: 14px;
  width: 90%;
  height: 70vh;
  border: 2px solid white;
  background-color: whitesmoke;
  border-radius: 10px;
`;
const StyledButton = styled.button`
  box-shadow: inset 2px 2px 4px gray, inset -2px -2px 4px white;
  font-size: 100%;
  border-radius: 10px;
  font-weight: 1000;
  margin-top: 15px;
  width: 90%;
  height: 8%;
  background-color: #fff3c6;
  border: 0px #f7c815 solid;
  cursor: pointer;
  :hover {
    background-color: #f7c815;
    color: black;
    font-weight: 1000;
  }
`;
export default ChattingBar;
