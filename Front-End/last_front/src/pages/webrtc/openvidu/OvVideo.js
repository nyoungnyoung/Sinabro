import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const StyledVideo = styled.video`
  width: 90%;
  ${({ user, mode }) => {
    if (mode === "focus") {
      if (user + 1 === 1) {
        return css`
          width: 65%;
          margin-top: 4vh;
          margin-left: 2vw;
        `;
      } else if (user + 1 === 2) {
        return css`
          width: 90%;
          padding-left: 2vw;
          margin-top: 15vh;
          /* grid-template-columns: 50% 50%; */
          /* grid-template-rows: 1fr; */
        `;
      } else if (user + 1 === 3) {
        return css`
          width: 65%;
          margin-top: 2vh;
          padding-left: 8vw;
          /* grid-template-columns: 50% 50%; */
          /* grid-template-rows: 1fr 1fr; */
        `;
      } else if (user + 1 === 4) {
        return css`
          width: 65%;
          margin-top: 2vh;
          padding-left: 8vw;
        `;
      } else if (user + 1 === 5) {
        return css`
          margin-top: 3vh;
          padding-left: 23px;
          /* grid-template-columns: 1fr 1fr 1fr; */
          /* grid-template-rows: 1fr 1fr; */
        `;
      } else if (user + 1 >= 6) {
        return css`
          margin-top: 3vh;
          padding-left: 23px;
          /* grid-template-columns: 1fr 1fr 1fr; */
          /* grid-template-rows: 1fr 1fr; */
        `;
      }
    } else if (mode === "together") {
      if (user + 1 === 1) {
        return css`
          border-radius: 50%;
          width: 65%;
          margin-top: 4vh;
          margin-left: 2vw;
        `;
      } else if (user + 1 === 2) {
        return css`
          border-radius: 50%;
          width: 90%;
          padding-left: 2vw;
          margin-top: 15vh;
          /* grid-template-columns: 50% 50%; */
          /* grid-template-rows: 1fr; */
        `;
      } else if (user + 1 === 3) {
        return css`
          border-radius: 50%;
          width: 65%;
          margin-top: 2vh;
          padding-left: 8vw;
          /* grid-template-columns: 50% 50%; */
          /* grid-template-rows: 1fr 1fr; */
        `;
      } else if (user + 1 === 4) {
        return css`
          border-radius: 50%;
          width: 65%;
          margin-top: 2vh;
          padding-left: 8vw;
        `;
      } else if (user + 1 === 5) {
        return css`
          border-radius: 50%;
          margin-top: 3vh;
          padding-left: 23px;
          /* grid-template-columns: 1fr 1fr 1fr; */
          /* grid-template-rows: 1fr 1fr; */
        `;
      } else if (user + 1 >= 6) {
        return css`
          margin-top: 3vh;
          padding-left: 23px;
          /* grid-template-columns: 1fr 1fr 1fr; */
          /* grid-template-rows: 1fr 1fr; */
        `;
      }
    }
  }};
`;

const OvVideo = ({ streamManager, user, mode }) => {
  const videoRef = useRef();

  console.log("비디오입니당", user);
  // 변화되는 mode값까지는 출력됨!
  console.log("mode입니당", mode);

  useEffect(() => {
    if (streamManager && !!videoRef) {
      streamManager.addVideoElement(videoRef.current);
    }
  }, []);

  useEffect(() => {
    if (streamManager && !!videoRef) {
      streamManager.addVideoElement(videoRef.current);
    }
  }, [streamManager]);

  return <StyledVideo autoPlay={true} ref={videoRef} user={user} />;
};

export default OvVideo;
