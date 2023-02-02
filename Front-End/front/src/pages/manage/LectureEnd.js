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
    title: "초상화 그리기",
  },
  {
    id: 3,
    number: 3,
    title: "이모티콘 그리기",
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

function LectureEnd() {
  const navigate = useNavigate();

  const toCreate = () => {
    navigate("/manage/create");
  };
  return (
    <div className="LectureEnd">
      <StyledDiv>
        <h1>완료된 강의 목록</h1>
        <StyledBtn onClick={toCreate}>새로운 강의 생성</StyledBtn>
      </StyledDiv>
      <hr />
      <StyledUl>
        {dummydata.map(item => (
          <div key={item.id}>
            <StyledLi>{item.title}</StyledLi>
            <hr />
          </div>
        ))}
      </StyledUl>
    </div>
  );
}

export default LectureEnd;
