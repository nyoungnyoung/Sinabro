import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TeacherClassCreate() {
  const navigate = useNavigate();
  const [classData, setClassData] = useState({
    category: "",
    className: "",
    explain: "",
    startTime: "",
    endTime: "",
  });

  // 카테고리에 넣을 값
  const category = ["선택", "미술", "체육", "배움"];

  const changeData = (event, type) => {
    setClassData({
      ...classData,
      [type]: event.target.value,
    });
  };

  const moveToTeacherMain = () => {
    navigate("/teacher");
  };

  console.log(classData);

  return (
    <div>
      <h2>강의 생성</h2>
      <div>
        <div>
          <label>카테고리 : </label>
          <select
            name="category"
            value={classData.category}
            onChange={(event) => changeData(event, "category")}
          >
            {category.map((item, idx) => {
              return <option key={idx}>{item}</option>;
            })}
          </select>
        </div>
      </div>

      <div>
        <label>강의명 : </label>
        <input
          type="text"
          onChange={(event) => changeData(event, "className")}
        />
      </div>
      <div>
        <label>강의설명 : </label>
        <textarea
          cols="30"
          rows="10"
          onChange={(event) => changeData(event, "explain")}
        ></textarea>
      </div>

      <div>
        <label>강의시간 : </label>
        <input
          type="text"
          value={classData.startTime}
          onChange={(event) => changeData(event, "startTime")}
        />{" "}
        ~
        <input
          type="text"
          value={classData.endTime}
          onChange={(event) => changeData(event, "endTime")}
        />
      </div>
      <button onClick={moveToTeacherMain}>강의등록</button>
    </div>
  );
}

export default TeacherClassCreate;
