import React, { useEffect, useState } from "react";
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

function MyPageList() {
  // 내가 신청한 강의 리스트 store에서 가져오기
  const cardData = useSelector(state => state.main.MyPageCard);

  // myPage가 변하면 컴포넌트에 반영해줘야함!
  const [myPage, setMyPage] = useState(cardData);

  // useEffect(() => {
  //   console.log(MyPage);
  //   // console.log(response.data);
  // }, [myPage]);

  // console.log(myPage);

  return (
    <StyledDiv>
      <h1>나의배움터</h1>
      <p>신청한 강의 목록을 모두 표시합니다</p>
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

export default MyPageList;
