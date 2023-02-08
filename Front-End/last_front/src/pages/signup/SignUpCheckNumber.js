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

  // console.log(checkNumber);
  // console.log(authCode);
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
          인증번호 확인
        </StyledButton>
      </StyledDiv2>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background-color: #fff9be;
  // background-color: white;
  height: 100vh;
`;

const StyledDiv2 = styled.div`
  background-color: white;
  border: 1px whitesmoke solid;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  width: 90vh;
  height: 40vh;
  text-align: left;
  margin: auto;
`;

const StyledP = styled.p`
  font-size: 23px;
  margin-left: 50px;
  margin-top: 70px;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  width: 50vh;
  height: 30px;
  font-size: 20px;
  padding: 10px;
  margin-right: 15px;
  margin-left: 50px;
  :focus {
    outline: 5px solid yellow;
  }
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  margin-left: 50px;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 700;
  background-color: #f7c815;
  font-size: 15px;
  font-family: "Chilgok_Cye";
  padding: 10px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  :hover {
    letter-spacing: 2px;
    transform: scale(1.2);
    cursor: pointer;
    background-color: #ff5f2e;
    color: white;
    outline: 0;
  }
`;
export default SignUpCheckNumber;
