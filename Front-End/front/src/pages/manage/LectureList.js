import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const StyledDiv = styled.div`
  padding-top: 5vh;
  padding-left: 10vw;
  padding-right: 10vw;
`;

function LectureList() {
  return (
    <StyledDiv className="LectureList">
      <h1>LectureList</h1>
      <nav>
        <Link to="ing">
          <button>진행 중</button>
        </Link>
        <Link to="end">
          <button>완료</button>
        </Link>
        <Link to="todo">
          <button>예정</button>
        </Link>
      </nav>
      <Outlet />
    </StyledDiv>
  );
}

export default LectureList;
