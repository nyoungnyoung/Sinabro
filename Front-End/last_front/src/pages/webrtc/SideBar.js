import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ChattingBar from "./ChattingBar";

function SideBar({ handleGlass }) {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/main");
  };

  // 마이크
  const [mic, setMic] = useState(false);
  const changeMicOn = () => {
    setMic(true);
  };
  const changeMicOff = () => {
    setMic(false);
  };

  // 비디오
  const [video, setVideo] = useState(false);
  const changeVideoOn = () => {
    setVideo(true);
  };
  const changeVideoOff = () => {
    setVideo(false);
  };

  // 돋보기
  const [glass, setGlass] = useState(false);
  const changeGlassOn = () => {
    setGlass(true);
  };
  const changeGlassOff = () => {
    setGlass(false);
  };

  // 채팅창
  const [chat, setChat] = useState(false);
  const changeChatOn = () => {
    setChat(true);
  };
  const changeChatOff = () => {
    setChat(false);
  };

  // 채팅장이 꺼져있을 때
  if (chat === false) {
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
            <OnButton
              style={
                mic ? { backgroundColor: "green" } : { backgroundColor: "gray" }
              }
              onClick={changeMicOn}
            >
              켜짐
            </OnButton>
            <OffButton
              style={
                !mic ? { backgroundColor: "red" } : { backgroundColor: "gray" }
              }
              onClick={changeMicOff}
            >
              꺼짐
            </OffButton>
          </div>
        </MicDiv>

        <VideoDiv>
          <VideoDiv2>
            <VideoImg src="/img/video.png" alt="mic" />
            <h3>비디오</h3>
          </VideoDiv2>
          <div>
            <OnButton
              style={
                video
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "gray" }
              }
              onClick={changeVideoOn}
            >
              켜짐
            </OnButton>
            <OffButton
              style={
                !video
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "gray" }
              }
              onClick={changeVideoOff}
            >
              꺼짐
            </OffButton>
          </div>
        </VideoDiv>

        <GlassDiv>
          <GlassDiv2>
            <GlassImg src="/img/glass.png" alt="glass" />
            <h3>돋보기</h3>
          </GlassDiv2>
          <div>
            <OnButton
              // onClick={() => {
              //   handleGlass(true);
              // }}
              style={
                glass
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "gray" }
              }
              onClick={changeGlassOn}
            >
              켜짐
            </OnButton>
            <OffButton
              // onClick={() => {
              //   handleGlass(false);
              // }}
              style={
                !glass
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "gray" }
              }
              onClick={changeGlassOff}
            >
              꺼짐
            </OffButton>
          </div>
        </GlassDiv>

        <ChatDiv>
          <ChatDiv2>
            <GlassImg src="/img/chatting.png" alt="chatting" />
            <h3>채팅</h3>
          </ChatDiv2>
          <OnChatButton onClick={changeChatOn}>채팅장 열기</OnChatButton>
        </ChatDiv>

        <StyledButton onClick={moveToMain}>메인으로 나가기</StyledButton>
      </StyledDiv>
    );
  } else {
    // 채팅장이 켜져있을 때
    return <ChattingBar changeChatOff={changeChatOff} />;
  }
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
  background-color: gray;
  border: 0px solid green;
  color: white;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  :hover {
    background-color: green;
  }
`;

const OnChatButton = styled.button`
  width: 100px;
  background-color: gray;
  border: 0px solid green;
  color: white;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  :hover {
    background-color: green;
  }
`;

const OffButton = styled.button`
  width: 60px;
  background-color: gray;
  border: 0px solid red;
  color: white;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  :hover {
    background-color: red;
  }
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
