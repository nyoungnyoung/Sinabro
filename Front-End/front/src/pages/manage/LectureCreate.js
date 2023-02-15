<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import LectureTimeForm from "./LectureTimeForm";
=======
import React, { useState, useRef } from "react";
import styled from "styled-components";
>>>>>>> dev-BE

const StyledDiv = styled.div`
  padding-top: 5vh;
  padding-left: 10vw;
  padding-right: 10vw;
`;

<<<<<<< HEAD
// const LectureDay = styled.div`
//   display: flex;
// `;

const StyledDPicker = styled(DatePicker)`
  width: 230px;
  height: 30px;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid Gray;
`;

const StyledImg = styled.img`
  width: 50px;
`;

function LectureCreate() {
  // const weekList = ["월", "화", "수", "목", "금", "토", "일"];
  // const [startTime, setStartTime] = useState(new Date());
=======
function LectureCreate() {
>>>>>>> dev-BE
  const [lecture, setLecture] = useState({
    poster: "",
    title: "",
    description: "",
    maxCapacity: 0,
<<<<<<< HEAD
    startDate: new Date(),
    endDate: new Date(),
    day: [
      {
        day: "월",
        startTime: "12:00 AM",
        hour: 0,
=======
    startDate: "",
    endDate: "",
    day: [
      {
        day: "",
        startTime: "",
        hour: "",
>>>>>>> dev-BE
      },
    ],
    weeklyPlan: [
      {
        title: "",
      },
    ],
  });

<<<<<<< HEAD
  // day, weekPlan 제외 onChange함수
  const onChange = e => {
    setLecture({
      ...lecture,
      [e.target.name]: e.target.value,
    });
  };

  console.log(lecture);
=======
  const date = new Date().getDate();
  console.log(date);
>>>>>>> dev-BE

  return (
    <StyledDiv className="LectureCreate">
      <h1>강의생성</h1>
      <hr />
      <form>
<<<<<<< HEAD
        <span>강의명 :</span>
        <input
          type="text"
          name="title"
          value={lecture.title}
          onChange={onChange}
        />
        <br />
        <span>강의설명 :</span>
        <input
          type="text"
          name="description"
          value={lecture.description}
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
        <LectureTimeForm lecture={lecture} />
        <StyledImg src="/img/add.png" alt="plus" />
        <br />
        <br />
        {/* <LectureDay>
          <span>강의 요일 :</span>
          <select
            value={lecture.day.day}
            // onChange={selectday => setLecture({ ...lecture })}
          >
            {weekList.map(item => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <span>강의 시작 시간 :</span>
          <DatePicker
            selected={startTime}
            onChange={date => setStartTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="시작시간"
            dateFormat="h:mm aa"
          />
          <span>강의 시간 :</span>
          <input
            type="text"
            name="hour"
            value={lecture.day[0].hour}
            onChange={onChange}
          />
        </LectureDay> */}
        <div className="calender-container">
          <div className="calender-box">
            <div className="date">강의시작일</div>
            <div>
              <StyledDPicker
                selected={lecture.startDate}
                onChange={date =>
                  setLecture({
                    ...lecture,
                    startDate: date,
                  })
                }
                locale={ko}
                dateFormat="yyyy.MM.dd (eee)"
                minDate={new Date()}
                popperPlacement="auto"
              />
            </div>
          </div>
          <div className="calender-box">
            <div className="date">강의종료일</div>
            <div>
              <StyledDPicker
                selected={lecture.endDate}
                onChange={date =>
                  setLecture({
                    ...lecture,
                    endDate: date,
                  })
                }
                locale={ko}
                dateFormat="yyyy.MM.dd (eee)"
                minDate={lecture.startDate}
                popperPlacement="auto"
              />
            </div>
          </div>
        </div>
        <p>주차별계획</p>
        <StyledImg src="/img/add.png" alt="plus" />
        <hr />
=======
        <input type="text" name="lectureName" value={lecture.title} />
>>>>>>> dev-BE
      </form>
    </StyledDiv>
  );
}

export default LectureCreate;
