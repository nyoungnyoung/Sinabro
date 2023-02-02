import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const StyledDiv = styled.div`
  padding-top: 5vh;
  padding-left: 10vw;
  padding-right: 10vw;
`;

const StyledDPicker = styled(DatePicker)`
  width: 230px;
  height: 30px;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid Gray;
  /* font-size: 12px; */
`;

function LectureCreate() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
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

  // day, weekPlan 제외 onChange함수
  const onChange = e => {
    setLecture({
      ...lecture,
      [e.target.name]: e.target.value,
    });
  };

  const date = new Date().getDate();
  console.log(date);
  console.log(startDate);
  console.log(endDate);

  return (
    <StyledDiv className="LectureCreate">
      <h1>강의생성</h1>
      <hr />
      <form>
        <span>강의명 :</span>
        <input
          type="text"
          name="title"
          value={lecture.title}
          onChange={onChange}
        />
        <br />
        <span>최대 수강 인원 :</span>
        <input
          type="text"
          name="maxCapacity"
          value={lecture.maxCapacity}
          onChange={onChange}
        />
        <br />
        <span>강의 시작일 :</span>
        <StyledDPicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          locale={ko}
          dateFormat="yyyy.MM.dd (eee)"
          // showPopperArrow={false}
          minDate={new Date()}
          popperPlacement="auto"
        />
        <span>강의 종료일</span>
        <StyledDPicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          locale={ko}
          dateFormat="yyyy.MM.dd (eee)"
          // showPopperArrow={false}
          minDate={startDate}
          popperPlacement="auto"
        />
      </form>
    </StyledDiv>
  );
}

export default LectureCreate;
