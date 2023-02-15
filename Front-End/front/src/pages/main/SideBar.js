// import SideBarItem from './SideBarItem'
import dummy from "./data.json";
import styled from "styled-components";

const StyledDiv = styled.div`
<<<<<<< HEAD
  margin-top: 5px;
=======
>>>>>>> dev-BE
  margin-right: 30px;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0px;
  width: 200px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  text-align: left;
  li {
    &:not(:last-child) {
      border-bottom: 1px solid black;
    }
    &:hover {
      background-color: #f7c815;
      color: white;
    }
  }
`;

const StyledLi = styled.li`
  padding: 10px;
  width: 180px;
  height: 5vh;
  font-size: x-large;
  font-weight: 500;
  line-height: 5vh;
`;

function SideBar() {
  const items = dummy.main;
  return (
    <StyledDiv className="SideBar">
      <StyledUl key={items.id}>
<<<<<<< HEAD
        {items.map(item => (
=======
        {items.map((item) => (
>>>>>>> dev-BE
          <StyledLi key={item.id}>{item.category}</StyledLi>
        ))}
      </StyledUl>
    </StyledDiv>
  );
}

export default SideBar;
