import React from "react";
import styled from "styled-components";
function Focus() {
  return (
    <StyledDiv>
      <h1>Focus</h1>
      <p>포커스형 컴포넌트</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 80%;
  hegiht: 90vh;
  color: white;
  background-color: black;
`;

export default Focus;
