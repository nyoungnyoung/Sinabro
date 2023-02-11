import React from "react";
import { useState } from "react";

const CreateTeacher = () => {
  const [form, setForm] = useState({
    id: "",
    password: "",
    email: "",
    name: "",
    phone: "",
  });

  const changeValue = (e, type) => {
    setForm({});
  };
  return (
    <div>
      <h1>강사등록</h1>

      <div>
        <label>이름 : </label>
        <input type="text" />
        <br />

        <label>비밀번호 : </label>
        <input type="text" />
        <br />

        <label>이메일 : </label>
        <input type="text" />
        <br />

        <label>이름 : </label>
        <input type="text" />
        <br />

        <label>전화번호 : </label>
        <input type="text" />
        <br />
      </div>
    </div>
  );
};

export default CreateTeacher;
