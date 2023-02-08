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
      <h3>메뉴바</h3>
      {/* <p>WebRTC 메뉴바</p> */}
      <MicDiv>
        <MicDiv2>
          <MicImg src="/img/mic.png" alt="mic" />
          <h3>마이크</h3>
        </MicDiv2>
        <div>
          <OnButton>켜짐</OnButton>
          <OffButton>꺼짐</OffButton>
        </div>
      </MicDiv>

      <VideoDiv>
        <VideoDiv2>
          <VideoImg src="/img/video.png" alt="mic" />
          <h3>비디오</h3>
        </VideoDiv2>
        <div>
          <OnButton>켜짐</OnButton>
          <OffButton>꺼짐</OffButton>
        </div>
      </VideoDiv>

      <GlassDiv>
        <GlassDiv2>
          <GlassImg src="/img/glass.png" alt="glass" />
          <h3>돋보기</h3>
        </GlassDiv2>
        <div>
          <OnButton>켜짐</OnButton>
          <OffButton>꺼짐</OffButton>
        </div>
      </GlassDiv>
      <ChatDiv>
        <ChatDiv2>
          <GlassImg src="/img/chatting.png" alt="chatting" />
          <h3>채팅</h3>
        </ChatDiv2>
        <OnButton>켜짐</OnButton>
        <OffButton>꺼짐</OffButton>
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
  height: 15%;
  background-color: #9f9494;
  margin-bottom: 10px;
`;

const MicDiv2 = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
`;

const MicImg = styled.img`
  margin-right: 10px;
  padding-top: 10px;
  width: 30px;
  height: 30px;
`;

const VideoDiv = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  height: 15%;
  background-color: #9f9494;
  margin-bottom: 10px;
`;

const VideoDiv2 = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
`;

const VideoImg = styled.img`
  padding-top: 10px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const GlassDiv = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  height: 15%;
  background-color: #9f9494;
  margin-bottom: 10px;
`;

const GlassDiv2 = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
`;

const GlassImg = styled.img`
  padding-top: 10px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const ChatDiv = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  height: 15%;
  background-color: #9f9494;
  margin-bottom: 85px;
`;

const ChatDiv2 = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
`;

const OnButton = styled.button`
  width: 60px;
  background-color: green;
  border: 0px solid green;
  color: white;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

const OffButton = styled.button`
  width: 60px;
  background-color: red;
  border: 0px solid red;
  color: white;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
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
export default SideBar;
