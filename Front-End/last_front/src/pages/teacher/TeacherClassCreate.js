import React, { useState } from "react";
import ClassTimeForm from "./ClassTimeForm";
import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

function TeacherClassCreate() {
  const navigate = useNavigate();

  const [classData, setClassData] = useState({
    originalName: "",
    subject: "",
    content: "",
    maxOccupancy: 0,
    startDate: "",
    endDate: "",
    lectureTimeList: [
      {
        day: "월",
        startTime: "12:00 AM",
        runTime: 0,
      },
    ],
    weeklyInfoList: [
      {
        content: "",
      },
    ],
  });

  const changeData = (event, type) => {
    setClassData({
      ...classData,
      [type]: event.target.value,
    });
  };

  const handleState = (event, type) => {
    setClassData({
      ...classData,
      [type]: event,
    });
  };
  // console.log(classData);

  const moveToMain = () => {
    navigate("/teacher");
  };

  console.log(classData);
  return (
    <div>
      <h1>강의생성</h1>
      <div>
        <label>강의명 : </label>
        <input
          type="text"
          value={classData.originalName}
          onChange={(event) => changeData(event, "originalName")}
        />
        <br />

        <label>강의주제 : </label>
        <input
          type="text"
          value={classData.subject}
          onChange={(event) => changeData(event, "subject")}
        />
        <br />

        <label>강의내용 : </label>
        <textarea
          name="content"
          cols="30"
          rows="10"
          placeholder="간단한 강의 설명 추가"
          value={classData.content}
          onChange={(event) => changeData(event, "content")}
        ></textarea>
        <br />

        <label>최대 수강 인원 : </label>
        <input
          type="number"
          placeholder="강의 최대 인원 기입"
          value={classData.maxOccupancy}
          onChange={(event) => changeData(event, "maxOccupancy")}
        />
        <br />

        <label>강의 시작일자 : </label>
        <input
          type="date"
          placeholder="강의가 시작되는 날짜"
          value={classData.startDate}
          onChange={(event) => changeData(event, "startDate")}
        />
        <br />

        <label>강의 종료일자 : </label>
        <input
          type="date"
          placeholder="강의가 종료되는 날짜"
          value={classData.endDate}
          onChange={(event) => changeData(event, "endDate")}
        />
        <br />
        <ClassTimeForm handleState={handleState} />
      </div>

      <button onClick={moveToMain}>추가</button>
    </div>
  );
}

export default TeacherClassCreate;
