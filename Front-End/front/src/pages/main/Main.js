import styled from 'styled-components'
import SideBar from './SideBar';
import CategoryTag from './CategoryTag';
import LectureList from './LectureList';
import Banner from './Banner';

const MainPageDiv = styled.div`
    border: 1px solid black;
    margin-left: 5vw;
    margin-right: 5vw;
`;


function Main() {
    return (
        <div className="Main">
        <h1>Main</h1>
            <MainPageDiv>
                <Banner/>
                <SideBar/>
                <CategoryTag/>
                <LectureList/>
            </MainPageDiv>
        </div>
    )
}

export default Main