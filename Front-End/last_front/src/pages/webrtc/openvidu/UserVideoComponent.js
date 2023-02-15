import React, { Component } from "react";
import styled, { css } from "styled-components";
import OpenViduVideoComponent from "./OvVideo";
import "./UserVideo.css";

const StyledVideo = styled.div`
  width: 100%;
  position: relative;
`;

const StyledBtn1 = styled.button`
  font-weight: 700;
  font-size: 20px;
  position: absolute;
  left: 43%;
`;

const StyledBtn2 = styled.button`
  position: absolute;
  left: 50%;
  font-weight: 700;
  font-size: 20px;
`;

const UserVideoComponent = ({ streamManager, user, mode, role }) => {
  const getNicknameTag = () => {
    return JSON.parse(streamManager.stream.connection.data).clientData;
  };
  return (
    <ParentDiv>
      {streamManager !== undefined ? (
        <StyledVideo className="streamcomponent">
          <OpenViduVideoComponent
            streamManager={streamManager}
            user={user}
            mode={mode}
          />
          {/* <StyledBtn1>무대로</StyledBtn1>
          <StyledBtn2>마이크켜기</StyledBtn2>
          <StyledBtn2>마이크끄기</StyledBtn2> */}
          <NameDiv>
            <p>{getNicknameTag()}</p>
          </NameDiv>
        </StyledVideo>
      ) : null}
    </ParentDiv>
  );
};

const ParentDiv = styled.div`
  position: relative;
`;

const NameDiv = styled.div`
  background-color: black;
  opacity: 0.5;
  position: absolute;
`;

export default UserVideoComponent;
