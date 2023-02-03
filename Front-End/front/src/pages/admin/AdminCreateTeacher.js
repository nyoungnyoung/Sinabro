import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { teacherActions } from "../../store/TeacherSlice";

const AdminCreateTeacher = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 😀취소 버튼 클릭 시 강사 리스트로 이동
  const moveToTeacher = () => {
    navigate("/admin/teacher");
  };

  // 😀category 종류
  const categories = ["교육", "취미", "여가"];

  // 😀강사 등록 정보 저장
  const [tId, setTId] = useState("");
  const [tPassword, setTPassword] = useState("");
  const [tName, setTName] = useState("");
  const [tBirth, setTBirth] = useState("");
  const [tNumber, setTNumber] = useState("");
  const [tCategory, setTCategory] = useState("교육");

  // 😀강사 정보 전역 변수 관리
  const sendData = () => {
    dispatch(teacherActions.addTeacherId(tId));
    dispatch(teacherActions.addTeacherPassword(tPassword));
    dispatch(teacherActions.addTeacherName(tName));
    dispatch(teacherActions.addTeacherBirth(tBirth));
    dispatch(teacherActions.addTeacherNumber(tNumber));
    dispatch(teacherActions.addTeacherCategory(tCategory));
  };

  // 😀state확인용
  const state = useSelector((state) => state.teacher);
  console.log(state);

  return (
    <div>
      <h1>강사 등록 페이지</h1>
      <StyledDiv>
        <StyledDiv2>
          <label>아이디 : </label>
          <StyledInput
            type="text"
            value={tId}
            onChange={(e) => {
              setTId(e.target.value);
            }}
          />
          <br />
          <label>비밀번호 : </label>
          <StyledInput
            type="text"
            value={tPassword}
            onChange={(e) => {
              setTPassword(e.target.value);
            }}
          />
          <br />

          <label>이름 : </label>
          <StyledInput
            type="text"
            value={tName}
            onChange={(e) => {
              setTName(e.target.value);
            }}
          />
          <br />

          <label>생년월일 : </label>
          <StyledInput
            type="text"
            value={tBirth}
            onChange={(e) => {
              setTBirth(e.target.value);
            }}
          />
          <br />

          <label>전화번호 : </label>
          <StyledInput
            type="text"
            value={tNumber}
            onChange={(e) => {
              setTNumber(e.target.value);
            }}
          />
          <br />

          <label>카테고리 : </label>
          <select
            name="category"
            onChange={(e) => {
              setTCategory(e.target.value);
            }}
          >
            {categories.map((item, idx) => {
              return <option key={idx}>{item}</option>;
            })}
          </select>

          <br />
          <button onClick={sendData}>등록</button>
        </StyledDiv2>
        <button onClick={moveToTeacher}>취소</button>
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  margin-left: 50px;
`;
const StyledDiv2 = styled.div`
  diplay: flex;
  text-align: left;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
`;
export default AdminCreateTeacher;
