import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/loginSlice";

const StyledDiv = styled.div`
  height: 80px;
  background-color: #d8d7d7;
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const StyledImg = styled.img`
  width: 80px;
  height: 80px;
  :hover {
    cursor: pointer;
  }
`;

const StyledBtn = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 20px;
  margin-right: 15px;
  background-color: #f7c815;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: large;
  font-weight: bold;
  :hover {
    letter-spacing: 1px;
    transform: scale(1.2);
    cursor: pointer;
    background-color: #ff5f2e;
    color: white;
    outline: 0;
  }
`;

function NavBar() {
  // detail일때만 돌아오기 버튼 표시하기 위해 주소 받아오기
  const url = useLocation().pathname.slice(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickLogOut = () => {
    navigate("/");
    dispatch(loginActions.logOut());
  };

  const moveToMain = () => {
    navigate("/main");
  };

  return (
    <StyledDiv>
      <StyledImg src="/img/logo.png" alt="logo" onClick={moveToMain} />
      {url === "main" ? (
        <StyledBtn onClick={onClickLogOut}>로그아웃</StyledBtn>
      ) : (
        <div>
          <StyledBtn onClick={moveToMain}>돌아가기</StyledBtn>
          <StyledBtn onClick={onClickLogOut}>로그아웃</StyledBtn>
        </div>
      )}
    </StyledDiv>
  );
}

export default NavBar;
