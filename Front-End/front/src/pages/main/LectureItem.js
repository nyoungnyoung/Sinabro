import React, { useState } from "react";
import styled from "styled-components";
// import { FaStar } from "react-icons/fa"

const dummyItem = [
  {
    id: 1,
    number: 1,
    title: "유화 그리기",
    startTime: new Date(2023, 0, 25),
    endTime: new Date(2023, 2, 31),
    description: "유화로 가을 풍경을 그려봅니다",
    score: 4,
    savedName:
      "https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png",
  },
  {
    id: 2,
    number: 2,
    title: "캐리커처 그리기",
    startTime: new Date(2023, 0, 25),
    endTime: new Date(2023, 2, 31),
    description: "유화로 가을 풍경을 그려봅니다",
    score: 5,
    savedName:
      "https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png",
  },
  {
    id: 3,
    number: 3,
    title: "풍경화 그리기",
    startTime: new Date(2023, 0, 25),
    endTime: new Date(2023, 2, 31),
    description: "유화로 가을 풍경을 그려봅니다",
    score: 3.5,
    savedName:
      "https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png",
  },
  {
    id: 4,
    number: 4,
    title: "만화 그리기",
    startTime: new Date(2023, 0, 25),
    endTime: new Date(2023, 2, 31),
    description: "유화로 가을 풍경을 그려봅니다",
    score: 4.2,
    savedName:
      "https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png",
  },
  {
    id: 5,
    number: 5,
    title: "캘리그라피",
    startTime: new Date(2023, 0, 25),
    endTime: new Date(2023, 2, 31),
    description: "유화로 가을 풍경을 그려봅니다",
    score: 3.8,
    savedName:
      "https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png",
  },
  {
    id: 6,
    number: 6,
    title: "수채화 그리기",
    startTime: new Date(2023, 0, 25),
    endTime: new Date(2023, 2, 31),
    description: "유화로 가을 풍경을 그려봅니다",
    score: 4.8,
    savedName:
      "https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png",
  },
];

const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// const HoveredLecture = styled.div`
//     width: 200px;
//     height: 250px;
//     background-color: aquamarine;
//     position: relative;
// `

const LectureDiv = styled.div`
  width: 250px;
  height: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
  /* position: absolute; */
`;

const StyledImg = styled.img`
  width: 250px;
  height: 150px;
`;

// const Lecture = ({ img, description, title, period, tags, score }) => {
//     const [hover, setHover] = useState('off')
//     const onMouseEnter = () => setHover('on')
//     const onMouseLeave = () => setHover('off')
//     const stars = (score) => {
//         const result = []
//         for (let i = 5; i > 0; i--) {
//             score--;
//             if (score >= 0) {
//                 result.push(<FaStar size="12" color="d57358"/>);
//             } else {
//                 result.push(<FaStar size="12" color="lightgray"/>);
//             }
//         }
//         return result;
//     }
// }

function LectureItem() {
  // const [hover, setHover] = useState('off')
  // const onMouseEnter = () => setHover('on')
  // const onMouseLeave = () => setHover('off')

  return (
    <div className="LectureItem">
      <ListDiv>
        {dummyItem.map((item) => (
          <LectureDiv key={item.id}>
            <StyledImg src={item.savedName} alt="img"></StyledImg>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>
              {item.startTime.toLocaleDateString()}
              {" ~ "}
              {item.endTime.toLocaleDateString()}
            </p>
          </LectureDiv>
          //
        ))}
      </ListDiv>
    </div>
  );
}

export default LectureItem;
