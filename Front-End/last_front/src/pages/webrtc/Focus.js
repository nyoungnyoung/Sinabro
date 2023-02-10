import React, { useRef, useState } from "react";
import styled from "styled-components";
import UserVideoComponent from "./openvidu/UserVideoComponent";
// import Zoom from "./Zoom";

function Focus({ glassOn, info }) {
  // console.log(glassOn);

  const [over, setOver] = useState(false);

  const changeToSecond = () => {
    setOver(!over);
    console.log(over);
  };

  const glassDiv = useRef();

  const user = 2;

  const mouseMove = (event) => {
    // console.log(event);

    // 마우스 위치
    // console.log(event);
    const pageX = event.pageX;
    const pageY = event.pageY;

    // StyledGlass.style.left = clientX + console.log("clientX", clientX);
    // console.log("pageX", pageX);
    // console.log("pageY", pageY);

    // const left = glassDiv.current.pageX + pageX;
    // const top = glassDiv.current.pageY + pageY;

    // console.log("left", left);
    // console.log("top", top);
  }; 

  return (
    <StyledDiv>
      {info.subscribers.map((sub, i) => (
              <div key={i}>
                <UserVideoComponent streamManager={sub} />
              </div>
            ))}
    </StyledDiv>
  );
  // if (user <= 2) {
  //   // 2명 이하
  //   return (
  //     <StyledDiv
  //       onMouseMove={(event) => {
  //         mouseMove(event);
  //       }}
  //     >
  //       {/* <h1>Focus</h1> */}
  //       {/* <p>2명</p> */}
  //       <TwoDiv>
  //         <TwoDiv2>1번 user</TwoDiv2>
  //         <TwoDiv2>2번 user</TwoDiv2>
  //       </TwoDiv>
  //       {glassOn && (
  //         <StyledGlass ref={glassDiv}>
  //           <h1>돋보기 화면</h1>
  //         </StyledGlass>
  //         // <Zoom />
  //       )}
  //     </StyledDiv>
  //   );
  // } else if (user === 3) {
  //   // 3명
  //   return (
  //     <StyledDiv>
  //       {/* <h1>Focus</h1> */}
  //       {/* <p>3명</p> */}
  //       <ThreeDiv>
  //         <ThreeDiv2>1번 user</ThreeDiv2>
  //         <ThreeDiv2>2번 user</ThreeDiv2>
  //       </ThreeDiv>
  //       <ThreeDiv>
  //         <ThreeDiv2>3번 user</ThreeDiv2>
  //       </ThreeDiv>
  //     </StyledDiv>
  //   );
  // } else if (user === 4) {
  //   // 4명
  //   return (
  //     <StyledDiv>
  //       {/* <h1>Focus</h1> */}
  //       {/* <p>4명</p> */}
  //       <FourDiv>
  //         <FourDiv2>1번 user</FourDiv2>
  //         <FourDiv2>2번 user</FourDiv2>
  //       </FourDiv>
  //       <FourDiv>
  //         <FourDiv2>3번 user</FourDiv2>
  //         <FourDiv2>4번 user</FourDiv2>
  //       </FourDiv>
  //     </StyledDiv>
  //   );
  // } else if (user === 5) {
  //   // 5명
  //   return (
  //     <StyledDiv>
  //       {/* <h1>Focus</h1> */}
  //       {/* <p>5명</p> */}
  //       <FiveDiv>
  //         <FiveDiv2>1번 user</FiveDiv2>
  //         <FiveDiv2>2번 user</FiveDiv2>
  //         <FiveDiv2>3번 user</FiveDiv2>
  //       </FiveDiv>
  //       <FiveDiv>
  //         <FiveDiv2>4번 user</FiveDiv2>
  //         <FiveDiv2>5번 user</FiveDiv2>
  //       </FiveDiv>
  //     </StyledDiv>
  //   );
  // } else if (user === 6) {
  //   // 6명
  //   return (
  //     <StyledDiv>
  //       {/* <h1>Focus</h1> */}
  //       {/* <p>6명</p> */}
  //       <SixDiv>
  //         <SixDiv2>1번 user</SixDiv2>
  //         <SixDiv2>2번 user</SixDiv2>
  //         <SixDiv2>3번 user</SixDiv2>
  //       </SixDiv>
  //       <SixDiv>
  //         <SixDiv2>4번 user</SixDiv2>
  //         <SixDiv2>5번 user</SixDiv2>
  //         <SixDiv2>6번 user</SixDiv2>
  //       </SixDiv>
  //     </StyledDiv>
  //   );
  // } else if (user > 6) {
  //   if (over === false) {
  //     return (
  //       <StyledDiv>
  //         {/* <h1>Focus</h1> */}
  //         {/* <p>7명 이상</p> */}
  //         <SixDiv>
  //           <SixDiv2>1번 user</SixDiv2>
  //           <SixDiv2>2번 user</SixDiv2>
  //           <SixDiv2>3번 user</SixDiv2>
  //         </SixDiv>
  //         <SixDiv>
  //           <SixDiv2>4번 user</SixDiv2>
  //           <SixDiv2>5번 user</SixDiv2>
  //           <SixDiv2>6번 user</SixDiv2>
  //         </SixDiv>
  //         <SevenDiv>
  //           <SevenButton>◀</SevenButton>
  //           <SevenButton onClick={changeToSecond}>▶</SevenButton>
  //         </SevenDiv>
  //       </StyledDiv>
  //     );
  //   } else {
  //     return (
  //       <StyledDiv>
  //         {/* <h1>Focus</h1> */}
  //         {/* <p>7명 이상</p> */}
  //         <SixDiv>
  //           <SixDiv2>7번 user</SixDiv2>
  //           <SixDiv2>8번 user</SixDiv2>
  //           <SixDiv2>9번 user</SixDiv2>
  //         </SixDiv>
  //         <SixDiv>
  //           <SixDiv2>10번 user</SixDiv2>
  //           <SixDiv2>11번 user</SixDiv2>
  //           <SixDiv2>12번 user</SixDiv2>
  //         </SixDiv>
  //         <SevenDiv>
  //           <SevenButton onClick={changeToSecond}>◀</SevenButton>
  //           <SevenButton>▶</SevenButton>
  //         </SevenDiv>
  //       </StyledDiv>
  //     );
  //   }
  // }
}

const StyledDiv = styled.div`
  width: 80%;
  height: 90vh;
  color: white;
  background-color: black;
  position: relative;
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

const TwoDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const TwoDiv2 = styled.div`
  width: 600px;
  height: 50vh;
  background-color: green;
  margin-top: 100px;
  margin-left: 13px;
  margin-right: 13px;
  position: relative;
`;

const ThreeDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ThreeDiv2 = styled.div`
  width: 40%;
  height: 280px;
  background-color: green;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

const FourDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FourDiv2 = styled.div`
  width: 40%;
  height: 280px;
  background-color: green;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

const FiveDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FiveDiv2 = styled.div`
  width: 32%;
  height: 250px;
  background-color: green;
  margin-top: 40px;
  margin-left: 15px;
  margin-right: 15px;
`;
const SixDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const SixDiv2 = styled.div`
  width: 32%;
  height: 250px;
  background-color: green;
  margin-top: 40px;
  margin-left: 15px;
  margin-right: 15px;
`;

const SevenDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SevenButton = styled.div`
  color: white;
  font-size: 30px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  :hover {
    // text-shadow: 3px 3px 3px yellow;
    color: red;
  }
`;

export default Focus;
