import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SignUpName({ HandleSignUp }) {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const changeName = (event) => {
    setName(event);
  };
  const moveToNumber = () => {
    navigate("/signup/number");
  };

  console.log(name);

  return (
    <StyledDiv>
      <StyledDiv2>
        <StyledP>고객님의 이름을 적어주세요.</StyledP>
        <StyledInput
          type="text"
          value={name}
          onChange={(event) => {
            changeName(event.target.value);
          }}
          placeholder="여기에 이름을 적어주세요 :)"
        />
        <br />
        <StyledButton
          onClick={() => {
            moveToNumber();
            HandleSignUp(name, "name");
          }}
        >
          다음 단계로
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
  font-size: 25px;
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
    outline: 3px solid yellow;
  }
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  margin-left: 50px;
  margin-top: 20px;
  font-size: 30px;
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
export default SignUpName;
