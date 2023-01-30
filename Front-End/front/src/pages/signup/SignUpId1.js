import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";

function SignUpId1() {
  const navigate = useNavigate();

  const moveToPw1 = () => {
    navigate("/signup/pw1");
  };

  // id 저장
  const [id, setId] = useState("");

  return (
    <div>
      {/* <h2>아이디 입력단계 </h2> */}
      <StyledDiv1>
        <div>
          <h3>고객님께서 사용하고 싶으신 아이디를 적어주세요!</h3>
        </div>
        <StyledDiv2>
          <StyledInput
            type="text"
            value={id}
            placeholder="여기에 아이디를 입력해주세요 :)"
            onChange={(e) => {
              // console.log(e.target.value);
              setId(e.target.value);
              console.log(id);
            }}
          />
          <StyledButton1>중복체크</StyledButton1>
        </StyledDiv2>
        <div>
          <StyledButton2 onClick={moveToPw1}>다음 단계로</StyledButton2>
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
`;

const StyledButton2 = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 10px;
`;
export default SignUpId1;
