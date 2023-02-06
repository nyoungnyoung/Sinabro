import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import dummy from "../../dummy";

function TeacherClassList() {
  // console.log(dummy);

  const dummyData = dummy.data;
  // console.log(dummyData);

  const navigate = useNavigate();

  const moveToCreate = () => {
    navigate("/teacher/create");
  };

  const moveToDetail = (id) => {
    navigate(`/teacher/detail/${id}`);
  };

  const header = ["번호", "강의명", "강의시작일자", "강의종료일자"];
  return (
    <div>
      <h3>강의 리스트</h3>
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
          {dummyData.map((item, idx) => {
            return (
              <tr
                key={idx}
                onClick={() => {
                  moveToDetail(item.id);
                }}
              >
                <StyledTd>{item.id}</StyledTd>
                <StyledTd>{item.originalName}</StyledTd>
                <StyledTd>{item.startDate}</StyledTd>
                <StyledTd>{item.endDate}</StyledTd>
              </tr>
            );
          })}
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

export default TeacherClassList;
