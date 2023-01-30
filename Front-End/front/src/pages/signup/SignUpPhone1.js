import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomerServiceButton from "./button/CustomerServiceButton";

function SignUpPhone1() {
  const navigate = useNavigate();

  const moveToPhone2 = () => {
    navigate("/signup/phone2");
  };

  const [number, setNumber] = useState("");
  return (
    <div>
      <StyledDiv1>
        {/* <h1>SignUpPhone1</h1> */}
        <div>
          <h3>고객님의 휴대폰 번호를 입력해주세요!</h3>
        </div>
        <StyledDiv2>
          <StyledInput
            type="text"
            value={number}
            placeholder="휴대폰 번호를 입력해주세요 :)"
            onChange={(e) => {
              setNumber(e.target.value);
              console.log(number);
            }}
          />
          <StyledButton1>인증번호 받기</StyledButton1>
        </StyledDiv2>
        <StyledDiv2>
          <StyledButton2 onClick={moveToPhone2}>다음 단계로</StyledButton2>
        </StyledDiv2>
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
export default SignUpPhone1;
