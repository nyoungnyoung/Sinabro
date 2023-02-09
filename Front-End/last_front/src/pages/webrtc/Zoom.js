import React from "react";
import styled from "styled-components";

function Zoom() {
  return (
    <StyledGlass>
      <h3>돋보기 화면</h3>
    </StyledGlass>
  );
}

const StyledGlass = styled.div`
  width: 200px;
  height: 150px;
  position: absolute;
  z-index: 10;
  border: 5px red solid;
  border-radius: 15px;
  left: 0;
  top: 30;
`;

export default Zoom;
