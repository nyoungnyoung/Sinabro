// 공지게시판

import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BoardList from "./BoardList";
import BoardForm from "./BoardForm";

function Board() {
  const navigate = useNavigate();

  const goToCreate = () => {
    console.log("goToCreate");
    navigate("/board/create");
  };

  return (
    <div className="Board">
      <h1>공지게시판</h1>
      {/* <div>
        <h1>Board</h1>
        <BoardList />
        <button>생성</button>
      </div> */}

      {/* 중첩라우터 생성 */}
      <Routes>
        {/* <Route path="list" element={<BoardList />} /> */}
        <Route path="create" element={<BoardForm />} />
      </Routes>

      <BoardList />
      <button onClick={goToCreate}>게시글 생성</button>
    </div>
  );
}

export default Board;
