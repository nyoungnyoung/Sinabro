// 강사리스트
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminTeacherList = () => {
  const navigate = useNavigate();

  const moveToCreate = () => {
    navigate("/admin/create");
  };

  // 표 헤더
  const header = ["번호", "이름", "아이디", "전화번호", "조회/삭제"];

  // store에서 등록된 강사 불러오기
  const teachers = useSelector((state) => state.teacher);

  console.log(teachers);
  return (
    <div>
      <h3>강사리스트</h3>
      <button onClick={moveToCreate}>강사 등록</button>
      <StyledTable>
        <Styledthead>
          <tr>
            {header.map((item, idx) => {
              return <Styledtd key={idx}>{item}</Styledtd>;
            })}
          </tr>
        </Styledthead>

        <Styledbody>
          <tr>
            <Styledtd>1</Styledtd>
            <Styledtd>이아현</Styledtd>
            <Styledtd>ahyun0821</Styledtd>
            <Styledtd>01020438222</Styledtd>

            <StyledButton>조회</StyledButton>
            <StyledButton>삭제</StyledButton>
          </tr>
        </Styledbody>
      </StyledTable>
    </div>
  );
};

const StyledTable = styled.table`
  width: 80%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  border-collapse: collapse;
`;

const Styledthead = styled.thead`
  background-color: gray;
  color: white;
`;

const Styledbody = styled.tbody`
  padding: 8px 3px;
`;

const Styledtd = styled.td`
  padding: 8px 3px;
`;

const StyledButton = styled.button`
  padding: 10px;
  margin: 10px;
`;

export default AdminTeacherList;
