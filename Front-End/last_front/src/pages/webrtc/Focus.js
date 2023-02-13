import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import UserVideoComponent from "./openvidu/UserVideoComponent";
// import Zoom from "./Zoom";

function Focus({ glassOn, info, OV, session, handleInfo }) {
  const screenShare = async () => {
    try {
      let newPublisher = await OV.initPublisherAsync(undefined, {
        audioSource: undefined, // The source of audio. If undefined default microphone
        videoSource: "screen", // The source of video. If undefined default webcam
        publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
        publishVideo: true, // Whether you want to start publishing with your video enabled or not
        resolution: "1280x960", // The resolution of your video
        frameRate: 30, // The frame rate of your video
        insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
        mirror: false, // Whether to mirror your local video or not
      });

      newPublisher.once("accessAllowed", (event) => {
        newPublisher.stream
          .getMediaStream()
          .getVideoTracks()[0]
          .addEventListener("ended", async () => {
            console.log('User pressed the "Stop sharing" button');
            let newPublisher = await OV.initPublisherAsync(undefined, {
              audioSource: undefined, // The source of audio. If undefined default microphone
              videoSource: undefined, // The source of video. If undefined default webcam
              publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
              publishVideo: true, // Whether you want to start publishing with your video enabled or not
              resolution: "640x480", // The resolution of your video
              frameRate: 30, // The frame rate of your video
              insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
              mirror: false, // Whether to mirror your local video or not
            });

            await session.unpublish(info.publisher);
            await session.publish(newPublisher);

            handleInfo(newPublisher, "publisher");
          });
      });
      await session.unpublish(info.publisher);
      await session.publish(newPublisher);
      handleInfo(newPublisher, "publisher");
    } catch (e) {
      console.error(e);
    }
  };
  // console.log(glassOn);

  const [over, setOver] = useState(false);

  const changeToSecond = () => {
    setOver(!over);
    console.log(over);
  };

  const glassDiv = useRef();

  const user = info.subscribers.length;
  console.log("참여자 수: " + user);

  const mouseMove = (event) => {
    // console.log(event);

    // 마우스 위치
    // console.log(event);
    const pageX = event.pageX;
    const pageY = event.pageY;

    // StyledGlass.style.left = clientX + console.log("clientX", clientX);
    // console.log("pageX", pageX);
    // console.log("pageY", pageY);

    // const left = glassDiv.current.pageX + pageX;
    // const top = glassDiv.current.pageY + pageY;

    // console.log("left", left);
    // console.log("top", top);
  };

  return (
    <StyledDiv user={user}>
      <UserVideoComponent streamManager={info.publisher} user={user} />
      {/* <button onClick={screenShare}>화면공유</button> */}

      {info.subscribers.map((sub, i) => (
        <div key={i}>
          <UserVideoComponent streamManager={sub} user={user} />
        </div>
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  /* height: 90vh; */
  color: white;
  background-color: black;
  /* position: relative; */
  /* justify-items: center;
  justify-content: center; */
  display: grid;

  ${({ user }) => {
    if (user + 1 === 1) {
      return css`
        grid-template-columns: 100%;
      `;
    } else if (user + 1 === 2) {
      return css`
        grid-template-columns: 50% 50%;
        /* grid-template-rows: 1fr; */
      `;
    } else if (user + 1 === 3) {
      return css`
        grid-template-columns: 50% 50%;
        /* grid-template-rows: 1fr 1fr; */
      `;
    } else if (user + 1 === 4) {
      return css`
        grid-template-columns: 50% 50%;
        /* grid-template-rows: 1fr 1fr; */
      `;
    } else if (user + 1 === 5) {
      return css`
        grid-template-columns: 1fr 1fr 1fr;
        /* grid-template-rows: 1fr 1fr; */
      `;
    } else if (user + 1 >= 6) {
      return css`
        grid-template-columns: 1fr 1fr 1fr;
        /* grid-template-rows: 1fr 1fr; */
      `;
    }
  }};
`;

// const TeacherDiv = styled.div`

// `

const StyledGlass = styled.div`
  width: 200px;
  height: 150px;
  position: absolute;
  border: 5px yellow solid;
  border-radius: 15px;
  left: 0;
  top: 30;
`;

const TwoDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const TwoDiv2 = styled.div`
  width: 600px;
  height: 50vh;
  background-color: green;
  margin-top: 100px;
  margin-left: 13px;
  margin-right: 13px;
  position: relative;
`;

const ThreeDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ThreeDiv2 = styled.div`
  width: 40%;
  height: 280px;
  background-color: green;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

const FourDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FourDiv2 = styled.div`
  width: 40%;
  height: 280px;
  background-color: green;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

const FiveDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FiveDiv2 = styled.div`
  width: 32%;
  height: 250px;
  background-color: green;
  margin-top: 40px;
  margin-left: 15px;
  margin-right: 15px;
`;
const SixDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const SixDiv2 = styled.div`
  width: 32%;
  height: 250px;
  background-color: green;
  margin-top: 40px;
  margin-left: 15px;
  margin-right: 15px;
`;

const SevenDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SevenButton = styled.div`
  color: white;
  font-size: 30px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  :hover {
    // text-shadow: 3px 3px 3px yellow;
    color: red;
  }
`;

export default Focus;
