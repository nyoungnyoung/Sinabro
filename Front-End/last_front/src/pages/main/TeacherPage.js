import React from "react";
import MyPageCard from "./MyPageCard";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledDiv = styled.div`
  width: 50%;
  padding-left: 5%;
  padding-right: 5vw;
  background-color: whitesmoke;
`;

const CardDiv = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
  }
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: -1000px;
  }
`;

function TeacherPage() {
  // 내가 강의 중인 리스트 store에서 가져오기
  const cardData = useSelector(state => state.main.MyPageCard);

  return (
    <StyledDiv>
      <h1>내 강의 목록</h1>
      <p>내가 강의하고 있는 강의 목록을 모두 표시합니다</p>
      <CardDiv>
        {cardData.map(data => (
          <MyPageCard
            key={data.no}
            no={data.no}
            subject={data.subject}
            startDate={data.startDate}
            endDate={data.endDate}
            content={data.content}
            savedName={data.savedName}
          />
        ))}
      </CardDiv>
    </StyledDiv>
  );
}

export default TeacherPage;
