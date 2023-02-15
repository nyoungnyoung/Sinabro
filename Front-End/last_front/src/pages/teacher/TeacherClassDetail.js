import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
// import styled from "styled-components";
import dummy from "../../dummy";

function TeacherClassDetail() {
  const dummyData = dummy.data;

  const navigate = useNavigate();

  const { id } = useParams();

  const moveBoardList = () => {
    navigate("/teacher");
  };

  const [isEdited, setIsEdited] = useState(true);

  const letsEdit = () => {
    setIsEdited(!isEdited);
  };

  // 원본 데이터 저장된 data

  // onChange할 때마다 값을 갱신해주기!
  // const updateData = () => {};

  // console.log(dummyData[0].lectureTimeList[0].day);
  return (
    <div>
      {isEdited && (
        <div>
          <div>
            <h1>강의상세정보</h1>
            <p>현재 페이지의 파라미터는 {id}입니다.</p>
            <p>강의명 : {dummyData[id - 1].originalName}</p>
            <p>주제 : {dummyData[id].subject}</p>
            <p>강의 내용 : {dummyData[id].content}</p>
            <p>최대 인원 : {dummyData[id].maxOccupancy}</p>
            <p>강의 시작 날짜 : {dummyData[id].startDate}</p>
            <p>강의 종료 날짜 : {dummyData[id].endDate}</p>
            <p>강의 요일 : {dummyData[id].lectureTimeList[0].day}</p>
            <p>강의 시작시간 : {dummyData[id].lectureTimeList[0].startTime}</p>
            <p>강의 종료시간 : {dummyData[id].lectureTimeList[0].runTime}</p>
          </div>
        </div>
      )}

      {!isEdited && (
        <div>
          <div>
            <h1>강의상세정보</h1>
            <p>현재 페이지의 파라미터는 {id}입니다.</p>
            <label>강의명 : </label>
            <input type="text" value={dummyData[id].originalName} />
            <br />
            <label>주제 : </label>
            <input type="text" value={dummyData[id].subject} />
            <br />
            <label>강의 내용 : </label>
            <input type="text" value={dummyData[id].content} />
            <br />
            <label>최대 인원 : </label>
            <input type="text" value={dummyData[id].maxOccupancy} />
            <br />
            <label>강의 시작 날짜: </label>
            <input type="date" value={dummyData[id].startDate} />
            <br />
            <label>강의 종료 날짜 : </label>
            <input type="date" value={dummyData[id].endDate} />
            <br />
            <label>강의 요일 : </label>
            <input type="text" value={dummyData[id].lectureTimeList[0].day} />
            <br />
            <label>강의 시작 시간: </label>
            <input
              type="time"
              value={dummyData[id].lectureTimeList[0].startTime}
            />
            <br />
            <label>강의 종료 시간: </label>
            <input
              type="time"
              value={dummyData[id].lectureTimeList[0].startTime.runTime}
            />
            <br />
          </div>
        </div>
      )}
      <button onClick={letsEdit}>수정</button>
      <button>삭제</button>
      <button onClick={moveBoardList}>목록으로</button>
    </div>
  );
}

export default TeacherClassDetail;
