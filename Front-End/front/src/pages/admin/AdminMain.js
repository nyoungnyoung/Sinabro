import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "../main/Banner";
import SideBar from "../main/SideBar";
import CategoryTag from "../main/CategoryTag";
import SearchBar from "../main/SearchBar";
import LectureItem from "../main/LectureItem";

const AdminMain = () => {
  return (
    <div>
      {/* <h1>메인</h1> */}
      <div className="Main">
        {/* <Header/> */}
        <Link to="/login/id">
          <button>로그인</button>
        </Link>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
        <Link to="/admin/teacher">
          <button>강사관리</button>
        </Link>
        <Link to="/admin/user">
          <button>회원관리</button>
        </Link>
        <h1>Main</h1>
        <MainPageDiv>
          <Banner />
          <ContentDiv>
            <SideBar />
            <ViewDiv>
              <SearchBar />
              <CategoryTag />
              <LectureItem />
            </ViewDiv>
          </ContentDiv>
        </MainPageDiv>
      </div>
    </div>
  );
};

const MainPageDiv = styled.div`
  /* border: 1px solid black; */
  margin-left: 5vw;
  margin-right: 5vw;
`;

const ContentDiv = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  display: flex;
`;

const ViewDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export default AdminMain;
