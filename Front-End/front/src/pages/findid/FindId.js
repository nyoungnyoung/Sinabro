import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import FindIdInput from "./FindIdInput";
import CsBtn from "../../components/CsBtn";

const FindIdDiv = styled.div`
  padding-left: 18%;
  padding-right: 18%;
  padding-top: 18vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function FindId() {
  const findIdStep = useLocation().pathname.slice(8);
  console.log(findIdStep);
  if (findIdStep in [1, 2, 3, 4, 5, 6]) {
    return (
      <div>
        <StyledLink to="/">
          <button>첫 화면으로 돌아가기</button>
        </StyledLink>
        <FindIdDiv>
          <FindIdInput findIdStep={findIdStep} />
          <StyledLink to="/cs">
            <CsBtn />
          </StyledLink>
        </FindIdDiv>
      </div>
    );
  } else {
    return <h1>잘못된 접근입니다.</h1>;
  }
}

export default FindId;
