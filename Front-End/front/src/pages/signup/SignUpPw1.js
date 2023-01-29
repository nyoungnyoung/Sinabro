import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomerServiceButton from "./button/CustomerServiceButton";

function SignUpPw1() {
  const navigate = useNavigate();

  const moveToPw2 = () => {
    navigate("/signup/pw2");
  };

  //비밀번호 저장
  const [password, setPassword] = useState("");

  return (
    <div>
      <StyledDiv1>
        {/* <h1>SignUp PW_1</h1> */}
        <div>
          <h3>고객님께서 사용하고 싶으신 비밀번호를 적어주세요!</h3>
        </div>
        <StyledDiv2>
          <StyledInput
            type="text"
            value={password}
            placeholder="여기에 비밀번호를 적어주세요 :)"
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
          <StyledButton1>다음</StyledButton1>
        </StyledDiv2>
        <div>
          <StyledButton2 onClick={moveToPw2}>다음 단계로</StyledButton2>
        </div>
      </StyledDiv1>
      <CustomerServiceButton />
    </div>
  );
}

const StyledDiv1 = styled.div`
  border: 1px solid black;
  width: 60%;
  margin: auto;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 40%;
  padding: 10px;
  margin-right: 10px;
`;

const StyledButton1 = styled.button`
  cursor: pointer;
  padding: 10px;
`;

const StyledButton2 = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 10px;
`;
export default SignUpPw1;
