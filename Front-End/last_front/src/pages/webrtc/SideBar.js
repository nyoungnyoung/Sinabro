import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/main");
  };
  return (
    <StyledDiv>
      <h1>메뉴바</h1>
      {/* <p>WebRTC 메뉴바</p> */}
      <MicDiv>
        <h3>마이크</h3>
        <div>
          <button>켜짐</button>
          <button>꺼짐</button>
        </div>
      </MicDiv>
      <MicDiv>
        <h3>비디오</h3>
        <div>
          <button>켜짐</button>
          <button>꺼짐</button>
        </div>
      </MicDiv>
      <GlassDiv>
        <h3>돋보기</h3>
        <div>
          <button>켜짐</button>
          <button>꺼짐</button>
        </div>
      </GlassDiv>
      <ChatDiv>
        <h3>채팅</h3>
      </ChatDiv>
      <StyledButton onClick={moveToMain}>메인으로 나가기</StyledButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 20%;
  height: 90vh;
  background-color: whitesmoke;
`;

const MicDiv = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  background-color: gray;
`;

const GlassDiv = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  background-color: gray;
  margin-bottom: 80%;
`;

const ChatDiv = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  background-color: gray;
  height: 5%;
`;

const StyledButton = styled.button`
  font-size: 100%;
  margin-top: 15px;
  width: 90%;
  height: 8%;
  background-color: gray;
  cursor: pointer;
  :hover {
    background-color: red;
    color: white;
  }
`;
export default SideBar;
