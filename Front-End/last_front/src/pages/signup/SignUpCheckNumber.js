import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import axios from "axios";

function SignUpCheckNumber({ authCode }) {
  const [checkNumber, setCheckNumber] = useState("");

  const navigate = useNavigate();

  const changeCheckNumber = (event) => {
    setCheckNumber(event);
  };

  const moveToPw1 = () => {
    navigate("/signup/pw1");
  };

  //   const sendAuthCode = () => {
  //     axios.post(baseUrl + '/common/send-auth-code', {
  //       phone: axiosNumber,
  //     }).then((response) => console.log(response.data))
  //       .catch((error) => console.log(error));
  // };

  console.log(checkNumber);
  console.log(authCode);
  return (
    <StyledDiv>
      <StyledDiv2>
        <StyledP>
          고객님의 전화번호로 전송된 인증번호 4자리를 입력해주세요.
        </StyledP>
        <StyledInput
          type="text"
          value={checkNumber}
          onChange={(event) => {
            changeCheckNumber(event.target.value);
          }}
          placeholder="인증번호 4자리를 입력해주세요 :)"
        />
        <StyledButton
          onClick={() => {
            moveToPw1();
          }}
        >
          확인
        </StyledButton>
      </StyledDiv2>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  // background-color: #fff9be;
  // background-color: white;
  height: 100vh;
`;

const StyledDiv2 = styled.div`
  background-color: white;
  border: 1px black solid;
  width: 95vh;
  height: 30vh;
  text-align: left;
  margin: auto;
`;

const StyledP = styled.p`
  font-size: 23px;
  margin-left: 35px;
  margin-top: 40px;
`;

const StyledInput = styled.input`
  width: 50vh;
  height: 30px;
  font-size: 20px;
  padding: 10px;
  margin-right: 15px;
  margin-left: 35px;
`;

const StyledButton = styled.button`
  width: 60px;
  height: 50px;
  font-size: 15px;
`;
export default SignUpCheckNumber;
