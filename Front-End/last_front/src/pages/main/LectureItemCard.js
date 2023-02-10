import React, { useState } from "react";
import styled from "styled-components";
import axios from "../../store/baseURL";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeLecture } from "../../store/detailSlice";
import { updateisEnrolled, updateLecture } from "../../store/mainSlice";

const LectureDiv = styled.div`
  width: 100%;
  border: none;
  border-radius: 10px;
  box-shadow: -1px 15px 30px -12px black;
  margin-bottom: 50px;
  :hover {
    transform: scale(1.1);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 5px;
`;

const StyledBtn1 = styled.button`
  margin-top: 20px;
  width: 50%;
  height: 80px;
  border: none;
  border-right: 1px solid white;
  border-radius: 0px 0px 0px 10px;
  background-color: #f7c815;
  font-size: larger;
  font-weight: 1000;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #ff5f2e;
    color: white;
  }
`;

const StyledBtn2 = styled.button`
  margin-top: 20px;
  width: 50%;
  height: 80px;
  border: none;
  border-radius: 0px 0px 10px 0px;
  background-color: #f7c815;
  font-size: larger;
  font-weight: 1000;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #ff5f2e;
    color: white;
  }
`;

const StyledBtn3 = styled.button`
  margin-top: 20px;
  width: 50%;
  height: 80px;
  border: none;
  border-right: 1px solid white;
  border-radius: 0px 0px 0px 10px;
  background-color: #9e978f;
  font-size: larger;
  font-weight: 1000;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #474747;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function LectureItemCard({
  no,
  subject,
  startDate,
  endDate,
  content,
  savedName,
  isEnrolled,
}) {
  // useNavigate, dispatch 사용하기 위해 선언
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Access Token, registorInfo 스토어에서 가져오기
  const loginToken = useSelector(state => state.login.token.accessToken);
  // const registInfo = useSelector(state => state.main.);

  // isEnrolled 저장할 state생성
  const [registInfo, setRegistInfo] = useState(isEnrolled);

  // 강의 상세 버튼 누르면 디테일 페이지로 이동
  const moveToDetail = no => {
    navigate(`/detail/${no}`);
  };

  // console.log(loginToken);
  // console.log(isEnrolled);

  // 수강신청하기 버튼 누르면 신청하는 axios
  // 수강신청하기 버튼 누르면 신청하는 axios
  const registLecture = async no => {
    try {
      await axios.post(
        "/normal/lecture/" + no,
        {},
        {
          headers: { "X-ACCESS-TOKEN": loginToken },
        }
      );
      setRegistInfo(true);
      dispatch(updateLecture(no));
      console.log("수강신청");
    } catch (e) {
      console.log(e);
    }
  };

  // 수강신청취소 버튼 누르면 취소하는 axios
  const deleteLecture = async no => {
    try {
      await axios.delete("/normal/lecture/" + no, {
        headers: { "X-ACCESS-TOKEN": loginToken },
      });
      setRegistInfo(false);
      dispatch(updateLecture(no));
      console.log("수강취소");
      // console.log(lecture.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <LectureDiv>
        <StyledLink to={`/detail/${no}`}>
          <StyledImg src={savedName} alt="img" />
          <h2>{subject}</h2>
          <p>{content}</p>
          <p>
            {startDate.slice(0, 10)} ~ {endDate.slice(0, 10)}
          </p>
        </StyledLink>
        <div>
          {registInfo ? (
            <StyledBtn3 onClick={() => deleteLecture(no)}>수강취소</StyledBtn3>
          ) : (
            <StyledBtn1 onClick={() => registLecture(no)}>수강신청</StyledBtn1>
          )}

          {/* {isEnrolled ? (
            <StyledBtn1 onClick={deleteLecture(no)}>수강취소</StyledBtn1>
          ) : (
            <StyledBtn1 onClick={registLecture(no)}>수강신청</StyledBtn1>
          )} */}
          {/* <StyledBtn1>강의신청</StyledBtn1> */}
          <StyledBtn2
            onClick={() => {
              moveToDetail(no);
            }}
          >
            강의상세
          </StyledBtn2>
        </div>
      </LectureDiv>
    </div>
  );
}

export default LectureItemCard;
