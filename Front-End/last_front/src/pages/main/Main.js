import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "../../store/baseURL";
import { useNavigate, redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeMain, changeMyPage, changeTeacher } from "../../store/mainSlice";
import LectureList from "./LectureList";
import MyPageList from "./MyPageList";
import NavBar from "./NavBar";
import TeacherPage from "./TeacherPage";
// import MagnifyingGlass from "./MagnifyingGlass";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

function Main() {
  // dispatch, navigate 사용하기 위해 정의해주기
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access Token, Role 스토어에서 가져오기
  const loginToken = useSelector((state) => state.login.token.accessToken);
  const role = useSelector((state) => state.login.token.role);
  // const loginInfo = useSelector(state => state.login.token);

  const main = useSelector((state) => state.main);

  // 처음 마운트 됐을 때 메인 카테고리 데이터 받아와서 store에 저장해주기
  useEffect(() => {
    const getMainData = async () => {
      const res = await axios.get("/main/category");
      dispatch(changeMain(res.data));
    };
    getMainData();
  }, []);

  // 처음 마운트됐을 때 내가 신청한 강의 목록 axios 받아서 store에 저장해주기 -> 일반사용자
  useEffect(() => {
    if (role === "teacher") {
      console.log("실행안되야하는데");
      return;
    }
    axios
      .get("/normal/lecture", {
        headers: { "X-ACCESS-TOKEN": loginToken },
      })
      .then((info) => {
        dispatch(changeMyPage(info.data));
      });
  }, []);

  // 처음 마운트 됐을 때 내가 강의 중인 강의 목록 axios 받아서 store에 저장해주기 -> 강사
  useEffect(() => {
    if (role === "normal") return;
    axios
      .get("/teacher/lecture/in-progress", {
        headers: { "X-ACCESS-TOKEN": loginToken },
      })
      .then((info) => {
        dispatch(changeTeacher(info.data));
      });
  }, []);

  // 로그인 되지 않은 상태로 main화면 들어오려고 할 때 로비로 돌아가게 해 주는 함수
  const moveToLobby = () => {
    navigate("/");
  };

  return (
    <div>
      <NavBar />
      <StyledDiv>
        <LectureList />
        {role === "normal" ? <MyPageList /> : <TeacherPage />}
      </StyledDiv>
    </div>
  );
}

export default Main;
