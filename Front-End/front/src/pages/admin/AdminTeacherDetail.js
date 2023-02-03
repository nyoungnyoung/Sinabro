import React from "react";
import { useNavigate } from "react-router-dom";

const AdminTeacherDetail = () => {
  const navigate = useNavigate();

  const moveToList = () => {
    navigate("/admin/teacher");
  };

  return (
    <div>
      <h1>AdminTeacherDetail</h1>
      <p></p>

      <button onClick={moveToList}>목록으로</button>
    </div>
  );
};

export default AdminTeacherDetail;
