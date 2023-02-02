import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import FindPwInput from "./FindPwInput";
import CsBtn from "../../components/CsBtn";

const FindPwDiv = styled.div`
  padding-left: 18%;
  padding-right: 18%;
  padding-top: 18vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function FindPw() {
  const findPwStep = useLocation().pathname.slice(8);
  if (findPwStep in [1, 2, 3, 4, 5, 6, 7]) {
    return (
      <div>
        <StyledLink to="/">
          <button>첫 화면으로 돌아가기</button>
        </StyledLink>
        <FindPwDiv>
          <FindPwInput findPwStep={findPwStep} />
          <StyledLink to="/cs">
            <CsBtn />
          </StyledLink>
        </FindPwDiv>
      </div>
    );
  } else {
    return <h1>잘못된 접근입니다.</h1>;
  }
}

export default FindPw;
