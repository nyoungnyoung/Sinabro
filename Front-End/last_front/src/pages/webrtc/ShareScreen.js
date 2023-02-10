import React from "react";
import styled from "styled-components";

const ShareScreen = () => {
  return (
    <StyledDiv>
      <h1>Share Mode</h1>
      <StyledDiv2>
        <TeacherDiv>강사님</TeacherDiv>
        <ShareDiv>화면공유</ShareDiv>
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
  margin-left: 30px;
  width: 60%;
  height: 70vh;
  background-color: green;
`;
export default ShareScreen;
