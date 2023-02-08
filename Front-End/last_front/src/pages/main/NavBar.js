import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = () => {
    navigate("/");
    dispatch(loginActions.logOut());
  };

  return (
    <StyledDiv>
      <StyledImg src="/img/logo.png" alt="logo" />
      <StyledBtn onClick={onClick}>로그아웃</StyledBtn>
    </StyledDiv>
  );
}

export default NavBar;
