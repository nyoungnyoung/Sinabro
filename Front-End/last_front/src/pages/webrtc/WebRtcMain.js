import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Focus from "./Focus";
// import Zoom from "./Zoom";

function WebRtcMain() {
  return (
    <StyledDiv>
      <Navbar />
      <StyledDiv2>
        {/* <h1>WebRtcMain</h1>
      <p>화상회의 기본뼈대</p>
      <p>포커스형/참여형 컴포넌트 표시해주면 됨</p> */}
        <Focus />
        <SideBar />
      </StyledDiv2>
      {/* <Zoom /> */}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin: 0;
`;

const StyledDiv2 = styled.div`
  display: flex;
`;
export default WebRtcMain;
