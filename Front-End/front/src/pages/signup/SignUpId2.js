// 아이디가 중복체크를 통과하지 못했을 때
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";

function SignUpId2() {
  const navigate = useNavigate();

  const moveToPw1 = () => {
    navigate("/signup/pw1");
  };

  return (
    <div>
      {/* <h1>SignUp ID_2</h1> */}
      <StyledDiv1>
        <div>
          <h3>다른 고객님께서 이미 사용하고 계신 아이디입니다. </h3>
          <h3>다른 아이디를 입력해주세요! </h3>
        </div>
        <StyledDiv2>
          <StyledInput
            type="text"
            placeholder="다른 아이디를 입력해주세요 :)"
          />
          <StyledButton1>중복체크</StyledButton1>
        </StyledDiv2>
        <div>
          <StyledButton2 onClick={moveToPw1}>다음 단계로</StyledButton2>
        </div>
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
`;

const StyledButton2 = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 10px;
`;

export default SignUpId2;
