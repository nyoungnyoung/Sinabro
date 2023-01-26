// 공지게시판 - 게시글 세부 내용

import React from "react";
import { useNavigate } from "react-router-dom";

function BoardDetail() {
  const navigate = useNavigate();

  const moveBoardList = () => {
    navigate("/board");
  };

  return (
    <div>
      <h3>BoardDetail</h3>
      <div>
        <p>제목 : </p>
        <p>내용 : </p>
        <p>생성일자 : </p>
      </div>
      <button onClick={moveBoardList}>목록</button>
    </div>
  );
}

export default BoardDetail;
