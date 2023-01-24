import { Route, Routes } from "react-router-dom";
import React from "react";
import BoardList from "./BoardList";
import BoardForm from "./BoardForm";
import BoardDetail from "./BoardDetail";

function Board() {
  return (
    <div>
      <h1>공지게시판</h1>
      <Routes>
        <Route path="/" element={<BoardList />}></Route>
        <Route path="/create" element={<BoardForm />}></Route>
        <Route path="/detail" element={<BoardDetail />}></Route>
      </Routes>
    </div>
  );
}

export default Board;
