import React, { useState } from "react";
import styled, { css } from "styled-components";
import UserVideoComponent from "./openvidu/UserVideoComponent";

function Focus({
  info,
  OV,
  session,
  handleMainVideoStream,
  mode,
}) {

  const user = info.subscribers.length;
  console.log("참여자 수: " + user);

  return (
    <StyledDiv user={user}>
      <UserVideoComponent streamManager={info.publisher} user={user} />

      {info.subscribers.map((sub, i) => (
        <div
          key={i}
          onClick={() => {
            handleMainVideoStream(sub);
          }}
        >
          <UserVideoComponent streamManager={sub} user={user} mode={mode} />
        </div>
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 80%;
  /* height: 90vh; */
  color: white;
  background-color: black;
  /* position: relative; */
  /* justify-items: center;
  justify-content: center; */
  display: grid;

  ${({ user }) => {
    if (user + 1 === 1) {
      return css`
        grid-template-columns: 100%;
      `;
    } else if (user + 1 === 2) {
      return css`
        grid-template-columns: 50% 50%;
        /* grid-template-rows: 1fr; */
      `;
    } else if (user + 1 === 3) {
      return css`
        grid-template-columns: 50% 50%;
        /* grid-template-rows: 1fr 1fr; */
      `;
    } else if (user + 1 === 4) {
      return css`
        grid-template-columns: 50% 50%;
        /* grid-template-rows: 1fr 1fr; */
      `;
    } else if (user + 1 === 5) {
      return css`
        grid-template-columns: 1fr 1fr 1fr;
        /* grid-template-rows: 1fr 1fr; */
      `;
    } else if (user + 1 >= 6) {
      return css`
        grid-template-columns: 1fr 1fr 1fr;
        /* grid-template-rows: 1fr 1fr; */
      `;
    }
  }};
`;

const StyledGlass = styled.div`
  width: 200px;
  height: 150px;
  position: absolute;
  border: 5px yellow solid;
  border-radius: 15px;
  left: 0;
  top: 30;
`;

// const TwoDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   position: relative;
// `;

// const TwoDiv2 = styled.div`
//   width: 600px;
//   height: 50vh;
//   background-color: green;
//   margin-top: 100px;
//   margin-left: 13px;
//   margin-right: 13px;
//   position: relative;
// `;

// const ThreeDiv = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const ThreeDiv2 = styled.div`
//   width: 40%;
//   height: 280px;
//   background-color: green;
//   margin-top: 30px;
//   margin-left: 20px;
//   margin-right: 20px;
// `;

// const FourDiv = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const FourDiv2 = styled.div`
//   width: 40%;
//   height: 280px;
//   background-color: green;
//   margin-top: 30px;
//   margin-left: 20px;
//   margin-right: 20px;
// `;

// const FiveDiv = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const FiveDiv2 = styled.div`
//   width: 32%;
//   height: 250px;
//   background-color: green;
//   margin-top: 40px;
//   margin-left: 15px;
//   margin-right: 15px;
// `;
// const SixDiv = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const SixDiv2 = styled.div`
//   width: 32%;
//   height: 250px;
//   background-color: green;
//   margin-top: 40px;
//   margin-left: 15px;
//   margin-right: 15px;
// `;

// const SevenDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const SevenButton = styled.div`
//   color: white;
//   font-size: 30px;
//   margin-left: 20px;
//   margin-right: 20px;
//   cursor: pointer;
//   :hover {
//     // text-shadow: 3px 3px 3px yellow;
//     color: red;
//   }
// `;

export default Focus;
