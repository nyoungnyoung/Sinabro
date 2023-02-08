import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../store/baseURL";
import { useSelector, useDispatch } from "react-redux";
import { changeLecture, changeMainNo } from "../../store/mainSlice";
import { useLocation } from "react-router-dom";
// import axios from "axios";

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
  // Access Token 스토어에서 가져오기
  const loginToken = useSelector(state => state.login.token);

  // 카드 데이터 받아와서 state에 저장해주기
  const [lectureData, setLectureData] = useState([]);

  const lectureNo = Number(useLocation().pathname.slice(8));
  // console.log(lectureNo);
  // console.log(loginToken.accessToken);

  // 컴포넌트가 mount 될 때 axios 요청해서 데이터 저장
  useEffect(() => {
    axios.get("/lecture/" + lectureNo).then(info => {
      setLectureData(info.data);
    });
  }, []);

  // // 수강신청하기 버튼 누르면 신청하는 axios
  // const registLecture = async () => {
  //   try {
  //     const lecture = await axios.post("/normal/lecture/" + lectureNo, {
  //       headers: { "X-ACCESS-TOKEN": loginToken.accessToken },
  //     });
  //     console.log(lecture.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // console.log(lectureData);

  // const registLecture = async () => {
  //   try {
  //     const regist = await axios.get("/normal/lecture/" + lectureNo);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

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
              <button>수강신청하기</button>
              {/* <button onClick={registLecture}>수강신청하기</button> */}
            </div>
          )}
        </TableDiv>
      </StyledDiv>
    </DetailPageDiv>
  );
}

export default LectureDetail;
