import React, { useState } from "react";

function TeacherClassCreate() {
  const [classData, setClassData] = useState({
    category: "",
    className: "",
    explain: "",
  });

  return (
    <div>
      <h2>강의 생성</h2>
      <div>
        <div>
          <label>카테고리 : </label>
          <input type="radio" name="예술" checked />
          예술
          <input type="radio" name="체육" />
          체육
          <input type="radio" name="배움" />
          배움
        </div>
      </div>

      <div>
        <label>강의명 : </label>
        <input type="text" />
      </div>
      <div>
        <label>강의설명 : </label>
        <textarea cols="30" rows="10"></textarea>
      </div>
      <button>강의등록</button>
    </div>
  );
}

export default TeacherClassCreate;
