import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ChattingBar from "./ChattingBar";

function SideBar({ handleGlass, info, handleLeaveSession }) {
  // 사용자 role 스토어에서 가져오기
  const role = useSelector(state => state.login.token.role);
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

  // 마이크 전체 제어(강사에게만 보이는 버튼)
  const [allMic, setAllMic] = useState(true);
  const allMicOn = () => {
    setAllMic(true);
  };
  const allMicOff = () => {
    setAllMic(false);
  };

  // 채팅장이 꺼져있을 때
  if (chat === false) {
    return (
      <StyledDiv>
        {/* <StyledH3>메뉴바</StyledH3> */}
        {/* <p>WebRTC 메뉴바</p> */}
        <MicDiv>
          <MicDiv2>
            <MicImg src="/img/mic_black.png" alt="mic" />
            <h3>마이크</h3>
          </MicDiv2>
          <div>
            <OnButton
              style={
                mic ? { backgroundColor: "green" } : { backgroundColor: "gray" }
              }
              onClick={() => {
                changeMicOn();
                info.publisher.publishAudio(true);
              }}
            >
              켜짐
            </OnButton>
            <OffButton
              style={
                !mic ? { backgroundColor: "red" } : { backgroundColor: "gray" }
              }
              onClick={() => {
                changeMicOff();
                info.publisher.publishAudio(false);
              }}
            >
              꺼짐
            </OffButton>
          </div>
        </MicDiv>

        <VideoDiv>
          <VideoDiv2>
            <VideoImg src="/img/video_black.png" alt="mic" />
            <h3>비디오</h3>
          </VideoDiv2>
          <div>
            <OnButton
              style={
                video
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "gray" }
              }
              onClick={() => {
                changeVideoOn();
                info.publisher.publishVideo(true);
              }}
            >
              켜짐
            </OnButton>
            <OffButton
              style={
                !video
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "gray" }
              }
              onClick={() => {
                changeVideoOff();
                info.publisher.publishVideo(false);
              }}
            >
              꺼짐
            </OffButton>
          </div>
        </VideoDiv>

        <GlassDiv>
          <GlassDiv2>
            <GlassImg src="/img/zoom_black.png" alt="glass" />
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
              onClick={() => {
                changeGlassOn();
                handleGlass(true);
              }}
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
              onClick={() => {
                changeGlassOff();
                handleGlass(false);
              }}
            >
              꺼짐
            </OffButton>
          </div>
        </GlassDiv>

        {role === "teacher" ? (
          <MicDiv>
            <MicDiv2>
              <VideoImg src="/img/mic_black.png" alt="mic" />
              <h3>전체마이크</h3>
            </MicDiv2>
            <div>
              <OnButton
                style={
                  allMic
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "gray" }
                }
                onClick={() => {
                  allMicOn();
                  // info.publisher.publishVideo(true);
                }}
              >
                켜짐
              </OnButton>
              <OffButton
                style={
                  !allMic
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "gray" }
                }
                onClick={() => {
                  allMicOff();
                  // info.publisher.publishVideo(false);
                }}
              >
                꺼짐
              </OffButton>
            </div>
          </MicDiv>
        ) : null}

        <ChatDiv>
          <ChatDiv2>
            <GlassImg src="/img/chatting_black.png" alt="chatting" />
            <h3>채팅</h3>
          </ChatDiv2>
          <OnChatButton onClick={changeChatOn}>채팅장 열기</OnChatButton>
        </ChatDiv>

        <StyledButton
          onClick={() => {
            handleLeaveSession();
            moveToMain();
          }}
        >
          메인으로 나가기
        </StyledButton>
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
  background-color: black;
`;
// const StyledH3 = styled.h3`
//   color: white;
// `;
const MicDiv = styled.div`
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  height: 13%;
  background-color: #fff3c6;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: inset 2px 2px 4px gray, inset -2px -2px 4px white;
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
  margin-top: 5%;
  width: 90%;
  height: 13%;
  background-color: #fff3c6;
  border-radius: 10px;
  box-shadow: inset 2px 2px 4px gray, inset -2px -2px 4px white;
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
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  height: 13%;
  border-radius: 10px;
  background-color: #fff3c6;
  box-shadow: inset 2px 2px 4px gray, inset -2px -2px 4px white;
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
  box-shadow: inset 2px 2px 4px gray, inset -2px -2px 4px white;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  height: 13%;
  border-radius: 10px;
  background-color: #fff3c6;
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
  border-radius: 10px;
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
  border-radius: 10px;
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
  border-radius: 10px;
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
  border-radius: 10px;
  font-size: 100%;
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

export default SideBar;
