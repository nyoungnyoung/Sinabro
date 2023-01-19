// 공지게시판

import React from "react";
import BoardList from "./BoardList";

function Board() {
  return (
    <div className="Board">
      <h1>Board</h1>
      <BoardList />
      <button>생성</button>
    </div>
  );
}

export default Board;
