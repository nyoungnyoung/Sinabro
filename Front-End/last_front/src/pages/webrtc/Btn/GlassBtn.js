import React from "react";
import styled from "styled-components";

function GlassBtn({ handleRatio, ratio }) {
  return (
    <GlassBtnOl>
      <StyledLi
        onClick={() => {
          handleRatio(ratio - 0.25);
        }}
      >
        −
      </StyledLi>
      <Li
        onClick={() => {
          handleRatio(1);
        }}
      >
        {ratio}
      </Li>
      <StyledLi
        onClick={() => {
          handleRatio(ratio + 0.25);
        }}
      >
        +
      </StyledLi>
    </GlassBtnOl>
  );
}

const GlassBtnOl = styled.ol`
  padding: 0;
  margin: 5px;
  list-style: none;
  font-weight: 1000;
  font-size: 20px;
  cursor: pointer;
`;

const StyledLi = styled.li`
  background-color: gray;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: inline-block;
  /* padding: 0px 10px 0px 10px; */
  margin: 0px 20px 0px 20px;
  :hover {
    background-color: red;
  }
`;

const Li = styled.li`
  display: inline-block;
`;

export default GlassBtn;
