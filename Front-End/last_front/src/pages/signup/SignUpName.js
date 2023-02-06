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
        <StyledButton
          onClick={() => {
            moveToNumber();
            HandleSignUp(name, "name");
          }}
        >
          등록
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
  width: 90vh;
  height: 30vh;
  text-align: left;
  margin: auto;
`;

const StyledP = styled.p`
  font-size: 25px;
  margin-left: 50px;
  margin-top: 40px;
`;

const StyledInput = styled.input`
  width: 50vh;
  height: 30px;
  font-size: 20px;
  padding: 10px;
  margin-right: 15px;
  margin-left: 50px;
`;

const StyledButton = styled.button`
  width: 60px;
  height: 50px;
  font-size: 15px;
`;
export default SignUpName;
