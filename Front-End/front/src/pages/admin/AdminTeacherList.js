// 강사리스트
import React from "react";
// import AdminTeacherItem from "./AdminTeacherItem";

const AdminTeacherList = () => {
  const header = ["번호", "이름", "이메일", "전화번호"];

  return (
    <div>
      <h3>강사리스트</h3>
      <table>
        <caption>강사리스트</caption>
        <thead>
          <tr>
            <th>
              {header.map((item, idx) => {
                return <td key={idx}>{item}</td>;
              })}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminTeacherList;
