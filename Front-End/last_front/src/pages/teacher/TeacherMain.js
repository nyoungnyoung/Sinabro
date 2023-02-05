import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function TeacherMain() {
  const navigate = useNavigate();

  const moveToCreate = () => {
    navigate("/teacher/create");
  };
  const header = ["번호", "강의명", "진행상태"];
  return (
    <div>
      <h1>강사 메인페이지</h1>
      {/* <p>게시판 CRUD처럼 생성버튼, 수정버튼, 삭제버튼 이런식으로 나오게 구현</p> */}
      <StyledTable>
        <StyledHead>
          <tr>
            {header.map((item, idx) => {
              return <StyledTd key={idx}>{item}</StyledTd>;
            })}
          </tr>
        </StyledHead>

        <StyledTbody>
          <tr>
            <StyledTd>1</StyledTd>
            <StyledTd>유화그리기</StyledTd>
            <StyledTd>진행 중</StyledTd>
          </tr>
        </StyledTbody>
      </StyledTable>
      <StyledButton onClick={moveToCreate}>강의생성</StyledButton>
    </div>
  );
}

const StyledTable = styled.table`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const StyledHead = styled.thead`
  background-color: gray;
  color: white;
`;
const StyledTbody = styled.tbody`
  padding: 10px 4px;
  cursor: pointer;
`;

const StyledTd = styled.td`
  padding: 8px 3px;
`;

export default TeacherMain;
