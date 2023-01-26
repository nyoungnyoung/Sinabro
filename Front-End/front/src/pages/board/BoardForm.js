import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function BoardForm({ onCreate }) {
  // 게시글 데이터
  const [boardItem, setBoardItem] = useState({
    title: "",
    content: "",
  });

  // 이동
  const navigate = useNavigate();

  // 이동
  const moveBoardList = () => {
    navigate("/board");
  };

  const handleChangeBoardItem = (e) => {
    setBoardItem({
      ...boardItem,
      [e.target.name]: e.target.value,
    });
  };

  const titleInput = useRef();
  const contentInput = useRef();

  const handleSubmit = () => {
    // console.log(boardItem);

    if (boardItem.title.length < 1) {
      titleInput.current.focus();
      return;
    }

    if (boardItem.content.length < 1) {
      contentInput.current.focus();
      return;
    }
    onCreate(boardItem.title, boardItem.content);

    // 공지게시판으로 이동
    navigate("/board");
  };

  return (
    <div>
      <h3>게시글 생성</h3>
      <Styledinput
        ref={titleInput}
        name="title"
        value={boardItem.title}
        onChange={handleChangeBoardItem}
        type="text"
        placeholder="제목"
      />
      <Styledtextarea
        ref={contentInput}
        name="content"
        value={boardItem.content}
        onChange={handleChangeBoardItem}
        cols="30"
        rows="10"
        placeholder="내용"
      />
      <br />
      <Styledbutton onClick={handleSubmit}>등록</Styledbutton>
      <Styledbutton onClick={moveBoardList}>취소</Styledbutton>
    </div>
  );
}

const Styledinput = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px;
`;

const Styledtextarea = styled.textarea`
  width: 70%;
  padding: 10px;
  margin: 10px;
`;

const Styledbutton = styled.button`
  width: 60px;
  height: 30px;
  margin: 5px;
`;
export default BoardForm;
