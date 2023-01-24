// 공지게시판 - 게시글 목록

import React from "react";
import { useNavigate } from "react-router-dom";
import BoardItem from "./BoardItem";
import styled from "styled-components";

function BoardList() {
  const navigate = useNavigate();

  const goToCreate = () => {
    navigate("/board/create");
  };

  return (
    <div className="BoardList">
      <h3>게시글 목록</h3>
      <StyledTable>
        <Styledthead>
          <tr>
            <Styledtd>번호</Styledtd>
            <Styledtd>제목</Styledtd>
            <Styledtd>작성자</Styledtd>
            <Styledtd>생성일자</Styledtd>
          </tr>
        </Styledthead>

        <tbody>
          <tr>
            <Styledtd>1</Styledtd>
            <Styledtd>설날 연휴로 인한 휴강</Styledtd>
            <Styledtd>관리자</Styledtd>
            <Styledtd>2023.01.20</Styledtd>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <Styledtd>2</Styledtd>
            <Styledtd>삼일절로 인한 휴강</Styledtd>
            <Styledtd>관리자</Styledtd>
            <Styledtd>2023.03.01</Styledtd>
          </tr>
        </tbody>
      </StyledTable>
      <BoardItem />
      <Styledbutton onClick={goToCreate}>생성</Styledbutton>
    </div>
  );
}

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

const Styledtd = styled.td`
  padding: 8px 3px;
`;

const Styledbutton = styled.button`
  width: 60px;
  height: 30px;
  margin: 5px;
`;

export default BoardList;
