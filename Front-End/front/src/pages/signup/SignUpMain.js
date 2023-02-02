import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
import KakaoSignUpButton from "./button/KakaoSignUpButton";

function SignUpMain() {
  const navigate = useNavigate();

  const moveSignUpId1 = () => {
    navigate("/signup/id1");
  };
  return (
    <div>
      {/* <h2>회원가입 메인페이지</h2> */}

      {/* 회원가입 시작하기 */}
      <StyledDiv>
        <h3>회원가입 시작하기</h3>
        <button onClick={moveSignUpId1}>다음단계로</button>
      </StyledDiv>

      {/* 고객센터 안내 */}
      <LoginDiv>
        <StyledLink to="/cs">
          <CsBtn />
        </StyledLink>
      </LoginDiv>

      {/* 카카오톡 회원가입 */}
      <KakaoSignUpButton />
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

const StyledDiv = styled.div`
  width: 60%;
  height: 100px;
  border: 1px solid black;
  margin: auto;
`;
export default SignUpMain;
