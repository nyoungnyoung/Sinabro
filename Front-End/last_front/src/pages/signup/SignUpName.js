import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpName({ HandleSignUp }) {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const changeName = (event) => {
    setName(event);
  };
  const moveToNumber = () => {
    navigate("/signup/number");
  };

  console.log(name);

  return (
    <div>
      <h1>이름을 입력해주세요</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          changeName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          moveToNumber();
          HandleSignUp(name, "name");
        }}
      >
        등록
      </button>
    </div>
  );
}

export default SignUpName;
