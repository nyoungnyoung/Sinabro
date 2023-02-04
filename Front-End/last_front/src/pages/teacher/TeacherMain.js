import React from "react";
import styled from "styled-components";

function TeacherMain() {
  const header = ["번호", "강의명", "강의인원", "진행상태"];
  return (
    <div>
      <h1>강사 메인페이지</h1>
      {/* <p>게시판 CRUD처럼 생성버튼, 수정버튼, 삭제버튼 이런식으로 나오게 구현</p> */}
      <StyledButton>강의생성</StyledButton>
      <StyledTable>
        <StyledHead>
          {header.map((item, idx) => {
            return <td key={idx}>{item}</td>;
          })}
        </StyledHead>

        <StyledTbody>
          <td>1</td>
          <td>유화그리기</td>
          <td>10</td>
          <td>진행 중</td>
        </StyledTbody>
      </StyledTable>
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
export default TeacherMain;
