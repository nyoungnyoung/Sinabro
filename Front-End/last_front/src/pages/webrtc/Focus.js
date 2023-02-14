import { set } from "date-fns";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
// import ZoomView from '@components/ZoomView';

function Focus({ ratio }) {
  const imageRectRef = useRef();
  let containerDiv = useRef();
  
  useEffect(() => {
    if ((containerDiv.current.offsetWidth * ratio) + containerDiv.current.offsetLeft < imageRectRef.current.offsetWidth) {
      containerDiv.current.style.left = `${imageRectRef.current.offsetWidth - (containerDiv.current.offsetHeight * ratio)}px`;
    }

    if ((containerDiv.current.offsetHeight * ratio) + containerDiv.current.offsetTop < imageRectRef.current.offsetHeight) {
      containerDiv.current.style.top = `${imageRectRef.current.offsetHeight - (containerDiv.current.offsetHeight * ratio)}px`;
    }
  }, [ratio]);

  let posX;
  let posY;

  const moveScreenStart = e => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);
  
    posX = e.clientX;
    posY = e.clientY;
  };

  const moveScreen = e => {
    const minX = e.target.offsetLeft + (e.clientX - posX) <= 0;
    const minY = e.target.offsetTop + (e.clientY - posY) <= 0;
    
    if (e.target.offsetWidth * ratio + e.target.offsetLeft < imageRectRef.current.offsetWidth) {
      e.target.style.left = `${imageRectRef.current.offsetWidth - e.target.offsetWidth * ratio}px`;
    }

    if ((e.target.offsetHeight * ratio) + e.target.offsetTop < imageRectRef.current.offsetHeight) {
      e.target.style.top = `${imageRectRef.current.offsetHeight - e.target.offsetHeight * ratio}px`;
    }

    if(e.target.offsetLeft + (e.clientX - posX) <= 0) {
      e.target.style.left  = `${e.target.offsetLeft + (e.clientX - posX)}px`;
    } else {
      e.target.style.left  = `0px`;
    }
    
    e.target.style.top = minY
      ? `${e.target.offsetTop + (e.clientY - posY)}px`
      : '0px';
  
    posX = minX ? e.clientX : 0;
    posY = minY ? e.clientY : 0;
  };

  const moveScreenEnd = e => {
    const limitX = e.target.offsetLeft + (e.clientX - posX) <= 0;
    const limitY = e.target.offsetTop + (e.clientY - posY) <= 0;

    e.target.style.left = limitX
      ? `${e.target.offsetLeft + (e.clientX - posX)}px`
      : '0px';
    e.target.style.top = limitY
      ? `${e.target.offsetTop + (e.clientY - posY)}px`
      : '0px';
  };

  const [over, setOver] = useState(false);

  const changeToSecond = () => {
    setOver(!over);
    console.log(over);
  };

  const user = 2;

  if (user <= 2) {
    // 2명 이하
    return (
      <StyledDiv
        ref={imageRectRef}
      >
        {/* <h1>Focus</h1> */}
        {/* <p>2명</p> */}
        <ContainerDiv
          ref={containerDiv}
          ratio={ratio}
          onDragStart={moveScreenStart}
          onDrag={moveScreen}
          onDragEnd={moveScreenEnd}
          draggable
        >
          <TwoDiv>
            <TwoDiv2>1번 user</TwoDiv2>
            <TwoDiv2>2번 user</TwoDiv2>
          </TwoDiv>
        </ContainerDiv>
      </StyledDiv>
    );
  } else if (user === 3) {
    // 3명
    return (
      <StyledDiv>
        {/* <h1>Focus</h1> */}
        {/* <p>3명</p> */}
        <ThreeDiv>
          <ThreeDiv2>1번 user</ThreeDiv2>
          <ThreeDiv2>2번 user</ThreeDiv2>
        </ThreeDiv>
        <ThreeDiv>
          <ThreeDiv2>3번 user</ThreeDiv2>
        </ThreeDiv>
      </StyledDiv>
    );
  } else if (user === 4) {
    // 4명
    return (
      <StyledDiv>
        {/* <h1>Focus</h1> */}
        {/* <p>4명</p> */}
        <FourDiv>
          <FourDiv2>1번 user</FourDiv2>
          <FourDiv2>2번 user</FourDiv2>
        </FourDiv>
        <FourDiv>
          <FourDiv2>3번 user</FourDiv2>
          <FourDiv2>4번 user</FourDiv2>
        </FourDiv>
      </StyledDiv>
    );
  } else if (user === 5) {
    // 5명
    return (
      <StyledDiv>
        {/* <h1>Focus</h1> */}
        {/* <p>5명</p> */}
        <FiveDiv>
          <FiveDiv2>1번 user</FiveDiv2>
          <FiveDiv2>2번 user</FiveDiv2>
          <FiveDiv2>3번 user</FiveDiv2>
        </FiveDiv>
        <FiveDiv>
          <FiveDiv2>4번 user</FiveDiv2>
          <FiveDiv2>5번 user</FiveDiv2>
        </FiveDiv>
      </StyledDiv>
    );
  } else if (user === 6) {
    // 6명
    return (
      <StyledDiv>
        {/* <h1>Focus</h1> */}
        {/* <p>6명</p> */}
        <SixDiv>
          <SixDiv2>1번 user</SixDiv2>
          <SixDiv2>2번 user</SixDiv2>
          <SixDiv2>3번 user</SixDiv2>
        </SixDiv>
        <SixDiv>
          <SixDiv2>4번 user</SixDiv2>
          <SixDiv2>5번 user</SixDiv2>
          <SixDiv2>6번 user</SixDiv2>
        </SixDiv>
      </StyledDiv>
    );
  } else if (user > 6) {
    if (over === false) {
      return (
        <StyledDiv>
          {/* <h1>Focus</h1> */}
          {/* <p>7명 이상</p> */}
          <SixDiv>
            <SixDiv2>1번 user</SixDiv2>
            <SixDiv2>2번 user</SixDiv2>
            <SixDiv2>3번 user</SixDiv2>
          </SixDiv>
          <SixDiv>
            <SixDiv2>4번 user</SixDiv2>
            <SixDiv2>5번 user</SixDiv2>
            <SixDiv2>6번 user</SixDiv2>
          </SixDiv>
          <SevenDiv>
            <SevenButton>◀</SevenButton>
            <SevenButton onClick={changeToSecond}>▶</SevenButton>
          </SevenDiv>
        </StyledDiv>
      );
    } else {
      return (
        <StyledDiv>
          {/* <h1>Focus</h1> */}
          {/* <p>7명 이상</p> */}
          <SixDiv>
            <SixDiv2>7번 user</SixDiv2>
            <SixDiv2>8번 user</SixDiv2>
            <SixDiv2>9번 user</SixDiv2>
          </SixDiv>
          <SixDiv>
            <SixDiv2>10번 user</SixDiv2>
            <SixDiv2>11번 user</SixDiv2>
            <SixDiv2>12번 user</SixDiv2>
          </SixDiv>
          <SevenDiv>
            <SevenButton onClick={changeToSecond}>◀</SevenButton>
            <SevenButton>▶</SevenButton>
          </SevenDiv>
        </StyledDiv>
      );
    }
  }
}

const StyledDiv = styled.div`
  overflow: hidden;
  width: 80%;
  height: 90vh;
  color: white;
  background-color: black;
  position: relative;
`;

const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => 100 * props.ratio}%;
  height: ${props => 100 * props.ratio}%;
  transform: scale(${props => props.ratio});
  transform-origin: left top;
  display: table;
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
  display: table-row;
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
