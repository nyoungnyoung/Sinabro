import React, { useState, useRef } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding-top: 5vh;
  padding-left: 10vw;
  padding-right: 10vw;
`;

function LectureCreate() {
  const [lecture, setLecture] = useState({
    poster: "",
    title: "",
    description: "",
    maxCapacity: 0,
    startDate: "",
    endDate: "",
    day: [
      {
        day: "",
        startTime: "",
        hour: "",
      },
    ],
    weeklyPlan: [
      {
        title: "",
      },
    ],
  });

  const date = new Date().getDate();
  console.log(date);

  return (
    <StyledDiv className="LectureCreate">
      <h1>강의생성</h1>
      <hr />
      <form>
        <input type="text" name="lectureName" value={lecture.title} />
      </form>
    </StyledDiv>
  );
}

export default LectureCreate;
