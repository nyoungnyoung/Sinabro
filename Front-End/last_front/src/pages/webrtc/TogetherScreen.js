import React from "react";
import styled, { css } from "styled-components";
import UserVideoComponent from "./openvidu/UserVideoComponent";

const TogetherScreen = ({ info, handleMainVideoStream, mode, role }) => {
  const user = info.subscribers.length;

  // console.log(mode);
  // console.log(user);
  return (
    <StyledDiv>
      <StageDiv>
        <Flex1Div>
          <LightImg src="/img/light1.png" alt="light_left" />
          <MainDiv>
            <UserVideoComponent
              streamManager={info.mainStreamManager}
              mode={mode}
            />
          </MainDiv>
          <LightImg src="/img/light2.png" alt="light_right" />
        </Flex1Div>
        <StageImg src="/img/stage.png" alt="stage" />
        <FlexDiv>
          <SideDiv>
            <UserVideoComponent streamManager={info.publisher} mode={mode} />
          </SideDiv>
          {info.subscribers.map((sub, i) => (
            <SideDiv key={i} onClick={() => handleMainVideoStream(sub)}>
              <UserVideoComponent streamManager={sub} mode={mode} user={user} />
            </SideDiv>
          ))}
        </FlexDiv>
      </StageDiv>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 80%;
  height: 90vh;
  color: white;
  background-color: black;
  /* position: relative; */
`;

const MainDiv = styled.div`
  width: 60vh;
  height: 40vh;
  background-color: black;
  border-radius: 50%;
  margin-top: 20px;
  position: static;
`;

const StageImg = styled.img`
  width: 65vh;
  height: 8vh;
  position: relative;
  margin-bottom: 2%;
  margin-top: 3%;
`;

const LightImg = styled.img`
  width: 25vh;
  height: 22vh;
  position: relative;
`;

const StageDiv = styled.div`
  justify-content: center;
`;

const SideDiv = styled.div`
  width: 20%;
  height: 15%;
`;

const Flex1Div = styled.div`
  display: flex;
  margin-left: 18%;
  z-index: 99;
`;

const FlexDiv = styled.div`
  display: flex;
`;
export default TogetherScreen;
