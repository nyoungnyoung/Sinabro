import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const dummydata = [
  {
    id: 1,
    number: 1,
    title: "유화 그리기",
  },
  {
    id: 2,
    number: 2,
    title: "캐리커처 그리기",
  },
  {
    id: 3,
    number: 3,
    title: "풍경화 그리기",
  },
  {
    id: 4,
    number: 4,
    title: "만화 그리기",
  },
  {
    id: 5,
    number: 5,
    title: "캘리그라피",
  },
  {
    id: 6,
    number: 6,
    title: "수채화 그리기",
  },
];

const StyledUl = styled.ul`
  margin-top: 1px;
  list-style: none;
  padding-left: 0px;
`;

const StyledLi = styled.li`
  font-size: 20px;
  margin: 5px;
  padding: 10px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBtn = styled.button`
  height: 40px;
  margin-top: 30px;
`;

function LectureIng() {
  const navigate = useNavigate();

  const toCreate = () => {
    navigate("/manage/create");
  };

  return (
    <div className="LectureIng">
      <StyledDiv>
        <h1>진행 중 강의 목록</h1>
        <StyledBtn onClick={toCreate}>새로운 강의 생성</StyledBtn>
      </StyledDiv>
      <hr />
      <StyledUl>
        {dummydata.map(item => (
          <div key={item.id}>
            <StyledLi>
              {item.title}
              <div>
                <button>강의수정</button>
                <button>강의시작</button>
              </div>
            </StyledLi>
            <hr />
          </div>
        ))}
      </StyledUl>
    </div>
  );
}

export default LectureIng;
