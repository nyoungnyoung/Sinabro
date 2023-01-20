import React from "react";

function BoardForm(props) {
  return (
    <div>
      <h3>게시글 생성</h3>
      <label name="제목">제목</label>
      <input type="text" />
      <br />
      <label name="내용">내용</label>
      <textarea cols="30" rows="10"></textarea>
      <br />
      <button>등록</button>
      <button>취소</button>
    </div>
  );
}

export default BoardForm;
