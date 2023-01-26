// import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
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
    description: "친구의 얼굴을 캐릭터로 그려봐요",
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
    description: "원하는 풍경을 맘껏 그려요",
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
    description: "추억의 만화를 그려보아요",
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
    description: "예쁜 글씨 쓰기",
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
    description: "수채화로 바다풍경을 그려봐요",
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
  // const [hover, setHover] = useState("off");
  // const onMouseEnter = () => setHover("on");
  // const onMouseLeave = () => setHover("off");

  return (
    <div className="LectureItem">
      <ListDiv>
        {dummyItem.map(item => (
          <Card
            key={item.id}
            id={item.id}
            imgsrc={item.savedName}
            title={item.title}
            description={item.description}
            startTime={item.startTime}
            endTime={item.endTime}
          />
        ))}
      </ListDiv>
    </div>
  );
}

export default LectureItem;
