import React, { useState, useEffect } from "react";
import axios from "axios";
import LectureItemCard from "./LectureItemCard";
import styled from "styled-components";

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

function MyPageList() {
  const [cardData, setCardData] = useState([]);

  // 카드 데이터 받아와서 state에 저장해주기
  useEffect(() => {
    const getCardData = async () => {
      const res = await axios.get("/dummydata/MyLectureCard.json");
      setCardData(res.data);
    };
    getCardData();
  }, []);

  // useEffect(() => {
  //   const getCardData = async () => {
  //     const res = await axios.get("/dummydata/MyLectureCard.json");
  //     setCardData(res.data);
  //   };
  // }, []);

  return (
    <StyledDiv>
      <h1>나의배움터</h1>
      <p>신청한 강의 목록을 모두 표시합니다</p>
      <CardDiv>
        {cardData.map(data => (
          <LectureItemCard
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

export default MyPageList;
