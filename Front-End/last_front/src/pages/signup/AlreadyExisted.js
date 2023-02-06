import React from "react";
import { useNavigate } from "react-router-dom";

const AlreadyExisted = () => {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>이미 존재하는 전화번호 입니다. 로그인해주세요!</h1>
      <button onClick={moveToLogin}>로그인 하러가기</button>
    </div>
  );
};

export default AlreadyExisted;
