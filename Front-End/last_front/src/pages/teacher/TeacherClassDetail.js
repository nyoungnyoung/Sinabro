import React from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate, useParams } from "react-router-dom";
// import styled from "styled-components";

function TeacherClassDetail() {
  const navigate = useNavigate();

  // const { id } = useParams();

  const moveBoardList = () => {
    navigate("/teacher");
  };
  return (
    <div>
      <div>
        <h1>강의상세정보</h1>
        <h3>카테고리 : </h3>
        <h3>강의명 : </h3>
        <h3>강의 내용 : </h3>
        <h3>강의 시간 : </h3>
      </div>
      <button onClick={moveBoardList}>목록으로</button>
    </div>
  );
}

export default TeacherClassDetail;
