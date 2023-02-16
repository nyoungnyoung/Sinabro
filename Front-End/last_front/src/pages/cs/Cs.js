import React from "react";
import styled from "styled-components";

const CsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const CounselorDiv = styled.div`
  width: 100%;
  height: 50vh;
  background-color: lightgray;
  vertical-align: middle;
`;

const CustomerDiv = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #c2c2c2;
`;

function Cs() {
  return (
    <div className="Cs">
      {/* <h1>customer service</h1> */}
      <CsDiv>
        <CounselorDiv>
          <h1>상담사화면</h1>
        </CounselorDiv>
        <CustomerDiv>
          <h1>고객화면</h1>
        </CustomerDiv>
      </CsDiv>
    </div>
  );
}

export default Cs;
