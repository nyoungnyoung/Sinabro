// 공지게시판 - 게시글 세부 내용

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function BoardDetail({ boardList }) {
  const navigate = useNavigate();

  const { id } = useParams();

  const moveBoardList = () => {
    navigate("/board");
    // console.log(boardList[id - 1].title);
    // console.log(id);
  };

  return (
    <div>
      <StyledDiv>
        {/* <p>현재 페이지의 파라미터는 {id} 입니다.</p> */}
        <p>제목 : {boardList[id - 1].title}</p>
        <p>내용 : {boardList[id - 1].content}</p>
        <p>생성일자 : {boardList[id - 1].created_date}</p>
      </StyledDiv>
      <button onClick={moveBoardList}>목록</button>
    </div>
  );
}

const StyledDiv = styled.div`
  padding-left: 30px;
  text-align: left;
`;
export default BoardDetail;
