import styled from "styled-components";
import SideBar from "./SideBar";
import CategoryTag from "./CategoryTag";
import LectureItem from "./LectureItem";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
// import Header from '../../components/Header';

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

function Main() {
  return (
    <div className="Main">
      {/* <Header/> */}
      <Link to="/login/id">
        <button>로그인</button>
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
  );
}

export default Main;
