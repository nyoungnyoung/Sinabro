import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import moment from "moment";

const LectureDay = styled.div`
  display: flex;
`;

function LectureTimeForm() {
  const weekList = ["월", "화", "수", "목", "금", "토", "일"];
  const hourList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const minuteList = Array(60)
    .fill()
    .map((v, i) => i + 1);

  const [form, setForm] = useState({
    startDay: "월",
    startTime: new Date(),
    credit_hour: 0,
    credit_minute: 0,
  });

  const changeValue = (e, type) => {
    if (e.name === "startTime") {
      setForm({
        ...form,
        [e.name]: e,
      });
    } else {
      console.log(e.target);
      setForm({
        ...form,
        [type]: e.target.value,
      });
    }
  };

  console.log(form);

  // const [startDay, setStartDay] = useState("월");
  // const [startTime, setStartTime] = useState(new Date());
  // const [credit, setCredit] = useState(0);
  return (
    <LectureDay>
      <span>강의 요일 :</span>
      <select onChange={e => changeValue(e, "startDay")}>
        {weekList.map(item => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <span>강의 시작 시간 :</span>
      <DatePicker
        selected={form.startTime}
        value={form.startTime}
        onChange={e => {
          e.name = "startTime";
          changeValue(e, "startTime");
        }}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="시작시간"
        dateFormat="h:mm aa"
      />
      <span>강의 시간 :</span>
      <select onChange={e => changeValue(e, "credit_hour")}>
        {hourList.map(item => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      시간
      <select onChange={e => changeValue(e, "credit_minute")}>
        {minuteList.map(item => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      분
    </LectureDay>
  );
}

export default LectureTimeForm;
