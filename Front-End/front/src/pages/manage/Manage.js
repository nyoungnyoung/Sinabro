import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import LectureCreate from "./LectureCreate";
import LectureIng from "./LectureIng";
import LectureEnd from "./LectureEnd";
import LectureTodo from "./LectureTodo";
import LectureList from "./LectureList";

const StyledDiv = styled.div`
  padding-left: 10vw;
  padding-right: 10vw;
`;

function Manage() {
  return (
    <StyledDiv className="Manage">
      <Routes>
        <Route path="/" element={<LectureList />}>
          <Route path="ing" element={<LectureIng />} />
          <Route path="end" element={<LectureEnd />} />
          <Route path="todo" element={<LectureTodo />} />
        </Route>
        <Route path="/create" element={<LectureCreate />} />
      </Routes>
    </StyledDiv>
  );
}

export default Manage;
