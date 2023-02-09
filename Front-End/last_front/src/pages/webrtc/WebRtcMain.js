import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Focus from "./Focus";
// import Zoom from "./Zoom";

function WebRtcMain() {
  const [glassOn, setGlassOn] = useState(false);

  const handleGlass = (data) => {
    setGlassOn(data);
  };
  // console.log(glassOn);
  return (
    <StyledDiv>
      <Navbar />
      <StyledDiv2>
        <Focus glassOn={glassOn} />
        <SideBar handleGlass={handleGlass} />
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
