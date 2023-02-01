import React, { useState } from "react";
import "./PhoneKeypad.css";

const PhoneKeypad = () => {
  const [number, stateNumber] = useState("");

  const numberOne = () => {
    stateNumber([...number, 1]);
  };

  const numberTwo = () => {
    stateNumber([...number, 2]);
  };

  const numberThree = () => {
    stateNumber([...number, 3]);
  };
  const numberFour = () => {
    stateNumber([...number, 4]);
  };
  const numberFive = () => {
    stateNumber([...number, 5]);
  };
  const numberSix = () => {
    stateNumber([...number, 6]);
  };
  const numberSeven = () => {
    stateNumber([...number, 7]);
  };
  const numberEight = () => {
    stateNumber([...number, 8]);
  };
  const numberNine = () => {
    stateNumber([...number, 9]);
  };
  const numberZero = () => {
    stateNumber([...number, 0]);
  };
  console.log(number);

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
    </div>
  );
};

export default PhoneKeypad;
