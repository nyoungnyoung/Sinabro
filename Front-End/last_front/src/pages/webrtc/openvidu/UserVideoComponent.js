import React, { Component } from "react";
import styled, { css } from "styled-components";
import OpenViduVideoComponent from "./OvVideo";
import "./UserVideo.css";

const UserVideoComponent = ({
  streamManager,
  user,
  mode,
  role,
  unmuteOne,
  sub,
  handleMainVideoStream,
}) => {
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
          <StyledBtnDiv>
            {role === "normal" ? <StyledP>{getNicknameTag()}</StyledP> : null}
            {role === "teacher" ? (
              <div>
                <p>{getNicknameTag()}</p>
                <StyledBtn onClick={() => unmuteOne(sub)}>
                  음소거 해제
                </StyledBtn>
                <StyledBtn onClick={() => handleMainVideoStream(sub)}>
                  무대로 보내기
                </StyledBtn>
              </div>
            ) : null}
          </StyledBtnDiv>
        </StyledVideo>
      ) : null}
    </ParentDiv>
  );
};

const StyledBtn = styled.button`
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: gray;
  color: white;
  margin-left: 5%;
  width: 100px;
  height: 30px;
  cursor: pointer;
`;

const StyledVideo = styled.div`
  width: 100%;
  position: relative;
`;

const StyledBtnDiv = styled.div`
  background-color: black;
`;

const StyledP = styled.p`
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  margin-left: 40px;
`;

const buttonDiv = styled.div`
  background-color: black;
  position: static;
  left: 0px;
  /* position: absolute; */
`;

const ParentDiv = styled.div`
  /* position: relative; */
`;

const NameDiv = styled.div`
  background-color: black;
  opacity: 0.5;
  position: absolute;
`;

export default UserVideoComponent;
