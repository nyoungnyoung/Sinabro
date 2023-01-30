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

function CsBtn() {
  return (
    <BtnDiv>
      <StyledImg src="/img/cscenter.png" alt="cscenter" />
      <StyledP>사용이 어려우신 분들은 이곳을 눌러 주세요!</StyledP>
    </BtnDiv>
  );
}

export default CsBtn;
