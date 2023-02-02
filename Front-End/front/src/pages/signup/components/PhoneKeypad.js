import React, { useState } from "react";
import "./PhoneKeypad.css";
import { useDispatch } from "react-redux";
import { signUpActions } from "../../../store/SignUpSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PhoneKeypad = () => {
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const moveToPhone2 = () => {
    navigate("/signup/phone2");
  };

  const numberOne = () => {
    setNumber([...number, "1"]);
  };
  const numberTwo = () => {
    setNumber([...number, "2"]);
  };
  const numberThree = () => {
    setNumber([...number, "3"]);
  };
  const numberFour = () => {
    setNumber([...number, "4"]);
  };
  const numberFive = () => {
    setNumber([...number, "5"]);
  };
  const numberSix = () => {
    setNumber([...number, "6"]);
  };
  const numberSeven = () => {
    setNumber([...number, "7"]);
  };
  const numberEight = () => {
    setNumber([...number, "8"]);
  };
  const numberNine = () => {
    setNumber([...number, "9"]);
  };
  const numberZero = () => {
    setNumber([...number, "0"]);
  };

  const erase = () => {
    number.pop();
    // console.log(number);
    setNumber([...number]);
    // console.log(number);
  };

  const sendNumber = () => {
    // 자바스크립트 함수를 쓸 때는 변수 생성해서 적용해주기!
    const newNumber = number.join("");
    dispatch(signUpActions.addNumber(newNumber));
  };

  return (
    <div className="keypad-wrapper">
      <div className="keypad-row">
        <div className="keypad-item" onClick={numberOne}>
          1
        </div>
        <div className="keypad-item" onClick={numberTwo}>
          2
        </div>
        <div className="keypad-item" onClick={numberThree}>
          3
        </div>
      </div>
      <div className="keypad-row">
        <div className="keypad-item" onClick={numberFour}>
          4
        </div>
        <div className="keypad-item" onClick={numberFive}>
          5
        </div>
        <div className="keypad-item" onClick={numberSix}>
          6
        </div>
      </div>
      <div className="keypad-row">
        <div className="keypad-item" onClick={numberSeven}>
          7
        </div>
        <div className="keypad-item" onClick={numberEight}>
          8
        </div>
        <div className="keypad-item" onClick={numberNine}>
          9
        </div>
      </div>
      <div className="keypad-row">
        <div className="keypad-item" onClick={numberZero}>
          0
        </div>
      </div>
      <button className="eraseButton" onClick={erase}>
        지우기
      </button>
      <h3>번호 : {number}</h3>
      <StyledButton1
        onClick={() => {
          moveToPhone2();
          sendNumber();
        }}
      >
        인증번호 받기
      </StyledButton1>
    </div>
  );
};
const StyledButton1 = styled.button`
  cursor: pointer;
  padding: 10px;
  margin-bottom: 20px;
`;
export default PhoneKeypad;
