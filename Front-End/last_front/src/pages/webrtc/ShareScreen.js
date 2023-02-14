import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import UserVideoComponent from "./openvidu/UserVideoComponent";

const ShareScreen = ({ info, ratio }) => {
  const imageRectRef = useRef();
  let containerDiv = useRef();

  useEffect(() => {
    if (
      containerDiv.current.offsetWidth * ratio +
        containerDiv.current.offsetLeft <
      imageRectRef.current.offsetWidth
    ) {
      containerDiv.current.style.left = `${
        imageRectRef.current.offsetWidth -
        containerDiv.current.offsetWidth * ratio
      }px`;
    }

    if (
      containerDiv.current.offsetHeight * ratio +
        containerDiv.current.offsetTop <
      imageRectRef.current.offsetHeight
    ) {
      containerDiv.current.style.top = `${
        imageRectRef.current.offsetHeight -
        containerDiv.current.offsetHeight * ratio
      }px`;
    }
  }, [ratio]);

  let posX;
  let posY;

  const moveScreenStart = e => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);

    posX = e.clientX;
    posY = e.clientY;
  };

  const moveScreen = e => {
    const minX = e.target.offsetLeft + (e.clientX - posX) <= 0;
    const minY = e.target.offsetTop + (e.clientY - posY) <= 0;

    if (
      e.target.offsetWidth * ratio + e.target.offsetLeft <
      imageRectRef.current.offsetWidth
    ) {
      e.target.style.left = `${
        imageRectRef.current.offsetWidth - e.target.offsetWidth * ratio
      }px`;
    }

    if (
      e.target.offsetHeight * ratio + e.target.offsetTop <
      imageRectRef.current.offsetHeight
    ) {
      e.target.style.top = `${
        imageRectRef.current.offsetHeight - e.target.offsetHeight * ratio
      }px`;
    }

    if (e.target.offsetLeft + (e.clientX - posX) <= 0) {
      e.target.style.left = `${e.target.offsetLeft + (e.clientX - posX)}px`;
    } else {
      e.target.style.left = `0px`;
    }

    e.target.style.top = minY
      ? `${e.target.offsetTop + (e.clientY - posY)}px`
      : "0px";

    posX = minX ? e.clientX : 0;
    posY = minY ? e.clientY : 0;
  };

  const moveScreenEnd = e => {
    const limitX = e.target.offsetLeft + (e.clientX - posX) <= 0;
    const limitY = e.target.offsetTop + (e.clientY - posY) <= 0;

    e.target.style.left = limitX
      ? `${e.target.offsetLeft + (e.clientX - posX)}px`
      : "0px";
    e.target.style.top = limitY
      ? `${e.target.offsetTop + (e.clientY - posY)}px`
      : "0px";
  };

  return (
    <TestDiv ref={imageRectRef}>
      <ContainerDiv
          ref={containerDiv}
          ratio={ratio}
          onDragStart={moveScreenStart}
          onDrag={moveScreen}
          onDragEnd={moveScreenEnd}
          draggable
        >
    <StyledDiv>
      <StyledDiv2>
        <ShareDiv>
          <UserVideoComponent streamManager={info.mainStreamManager} />
        </ShareDiv>
      </StyledDiv2>
    </StyledDiv>
    </ContainerDiv>
    </TestDiv>
  );
};

const TestDiv = styled.div`
  overflow: hidden;
  width: 80%;
  height: 90vh;
  position: relative;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  background-color: black;
  position: relative;
`;

const StyledDiv2 = styled.div`
  display: flex;
`;

const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => 100 * props.ratio}%;
  height: ${props => 100 * props.ratio}%;
  transform: scale(${props => props.ratio});
  transform-origin: left top;
  display: table;
`;
// const TeacherDiv = styled.div`
//   margin-left: 30px;
//   width: 33%;
//   height: 35vh;
//   background-color: green;
// `;

const ShareDiv = styled.div`
  margin: auto;
  width: 95%;
  height: 70vh;
  background-color: black;
`;
export default ShareScreen;
