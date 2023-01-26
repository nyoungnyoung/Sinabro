import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { lectureId } = useParams();
  return (
    <div className="Detail">
      <h1>Detail</h1>
      <p>{lectureId}번 강의 페이지입니다.</p>
      <div></div>
    </div>
  );
}

export default Detail;
