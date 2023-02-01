import React, { useState } from "react";
import "./PhoneKeypad.css";

const PhoneKeypad = ({ numberHandle }) => {
  const [number, setNumber] = useState("");

  const numberOne = () => {
    setNumber([...number, 1]);
  };
  const numberTwo = () => {
    setNumber([...number, 2]);
  };
  const numberThree = () => {
    setNumber([...number, 3]);
  };
  const numberFour = () => {
    setNumber([...number, 4]);
  };
  const numberFive = () => {
    setNumber([...number, 5]);
  };
  const numberSix = () => {
    setNumber([...number, 6]);
  };
  const numberSeven = () => {
    setNumber([...number, 7]);
  };
  const numberEight = () => {
    setNumber([...number, 8]);
  };
  const numberNine = () => {
    setNumber([...number, 9]);
  };
  const numberZero = () => {
    setNumber([...number, 0]);
  };

  const erase = () => {
    number.pop();
    // console.log(number);
    setNumber([...number]);
    // console.log(number);
  };

  // console.log(number);

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
    </div>
  );
};

export default PhoneKeypad;
