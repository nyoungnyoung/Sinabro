import React from "react";
import styled from "styled-components";
import UserVideoComponent from "./openvidu/UserVideoComponent";

const ShareScreen = ({ info }) => {
  return (
    <StyledDiv>
      <StyledDiv2>
        <ShareDiv><UserVideoComponent streamManager={info.mainStreamManager} /></ShareDiv>
      </StyledDiv2>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 80%;
  height: 90vh;
  color: white;
  background-color: black;
  position: relative;
`;

const StyledDiv2 = styled.div`
  display: flex;
`;
const TeacherDiv = styled.div`
  margin-left: 30px;
  width: 33%;
  height: 35vh;
  background-color: green;
`;

const ShareDiv = styled.div`
  margin: auto;
  width: 95%;
  height: 70vh;
  background-color: black;
`;
export default ShareScreen;
