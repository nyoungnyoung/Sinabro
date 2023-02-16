import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import UserVideoComponent from "./openvidu/UserVideoComponent";

function Focus({ info, handleMainVideoStream, mode, ratio, role, unmuteOne }) {
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

  const moveScreenStart = (e) => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);

    posX = e.clientX;
    posY = e.clientY;
  };

  const moveScreen = (e) => {
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

  const moveScreenEnd = (e) => {
    const limitX = e.target.offsetLeft + (e.clientX - posX) <= 0;
    const limitY = e.target.offsetTop + (e.clientY - posY) <= 0;

    e.target.style.left = limitX
      ? `${e.target.offsetLeft + (e.clientX - posX)}px`
      : "0px";
    e.target.style.top = limitY
      ? `${e.target.offsetTop + (e.clientY - posY)}px`
      : "0px";
  };

  const user = info.subscribers.length;

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
        <StyledDiv user={user} ref={imageRectRef}>
          <UserVideoComponent
            streamManager={info.publisher}
            user={user}
            mode={mode}
            role={role}
            handleMainVideoStream={handleMainVideoStream}
          />

          {info.subscribers.map((sub, i) => (
            <div
              key={i}
              // onClick={() => {
              //   handleMainVideoStream(sub);
              // }}
            >
              <UserVideoComponent
                streamManager={sub}
                user={user}
                mode={mode}
                role={role}
                unmuteOne={unmuteOne}
                handleMainVideoStream={handleMainVideoStream}
              />
            </div>
          ))}
        </StyledDiv>
      </ContainerDiv>
    </TestDiv>
  );
}

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
  /* position: relative; */
  /* justify-items: center;
  justify-content: center; */
  text-align: center;
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

const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => 100 * props.ratio}%;
  height: ${(props) => 100 * props.ratio}%;
  transform: scale(${(props) => props.ratio});
  transform-origin: left top;
  display: table;
`;

export default Focus;
