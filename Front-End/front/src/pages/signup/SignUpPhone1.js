<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
import PhoneKeypad from "./components/PhoneKeypad";
// import { useSelector, useDispatch } from "react-redux";
// import { signUpActions } from "../../store/SignUpSlice";

function SignUpPhone1() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const moveToPhone2 = () => {
  //   navigate("/signup/phone2");
  // };

  // 😀number 저장
  // const [number, setNumber] = useState("");

  // 😀PhoneKeypad로부터 데이터 전달받기 위한 코드
  // const numberHandle = (number) => {
  //   setNumber(number);
  // };

  // 😀birth : 전역으로 보내기
  // const sendNumber = () => {
  //   dispatch(signUpActions.addPhone(number));
  // };

  // const state = useSelector((state) => state);

  // console.log("state", state);

  return (
    <div>
      <StyledDiv1>
=======
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";

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
>>>>>>> dev-BE
        <div>
          <h3>고객님의 휴대폰 번호를 입력해주세요!</h3>
        </div>
        <StyledDiv2>
<<<<<<< HEAD
          <PhoneKeypad />
=======
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
>>>>>>> dev-BE
        </StyledDiv2>
      </StyledDiv1>
      <LoginDiv>
        <StyledLink to="/cs">
          <CsBtn />
        </StyledLink>
      </LoginDiv>{" "}
    </div>
  );
}
const LoginDiv = styled.div`
  padding-left: 18%;
  padding-right: 18%;
  padding-top: 5vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const StyledDiv1 = styled.div`
  border: 1px solid black;
  width: 60%;
  margin: auto;
`;

const StyledDiv2 = styled.div`
<<<<<<< HEAD
  justify-content: center;
`;

// const StyledInput = styled.input`
//   width: 40%;
//   padding: 10px;
//   margin-right: 10px;
// `;

// const StyledButton1 = styled.button`
//   cursor: pointer;
//   padding: 10px;
//   margin-bottom: 20px;
// `;

// const StyledButton2 = styled.button`
//   margin-top: 15px;
//   margin-bottom: 15px;
//   cursor: pointer;
//   padding: 10px;
// `;
=======
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
>>>>>>> dev-BE
export default SignUpPhone1;
