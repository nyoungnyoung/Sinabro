import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css"; // css import
import "./BirthCalendar.css";

function BirthCalendar({ dateHandle }) {
  const [state, setState] = useState(new Date());

  const choosedDate = moment(state).format("YYYY년 MM월 DD일");
  return (
    <div>
      <Calendar
        className="calendar"
        onChange={setState}
        onClick={dateHandle(choosedDate)}
        value={state}
      />
      <div className="text-gray-500 mt-4">{/* <h3>{choosedDate}</h3> */}</div>
    </div>
  );
}

export default BirthCalendar;
