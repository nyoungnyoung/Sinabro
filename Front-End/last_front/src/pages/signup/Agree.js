import React, { useState } from "react";
import styled from "styled-components";

const Agree = () => {
  // 약관동의 여부 변수
  const [agree, setAgree] = useState(false);

  // 약관동의 변경 함수
  const changeAgree = () => {
    setAgree(!agree);
    setAgree(!agree);
  };

  // console.log(agree);

  return (
    <StyledDiv>
      <StyledDiv2>
        <StyledP>사이트 이용을 위한 약관동의를 해주세요.</StyledP>
        <AgreeDiv>개인정보 이용 안내</AgreeDiv>
        <StyledDiv3>
          <input type="checkbox" onClick={changeAgree} />
          <p>약관에 동의합니다</p>
        </StyledDiv3>
      </StyledDiv2>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  background-color: #fff9be;
  // background-color: white;
  height: 100vh;
`;

const StyledDiv2 = styled.div`
  background-color: white;
  border: 1px whitesmoke solid;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  width: 90vh;
  height: 40vh;
  text-align: left;
  margin: auto;
`;

const StyledP = styled.p`
  font-size: 25px;
  margin-left: 50px;
  margin-top: 30px;
`;

const AgreeDiv = styled.div`
  border: 1px solid black;
  width: 75vh;
  height: 20vh;
  margin-left: 50px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 50px;
`;
export default Agree;
