import styled from "styled-components";
import SideBar from "./SideBar";
import CategoryTag from "./CategoryTag";
import LectureList from "./LectureList";
import Banner from "./Banner";
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
      <h1>Main</h1>
      <MainPageDiv>
        <Banner />
        <ContentDiv>
          <SideBar />
          <ViewDiv>
            <CategoryTag />
            <LectureList />
          </ViewDiv>
        </ContentDiv>
      </MainPageDiv>
    </div>
  );
}

export default Main;
