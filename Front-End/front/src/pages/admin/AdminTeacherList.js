// 강사리스트
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AdminTeacherList = () => {
  const navigate = useNavigate();

  const moveToCreate = () => {
    navigate("/admin/teacher/create");
  };
  const header = ["번호", "이름", "이메일", "전화번호", "조회/생성"];

  return (
    <div>
      <h3>강사리스트</h3>
      <button onClick={moveToCreate}>강사등록</button>

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
            <Styledtd>이름</Styledtd>
            <Styledtd>이메일</Styledtd>
            <Styledtd>전화번호</Styledtd>
            <Styledtd>
              <button>조회</button>
              <button>삭제</button>
            </Styledtd>
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
  cursor: pointer;
`;

const Styledtd = styled.td`
  padding: 8px 3px;
`;

export default AdminTeacherList;
