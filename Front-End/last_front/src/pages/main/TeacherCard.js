import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

const LectureDiv = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  :hover {
    transform: scale(1.1);
  }
`;

const StyledH2 = styled.h2`
  padding-top: 3px;
  padding-left: 15px;
`;

const StyledBtn = styled.button`
  /* margin-top: 20px; */
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #f7c815;
  margin-top: 8px;
  margin-right: 8px;
  font-size: larger;
  font-weight: 1000;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #ff5f2e;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function TeacherCard({ no, subject }) {
  return (
    <StyledLink to={`/webrtc/${no}`}>
      <LectureDiv>
        <StyledH2>{subject}</StyledH2>
        <StyledBtn>강의입장</StyledBtn>
      </LectureDiv>
    </StyledLink>
  );
}

export default TeacherCard;
