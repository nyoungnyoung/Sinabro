import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const dummyItem = [
  {
    id: 1,
    number: 1,
    title: "유화 그리기",
    name: "김호균",
    startTime: new Date(2023, 0, 25),
    endTime: new Date(2023, 2, 31),
    description: "유화로 가을 풍경을 그려봅니다",
    score: 4,
    savedName:
      "https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png",
    isEnrolled: true,
  },
  {
    id: 2,
    number: 2,
    title: "캐리커처 그리기",
    name: "양동기",
    startTime: new Date(2023, 0, 25),
    endTime: new Date(2023, 2, 31),
    description: "친구의 얼굴을 캐릭터로 그려봐요",
    score: 5,
    savedName:
      "https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png",
    isEnrolled: false,
  },
  {
    id: 3,
    number: 3,
    title: "풍경화 그리기",
    name: "윤선영",
    startTime: new Date(2023, 0, 25),
    endTime: new Date(2023, 2, 31),
    description: "원하는 풍경을 맘껏 그려요",
    score: 3.5,
    savedName:
      "https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png",
    isEnrolled: true,
  },
  {
    id: 4,
    number: 4,
    title: "만화 그리기",
    name: "이아현",
    startTime: new Date(2023, 0, 25),
    endTime: new Date(2023, 2, 31),
    description: "추억의 만화를 그려보아요",
    score: 4.2,
    savedName:
      "https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png",
    isEnrolled: true,
  },
  {
    id: 5,
    number: 5,
    title: "캘리그라피",
    name: "이진우",
    startTime: new Date(2023, 0, 25),
    endTime: new Date(2023, 2, 31),
    description: "예쁜 글씨 쓰기",
    score: 3.8,
    savedName:
      "https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png",
    isEnrolled: false,
  },
  {
    id: 6,
    number: 6,
    title: "수채화 그리기",
    name: "김싸피",
    startTime: new Date(2023, 0, 25),
    endTime: new Date(2023, 2, 31),
    description: "수채화로 바다풍경을 그려봐요",
    score: 4.8,
    savedName:
      "https://cdn.inflearn.com/public/courses/329922/cover/364e7406-3569-437b-b719-7f146cad3d60/thumbnail-js.png",
    isEnrolled: false,
  },
];

const DetailPageDiv = styled.div`
  /* border: 1px solid black; */
  margin-left: 5vw;
  margin-right: 5vw;
`;

const StyledImg = styled.img`
  width: 50%;
  height: auto;
  margin-right: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const TableDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

function Detail() {
  const { lectureId } = useParams();
  const targetLecture = dummyItem.filter(item => item.id == lectureId)[0];
  console.log(targetLecture);

  return (
    <DetailPageDiv className="Detail">
      <h1>Detail</h1>
      <p>{lectureId}번 강의 페이지입니다.</p>
      {/* <div>{dummyItem.filter(item => item.id === lectureId)}</div> */}
      <StyledDiv>
        <StyledImg src={targetLecture.savedName} alt="img"></StyledImg>
        <TableDiv>
          <h1>{targetLecture.title}</h1>
          <p>{targetLecture.description}</p>
          <p>
            수강기간 {targetLecture.startTime.toLocaleDateString()} ~{" "}
            {targetLecture.endTime.toLocaleDateString()}
          </p>
          <p>강사명 {targetLecture.name}</p>
          {targetLecture.isEnrolled ? (
            <button>수강신청완료</button>
          ) : (
            <div>
              <button>장바구니담기</button>
              <button>수강신청하기</button>
            </div>
          )}
        </TableDiv>
      </StyledDiv>
      <div>
        <br />
        <Link to="info">
          <button>과정소개</button>
        </Link>
        <Link to="index">
          <button>강의목차</button>
        </Link>
        <Link to="review">
          <button>수강후기</button>
        </Link>
        <Outlet />
      </div>
    </DetailPageDiv>
  );
}

export default Detail;
