import React, { Component } from "react";
import styled, { css } from "styled-components";
import OpenViduVideoComponent from "./OvVideo";
import "./UserVideo.css";

const StyledVideo = styled.div`
  width: 100%;
  position: relative;
`;

const StyledBtn = styled.button`
  position: absolute;
  left: 50%;
  top: 30%
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
          {/* <StyledBtn1>무대로</StyledBtn1> */}
          <StyledBtn>마이크켜기</StyledBtn>
          <StyledBtn>마이크끄기</StyledBtn>
          <div>
            <p>{getNicknameTag()}</p>
            </div>
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
