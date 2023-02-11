import React, { useState } from "react";

function ClassTimeForm({ handleState }) {
  const [date, setDate] = useState({
    day: "",
    startTime: "",
    runtime: "",
  });

  const changeData = (event, type) => {
    setDate({
      ...date,
      [type]: event.target.value,
    });
  };

  // console.log(date);
  return (
    <div>
      <div>
        <label>강의 일자 : </label>
        <input
          type="text"
          value={date.day}
          onChange={(event) => {
            changeData(event, "day");
            handleState(date, "lectureTimeList");
          }}
          placeholder="요일을 기재해주세요!"
        />
        <br />

        <label>강의 시작 시간 : </label>
        <input
          type="time"
          value={date.startTime}
          onChange={(event) => {
            changeData(event, "startTime");
            handleState(date, "lectureTimeList");
          }}
          placeholder="강의 시작 시간을 기재해주세요! (예) 14:00"
        />
        <br />

        <label>강의 종료 시간 : </label>
        <input
          type="time"
          value={date.runtime}
          onChange={(event) => {
            changeData(event, "runtime");
            handleState(date, "lectureTimeList");
          }}
          placeholder="강의 종료 시간을 기재해주세요! (예) 14:00"
        />
        <br />
      </div>
    </div>
  );
}
export default ClassTimeForm;
