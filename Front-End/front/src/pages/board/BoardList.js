// 공지게시판 - 게시글 목록

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function BoardList({ boardList }) {
  const navigate = useNavigate();

  const goToCreate = () => {
    navigate("/board/create");
  };

  const goToDetail = (id) => {
    navigate(`/board/detail/${id}`);
  };

  const header = ["번호", "제목", "작성자", "생성일자"];

  return (
    <div className="BoardList">
      <StyledTable>
        <Styledthead>
          <tr>
            {header.map((item, idx) => {
              return <Styledtd key={idx}>{item}</Styledtd>;
            })}
          </tr>
        </Styledthead>

        <Styledbody>
          {boardList.map((item, idx) => {
            return (
              <tr key={idx} onClick={() => goToDetail(item.id)}>
                <Styledtd>{item.id}</Styledtd>
                <Styledtd>{item.title}</Styledtd>
                <Styledtd>{item.author}</Styledtd>
                <Styledtd>{item.created_date}</Styledtd>
              </tr>
            );
          })}
        </Styledbody>
      </StyledTable>
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

const Styledbody = styled.tbody`
  padding: 8px 3px;
  cursor: pointer;
`;

const Styledtd = styled.td`
  padding: 8px 3px;
`;

const Styledbutton = styled.button`
  width: 60px;
  height: 30px;
  margin: 20px;
`;

export default BoardList;
