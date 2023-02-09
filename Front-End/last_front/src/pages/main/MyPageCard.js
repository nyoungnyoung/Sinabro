import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const StyledBtn = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 80px;
  border: none;
  border-radius: 0px 0px 10px 10px;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function MyPageCard({ no, subject, startDate, endDate, content, savedName }) {
  // 강의 신청 여부 판단해줄 state 만들기
  // const [isRegist, setIsRegist] = useState()

  //   // 강의신청 버튼 클릭 시 신청 요청 보내는 axios!
  // const registLecture = async() => {
  //   try {
  //     const regist = await axios.get("/normal/lecture/" +no )
  //   } catch(e) {
  //     console.log(e)
  //   }
  // }

  //   const getSearchData = async () => {
  //     try {
  //       const lecture = await axios.get("/main/search/" + search);
  //       dispatch(changeLecture(lecture.data));
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  return (
    <div>
      <LectureDiv>
        <StyledLink to={`/webrtc/${no}`}>
          <StyledImg src={savedName} alt="img" />
          <h2>{subject}</h2>
          <p>{content}</p>
          <p>
            {startDate.slice(0, 10)} ~ {endDate.slice(0, 10)}
          </p>
          <StyledBtn>강의입장</StyledBtn>
        </StyledLink>
      </LectureDiv>
      {/* <p>
        로그인 후 메인페이지에서 강의 목록 내부에 카드 형식으로 들어갈 컴포넌트
      </p>
      <p>
        왼쪽페이지:신청가능한 강의(신청하기)/오른쪽페이지:내가 신청한
        강의(입장하기)
      </p>
      <p>얘를 클릭했을 때 LectureDetail이 나와야함!</p> */}
    </div>
  );
}

export default MyPageCard;
