import React from "react";
import styled from "styled-components";

function GlassBtn({ handleRatio, ratio }) {
  return (
    <GlassBtnOl>
        <Li onClick={() => {
            handleRatio(ratio - 0.25);
        }}>−</Li>
        <Li onClick={() => {
            handleRatio(1);
        }}>{ratio}</Li>
        <Li onClick={() => {
            handleRatio(ratio + 0.25);
        }}>+</Li>
    </GlassBtnOl>
  );
}

const GlassBtnOl = styled.ol`
    padding: 0;
    list-style: none;
`; 

const Li = styled.li`
    width: 1em;
    display: inline-block;
    padding: 0px 10px 0px 10px;
    margin: 0px 5px 0px 5px;
`;

export default GlassBtn;
