import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function BoardForm(props) {
  const navigate = useNavigate();

  const moveBoardList = () => {
    navigate("/board");
  };

  return (
    <div>
      <h3>게시글 생성</h3>
      <Styledinput type="text" placeholder="제목" />
      <Styledtextarea cols="30" rows="10" placeholder="내용"></Styledtextarea>
      <br />
      <Styledbutton>등록</Styledbutton>
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
