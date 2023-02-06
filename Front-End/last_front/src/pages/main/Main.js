import React from "react";
import styled from "styled-components";
import LectureList from "./LectureList";
import MyPageList from "./MyPageList";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

function Main() {
  return (
    <div>
      <h1>Main</h1>
      <p>로그인 후 보여지는 첫번째 페이지!</p>
      <p>왼쪽에 신청 가능한 강의목록, 오른쪽에 마이페이지</p>
      <StyledDiv>
        <LectureList />
        <MyPageList />
      </StyledDiv>
    </div>
  );
}

export default Main;
