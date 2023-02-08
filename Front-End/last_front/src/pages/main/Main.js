import React, { useEffect } from "react";
import styled from "styled-components";
import LectureList from "./LectureList";
import MyPageList from "./MyPageList";

import axios from "../../store/baseURL";
import { useDispatch, useSelector } from "react-redux";
import { changeMain } from "../../store/mainSlice";
import NavBar from "./NavBar";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

function Main() {
  // dispatch 사용하기 위해 정의해주기
  const dispatch = useDispatch();
  const main = useSelector(state => state.main);

  // 처음 마운트 됐을 때 메인 카테고리 데이터 받아와서 store에 저장해주기
  // http://localhost:5000/main/category 로컬
  // https://i8d203.p.ssafy.io/api/main/category
  useEffect(() => {
    const getMainData = async () => {
      const res = await axios.get("/main/category");
      dispatch(changeMain(res.data));
    };
    getMainData();
  }, []);

  console.log(main);

  return (
    <div>
      <NavBar />
      {/* <h1>Main</h1>
      <p>로그인 후 보여지는 첫번째 페이지!</p>
      <p>왼쪽에 신청 가능한 강의목록, 오른쪽에 마이페이지</p> */}
      <StyledDiv>
        <LectureList />
        <MyPageList />
        {/* <LectureList changeValue={changeValue} lecture={lecture} /> */}
        {/* <MyPageList changeValue={changeValue} /> */}
      </StyledDiv>
    </div>
  );
}

export default Main;
