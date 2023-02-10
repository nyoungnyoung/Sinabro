import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../store/baseURL";
import { useSelector, useDispatch } from "react-redux";
import { changeLecture } from "../../store/detailSlice";
import { updateisEnrolled } from "../../store/mainSlice";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
// import { changeLecture, changeMainNo } from "../../store/mainSlice";
// import axios from "axios";

const DetailPageDiv = styled.div`
  /* border: 1px solid black; */
  margin-left: 5vw;
  margin-right: 5vw;
`;

const StyledImg = styled.img`
  width: 50%;
  margin-right: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  /* @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 600px) {
    flex-direction: column;
  } */
  /* @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  } */
  /* @media only screen and (min-width: 992px) {
    display: flex;
  }
  @media only screen and (min-width: 1200px) {
    display: flex;
  } */
`;

const TableDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const StyledBtn = styled.button`
  margin-top: 15px;
  width: 80%;
  height: 60px;
  border: none;
  border-radius: 10px;
  background-color: #f7c815;
  font-size: larger;
  font-weight: 1000;
  color: black;
  :hover {
    transform: scale(1.2);
    background-color: #ff5f2e;
    color: white;
  }
`;

function LectureDetail() {
  // dispatch 사용하기 위해 정의해주기
  const dispatch = useDispatch();

  // Access Token, 강의 상세정보 스토어에서 가져오기
  const loginToken = useSelector(state => state.login.token.accessToken);
  const lectureData = useSelector(state => state.detail.lectureData);
  const registInfo = useSelector(state => state.detail.lectureData.isEnrolled);
  // const enrollInfo = useSelector(state => state.detail.lectureData.isEnrolled);

  // isEnrolled 저장할 state생성
  const [isEnrolled, setIsEnrolled] = useState(registInfo);

  // LectureNo 주소에서 받아오기
  const lectureNo = Number(useLocation().pathname.slice(8));

  // 컴포넌트가 mount 될 때 axios 요청해서 데이터 store에 저장
  useEffect(() => {
    axios
      .get("/lecture/" + lectureNo, {
        headers: { "X-ACCESS-TOKEN": loginToken },
      })
      .then(info => {
        dispatch(changeLecture(info.data));
      });
  }, []);

  // 수강신청하기 버튼 누르면 신청하는 axios
  const registLecture = async () => {
    try {
      await axios.post(
        "/normal/lecture/" + lectureNo,
        {},
        {
          headers: { "X-ACCESS-TOKEN": loginToken },
        }
      );
      setIsEnrolled(true);
      dispatch(updateisEnrolled());
      console.log("수강신청");
      // console.log(lecture.data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(registInfo);
  console.log(isEnrolled);

  // 수강신청취소 버튼 누르면 취소하는 axios
  const deleteLecture = async () => {
    try {
      await axios.delete("/normal/lecture/" + lectureNo, {
        headers: { "X-ACCESS-TOKEN": loginToken },
      });
      setIsEnrolled(false);
      dispatch(updateisEnrolled());
      console.log("수강취소");
      // console.log(lecture.data);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(lectureData);
  // console.log(isEnrolled);
  // console.log(registInfo);

  return (
    <div>
      <NavBar />
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
            <div>
              {isEnrolled ? (
                <StyledBtn onClick={deleteLecture}>수강신청취소</StyledBtn>
              ) : (
                <StyledBtn onClick={registLecture}>수강신청하기</StyledBtn>
              )}
            </div>
          </TableDiv>
        </StyledDiv>
      </DetailPageDiv>
    </div>
  );
}

export default LectureDetail;
