import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";

function SignUpMsg(props) {
  const navigate = useNavigate();

  const moveToLogin = () => {
    navigate("/login/id");
  };
  return (
    <div>
      {/* <h1>SignUpMsg</h1> */}
      <StyledDiv1>
        <div>
          <p>안녕하세요 000님 :)</p>
          <p>아이디 : </p>
          <p>가입이 완료되었습니다!</p>
          <p>다시 한 번 로그인하셔서 사이트를 이용해주세요!</p>
        </div>
        <div>
          <StyledButton1 onClick={moveToLogin}>로그인하기</StyledButton1>
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

const StyledButton1 = styled.button`
  cursor: pointer;
  padding: 10px;
  margin-bottom: 15px;
`;

export default SignUpMsg;
