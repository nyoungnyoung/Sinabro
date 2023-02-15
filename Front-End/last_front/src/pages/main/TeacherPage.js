import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TeacherCard from "./TeacherCard";

const StyledDiv = styled.div`
  width: 50%;
  padding-left: 5%;
  padding-right: 5vw;
  background-color: whitesmoke;
`;

function TeacherPage() {
  // 내가 강의 중인 리스트 store에서 가져오기
  const cardData = useSelector((state) => state.main.TeacherCard);

  return (
    <StyledDiv>
      <h1>내 강의 목록</h1>
      <p>내가 강의하고 있는 강의 목록을 모두 표시합니다</p>
      {cardData.map((data) => (
        <TeacherCard key={data.no} no={data.no} subject={data.subject} />
      ))}
    </StyledDiv>
  );
}

export default TeacherPage;
