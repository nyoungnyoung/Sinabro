import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  // 데이터 선언 (이름, 번호, 비밀번호)
  const [userData, setUserData] = useState({
    name: "",
    number: "",
    password: "",
  });

  // 데이터 저장
  const changeData = (event, type) => {
    setUserData({
      ...userData,
      [type]: event.target.value,
    });
  };

  const moveToComplete = () => {
    navigate("/signup/complete");
  };

  console.log(userData);
  return (
    <div className="SignUp">
      <h1>회원가입</h1>
      <StyledDiv>
        <FormDiv>
          <InputDiv>
            <label>이름 : </label>
            <input
              type="text"
              onChange={(event) => {
                changeData(event, "name");
              }}
              value={userData.name}
            />
          </InputDiv>
          <br />
          <InputDiv>
            <label>전화번호 : </label>
            <input
              type="text"
              onChange={(event) => {
                changeData(event, "number");
              }}
              value={userData.number}
            />
          </InputDiv>
          <br />

          <InputDiv>
            <label>비밀번호 : </label>
            <input
              type="password"
              onChange={(event) => {
                changeData(event, "password");
              }}
              value={userData.password}
            />
          </InputDiv>
          <br />
          <button onClick={moveToComplete}>회원가입</button>
        </FormDiv>
      </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const FormDiv = styled.div`
  border: solid 1px black;
  width: 500px;
  height: 200px;
`;

const InputDiv = styled.div`
  margin-top: 10px;
`;

export default SignUp;
