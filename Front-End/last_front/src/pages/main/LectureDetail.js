import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const DetailPageDiv = styled.div`
  /* border: 1px solid black; */
  margin-left: 5vw;
  margin-right: 5vw;
`;

const StyledImg = styled.img`
  width: 50%;
  height: auto;
  margin-right: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const TableDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

function LectureDetail() {
  // 카드 데이터 받아와서 state에 저장해주기
  const [lectureData, setLectureData] = useState([]);
  // const [loading, setLoading] = useState([]);
  // const lectureNo = useLocation().pathname.slice(8);

  // 컴포넌트가 mount 될 때 axios 요청해서 데이터 저장
  useEffect(() => {
    const loadData = async () => {
      const result = await axios.get("/dummydata/NewLectureDetail.json");
      setLectureData(result.data[0]);
    };
    loadData();
  }, []);

  console.log(lectureData);
  // console.log(lectureNo);

  // const targetLecture = lectureData.filter(
  //   (lecture) => lecture.no == lectureNo
  // );
  // console.log(targetLecture[0]);

  // console.log(lectureNo);

  return (
    <DetailPageDiv>
      <h1>LectureDetail</h1>
      <StyledDiv>
        <StyledImg src={lectureData.savedName} alt="img"></StyledImg>
        <TableDiv>
          <h1>{lectureData.subject}</h1>
          <p>{lectureData.content}</p>
          <p>
            수강기간 {lectureData.startDate} ~ {lectureData.endDate}
          </p>
          <p>강사명 {lectureData.name}</p>
          {lectureData.isEnrolled ? (
            <button>수강신청완료</button>
          ) : (
            <div>
              <button>장바구니담기</button>
              <button>수강신청하기</button>
            </div>
          )}
        </TableDiv>
      </StyledDiv>
    </DetailPageDiv>
  );
}

export default LectureDetail;
