// 공지게시판

import React from "react";
import { Routes, Route } from "react-router-dom";
import BoardList from "./BoardList";
import BoardForm from "./BoardForm";

function Board() {
  return (
    <div className="Board">
      <div>
        <h1>Board</h1>
        <BoardList />
        <button>생성</button>
      </div>

      {/* 중첩라우터 생성 */}
      <Routes>
        <Route path="list" element={<BoardList />} />
        <Route path="create" element={<BoardForm />} />
      </Routes>
    </div>
  );
}

export default Board;
