import React from "react";
import { useNavigate } from "react-router-dom";

function CompleteSignUp() {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <h3>안녕하세요, 000님</h3>
      <h4>
        고객님께서 가입할 때 사용하신 전화번호와 비밀번호를 이용해서 사이트를
        이용해주시면 됩니다!
      </h4>
      <button onClick={moveToLogin}>로그인하러 가기</button>
    </div>
  );
}

export default CompleteSignUp;
