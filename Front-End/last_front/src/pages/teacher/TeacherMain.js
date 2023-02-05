import React from "react";
import { Routes, Route } from "react-router-dom";
import TeacherClassCreate from "./TeacherClassCreate";
import TeacherClassDetail from "./TeacherClassDetail";
import TeacherClassList from "./TeacherClassList";

function TeacherMain() {
  return (
    <div>
      <h1>강사 메인페이지</h1>

      <Routes>
        <Route path="/" element={<TeacherClassList />}></Route>
        <Route path="/create" element={<TeacherClassCreate />}></Route>
        <Route path="/detail/:id" element={<TeacherClassDetail />}></Route>
      </Routes>
    </div>
  );
}

export default TeacherMain;
