import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckNumber() {
  const navigate = useNavigate();

  const moveToMSG = () => {
    navigate("/signup/complete");
  };

  const [number, setNumber] = useState("");

  const sendNumber = (event) => {
    setNumber(event.target.value);
  };

  console.log(number);

  return (
    <div>
      <h1>인증번호 확인</h1>
      <div>
        <h3>고객님의 핸드폰으로 전송된 인증번호 4자리를 입력해주세요</h3>
        <input type="text" onChange={(event) => sendNumber(event)} />
        <button onClick={moveToMSG}>확인</button>
      </div>
    </div>
  );
}
export default CheckNumber;
