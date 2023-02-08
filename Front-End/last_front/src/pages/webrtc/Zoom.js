import React from "react";
import styled from "styled-components";

const Zoom = () => {
  return (
    <div>
      <h1>돋보기</h1>
      <StyledCanvas id="canvas">
        <img src="/img/mic.png" alt="mic" />
      </StyledCanvas>
      <StyledHover id="hover">호버</StyledHover>
      <StyledPreview id="preview">프리뷰</StyledPreview>
    </div>
  );
};

const StyledCanvas = styled.canvas`
  width: 650px;
  height: 400px;
  position: absolute;
  left: 0px;
`;
const StyledHover = styled.canvas`
  width: 650px;
  height: 400px;
  position: absolute;
  left: 0px;
  z-index: 20;
`;

const StyledPreview = styled.canvas``;
export default Zoom;
