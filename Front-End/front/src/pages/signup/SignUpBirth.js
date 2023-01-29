import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomerServiceButton from "./button/CustomerServiceButton";

function SignUpBirth() {
  const navigate = useNavigate();

  const moveToPhone = () => {
    navigate("/signup/phone1");
  };

  // 생년월일 저장
  const [birth, setBirth] = useState("");

  return (
    <div>
      <StyledDiv1>
        {/* <h1>SignUpBirth</h1> */}
        <div>
          <h3>고객님의 생년월일을 선택/적어주세요!</h3>
        </div>
        <StyledDiv2>
          <StyledInput
            type="text"
            value={birth}
            placeholder="여기에 생년월일을 입력해주세요 :)"
            onChange={(e) => {
              setBirth(e.target.value);
              console.log(birth);
            }}
          />
          <StyledButton1>확인</StyledButton1>
        </StyledDiv2>
        <div>
          <StyledButton2 onClick={moveToPhone}>다음 단계로</StyledButton2>
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
export default SignUpBirth;
