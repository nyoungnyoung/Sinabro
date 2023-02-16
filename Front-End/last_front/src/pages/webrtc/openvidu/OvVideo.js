import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const StyledVideo = styled.video`
  width: 100%;
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
      // together모드일때
      return css`
        padding: 0%;
        margin-left: 20px;
        margin-top: 20px;
        border-radius: 50%;
      `;
    }
  }};
`;

const OvVideo = ({ streamManager, user, mode }) => {
  const videoRef = useRef();

  // console.log("비디오입니당", user);
  // console.log("mode입니당", mode);

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

  return <StyledVideo autoPlay={true} ref={videoRef} user={user} mode={mode} />;
};

export default OvVideo;
