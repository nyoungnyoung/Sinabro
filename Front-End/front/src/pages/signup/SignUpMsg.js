import React from "react";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";

function SignUpMsg(props) {
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
          <StyledButton1>로그인하기</StyledButton1>
        </div>
      </StyledDiv1>
      <CsBtn />
    </div>
  );
}

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
