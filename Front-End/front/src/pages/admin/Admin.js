import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminMain from "./AdminMain";
import AdminTeacherManage from "./AdminTeacherManage";
import AdminUserManage from "./AdminUserManage";

function Admin() {
  return (
    <div className="Admin">
      <h1>관리자 게시판</h1>
      <Routes>
        <Route path="/" element={<AdminMain />}></Route>
        <Route path="/teacher" element={<AdminTeacherManage />}></Route>
        <Route path="/user" element={<AdminUserManage />}></Route>
      </Routes>
    </div>
  );
}

export default Admin;
