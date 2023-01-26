// import CategoryTagItem from "./CategoryTagItem"
import dummy from "./data.json";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  li {
    &:hover {
      border: 1px solid #f7c815;
      color: #f7c815;
    }
  }
`;

const StyledLi = styled.li`
  width: fit-content;
  font-size: 20px;
  margin: 5px;
  padding: 10px;
  border: 1px solid black;
  /* background-color: #f7c815; */
  border-radius: 10px;
  font-weight: 500;
`;

function CategoryTag() {
  const items = dummy.sub;
  return (
    <div className="CategoryTag">
      {items.map((item) => (
        <StyledUl key={item.id}>
          {item.category.map((it) => (
            <StyledLi key={it}>#{it}</StyledLi>
          ))}
        </StyledUl>
      ))}
    </div>
  );
}

export default CategoryTag;
