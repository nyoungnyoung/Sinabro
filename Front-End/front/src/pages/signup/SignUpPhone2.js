import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
import { useSelector } from "react-redux";

function SignUpPhone2() {
  const navigate = useNavigate();

  const state = useSelector((state) => state);
  console.log(state);

  const moveToAgree = () => {
    navigate("/signup/agree");
  };

  // 인증번호 저장
  const [prove, setProve] = useState();

  return (
    <div>
      <StyledDiv1>
        {/* <h1>SignUpPhone2</h1> */}
        <div>
          <h3>고객님 휴대폰으로 전송된 인증번호 6자리를 입력해주세요!</h3>
        </div>
        <StyledDiv2>
          <StyledInput
            type="text"
            value={prove}
            placeholder="인증번호를 3분 내로 입력해주세요 :)"
            onChange={(e) => {
              setProve(e.target.value);
              console.log(prove);
            }}
          />
          <StyledButton1>확인</StyledButton1>
        </StyledDiv2>
        <StyledDiv2>
          <StyledButton2 onClick={moveToAgree}>다음 단계로</StyledButton2>
        </StyledDiv2>
      </StyledDiv1>
      <LoginDiv>
        <StyledLink to="/cs">
          <CsBtn />
        </StyledLink>
      </LoginDiv>
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
export default SignUpPhone2;
