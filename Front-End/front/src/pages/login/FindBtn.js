import styled from "styled-components";
import { Link } from "react-router-dom";

const BtnDiv = styled.button`
  border: 1px solid black;
  width: 100%;
  display: flex;
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 5px;
`;

const StyledImg = styled.img`
  margin-top: 4px;
  width: 50px;
  margin-right: 15px;
`;

const StyledP = styled.p`
  font-size: large;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function FindBtn(props) {
  const loginStep = props.loginStep;
  return (
    <BtnDiv>
      <StyledImg src="/img/question.png" alt="question" />
      {loginStep === "id" ? (
        <StyledLink to="/findid/1">
          <StyledP>혹시 아이디를 잊어버리셨나요?</StyledP>
        </StyledLink>
      ) : (
        <StyledLink to="/findpw/1">
          <StyledP>혹시 비밀번호를 잊어버리셨나요?</StyledP>
        </StyledLink>
      )}
    </BtnDiv>
  );
}

export default FindBtn;
