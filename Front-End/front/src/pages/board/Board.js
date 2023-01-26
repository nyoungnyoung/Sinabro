import { Route, Routes } from "react-router-dom";
import React, { useState, useRef } from "react";
import BoardList from "./BoardList";
import BoardForm from "./BoardForm";
import BoardDetail from "./BoardDetail";

function Board() {
  const [state, setState] = useState([]);

  const dataId = useRef(1);

  const onCreate = (title, content) => {
    const author = "관리자";
    const created_date = new Date().toLocaleDateString("ko-KR");
    const newBoardItem = {
      id: dataId.current,
      title,
      content,
      author,
      created_date,
    };
    dataId.current += 1;
    setState([newBoardItem, ...state]);
  };

  return (
    <div>
      <h1>공지게시판</h1>
      <Routes>
        <Route path="/" element={<BoardList boardList={state} />}></Route>
        <Route
          path="/create"
          element={<BoardForm onCreate={onCreate} />}
        ></Route>
        <Route path="/detail" element={<BoardDetail />}></Route>
      </Routes>
    </div>
  );
}

export default Board;
