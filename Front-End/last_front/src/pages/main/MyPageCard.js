import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

const LectureDiv = styled.div`
  width: 100%;
  border: none;
  border-radius: 10px;
  box-shadow: -1px 15px 30px -12px black;
  margin-bottom: 50px;
  :hover {
    transform: scale(1.1);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 5px;
`;

const StyledBtn = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 80px;
  border: none;
  border-radius: 0px 0px 10px 10px;
  background-color: #f7c815;
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

function MyPageCard({ no, subject, startDate, endDate, content, savedName }) {
  return (
    <div>
      <LectureDiv>
        <StyledLink to={`/webrtc/${no}`}>
          <StyledImg src={savedName} alt="img" />
          <h2>{subject}</h2>
          <p>{content}</p>
          <p>
            {startDate.slice(0, 10)} ~ {endDate.slice(0, 10)}
          </p>
          <StyledBtn>강의입장</StyledBtn>
        </StyledLink>
      </LectureDiv>
    </div>
  );
}

export default MyPageCard;
