import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CsBtn from "../../components/CsBtn";
import styled from "styled-components";

function SignUpName() {
  const navigate = useNavigate();

  const moveToBirth = () => {
    navigate("/signup/birth");
  };

  // 이름 저장
  const [name, setName] = useState("");

  return (
    <div>
      <StyledDiv1>
        {/* <h1>SignUpName</h1> */}
        <div>
          <h3>고객님의 이름을 적어주세요!</h3>
        </div>
        <StyledDiv2>
          <StyledInput
            type="text"
            value={name}
            placeholder="고객님의 이름을 적어주세요 :)"
            onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}
          />
          <StyledButton1>확인</StyledButton1>
        </StyledDiv2>
        <div>
          <StyledButton2 onClick={moveToBirth}>다음 단계로</StyledButton2>
        </div>
      </StyledDiv1>
      <CsBtn />
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
export default SignUpName;
