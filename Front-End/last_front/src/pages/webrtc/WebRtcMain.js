import React, {useState} from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

import Focus from "./Focus";
import ShareScreen from "./ShareScreen";
import TogetherScreen from "./TogetherScreen";
import SideBar from "./SideBar";
// import Zoom from "./Zoom";

function WebRtcMain() {
  const [ratio, setRatio] = useState(1);
  const handleRatio = (ratio) => {
    if(ratio > 3)
      setRatio(3);
    else if(ratio < 1)
      setRatio(1);
    else 
      setRatio(ratio);
  };
  // console.log(glassOn);
  // const location = useLocation();

  // console.log(location);
  // const navigate = useNavigate();

  // const id = location.pathname.slice(8, 9);

  // console.log(id);
  // console.log(typeof id);

  // const changeShare = () => {
  //   navigate(`/webrtc/${id}/share`);
  // };

  // const changeJoin = () => {
  //   navigate(`/webrtc/${id}/join`);
  // };

  // const changeTogether = () => {
  //   navigate(`/webrtc/${id}/together`);
  // };

  return (
    <StyledDiv>
      <Navbar
      // changeShare={changeShare}
      // changeJoin={changeJoin}
      // changeTogether={changeTogether}
      />
      <StyledDiv2>
        {/* <Routes>
          <Route
            path="/share"
            element={<ShareScreen changeShare={changeShare} />}
          ></Route>
          <Route
            path="/join"
            element={<Focus changeJoin={changeJoin} ratio={ratio} />}
          ></Route>
          <Route
            path="/together"
            element={<TogetherScreen changetogether={changeTogether} />}
          ></Route>
        </Routes> */}
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
