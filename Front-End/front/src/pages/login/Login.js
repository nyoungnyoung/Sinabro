import LoginInput from "./LoginInput";
import SignupBtn from "./SignupBtn";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import FindBtn from "./FindBtn";
import CsBtn from "../../components/CsBtn";

const LoginDiv = styled.div`
  padding-left: 18%;
  padding-right: 18%;
  padding-top: 18vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Login() {
  const loginStep = useLocation().pathname.slice(7);
  if (loginStep === "id" || loginStep === "password") {
    return (
      <div>
        <StyledLink to="/">
          <button>첫 화면으로 돌아가기</button>
        </StyledLink>
        <LoginDiv>
          <LoginInput loginStep={loginStep} />
          <StyledLink to="/signup">
            <SignupBtn />
          </StyledLink>
          <FindBtn loginStep={loginStep} />
          <StyledLink to="/cs">
            <CsBtn />
          </StyledLink>
        </LoginDiv>
      </div>
    );
  } else {
    return <h1>잘못된 접근입니다.</h1>;
  }
}

export default Login;
