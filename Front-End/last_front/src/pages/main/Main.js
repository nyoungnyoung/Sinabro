import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LectureList from "./LectureList";
import MyPageList from "./MyPageList";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

function Main() {
  const [lecture, setLecture] = useState({
    // mainCategory: [
    //   {
    //     name: "모든강의",
    //     no: 1,
    //   },
    // ],
    isSelect: false,
    SelectedMainNo: 1,
    subCategory: [
      {
        name: "",
        no: 1,
      },
    ],
    LectureCard: [
      {
        no: 0,
        subject: "",
        startDate: "",
        endDate: "",
        content: "",
        savedName: "",
      },
    ],
    MyPageCard: [
      {
        no: 0,
        subject: "",
        startDate: "",
        endDate: "",
        content: "",
        savedName: "",
      },
    ],
  });

  const changeValue = (value, type) => {
    setLecture({
      ...lecture,
      [type]: value,
    });
  };

  // const changeValue = (e, type) => {
  //   if (e.target.id) {
  //     setLecture({
  //       ...lecture,
  //       [type]: e.target.id,
  //     });
  //   } else {
  //     setLecture({
  //       ...lecture,
  //       [type]: e.target.value,
  //     });
  //   }
  // };

  console.log(lecture);

  return (
    <div>
      <h1>Main</h1>
      <p>로그인 후 보여지는 첫번째 페이지!</p>
      <p>왼쪽에 신청 가능한 강의목록, 오른쪽에 마이페이지</p>
      <StyledDiv>
        <LectureList changeValue={changeValue} lecture={lecture} />
        <MyPageList changeValue={changeValue} />
      </StyledDiv>
    </div>
  );
}

export default Main;
