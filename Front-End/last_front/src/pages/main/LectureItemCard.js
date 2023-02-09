import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

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
}) {
  // useNavigate 사용하기 위해 선언
  const navigate = useNavigate();

  // 강의 상세 버튼 누르면 디테일 페이지로 이동
  const moveToDetail = no => {
    navigate(`/detail/${no}`);
  };

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
        <StyledLink to={`/detail/${no}`}>
          <StyledImg src={savedName} alt="img" />
          <h2>{subject}</h2>
          <p>{content}</p>
          <p>
            {startDate.slice(0, 10)} ~ {endDate.slice(0, 10)}
          </p>
        </StyledLink>
        <div>
          <StyledBtn1>강의신청</StyledBtn1>
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
