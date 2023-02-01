import styled from "styled-components";

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

function SignupBtn() {
  return (
    <BtnDiv>
      <StyledImg src="/img/idcard.png" alt="idcard" />
      <StyledP>혹시 아직 회원이 아니신가요?</StyledP>
    </BtnDiv>
  );
}

export default SignupBtn;
