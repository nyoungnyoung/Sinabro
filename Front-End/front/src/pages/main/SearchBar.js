import styled from "styled-components";
import { FcSearch } from "react-icons/fc";

const InputGroup = styled.div`
  display: flex;
  margin-left: 5px;
  margin-top: 20px;
`;

const StyledInput = styled.input`
  font-size: 20px;
  padding: 15px;
  border: 1px solid black;
  width: 100%;
  /* background-color: #f7c815; */
  border-radius: 10px 0px 0px 10px;
  font-weight: 500;
  &:focus::placeholder {
    color: white;
  }
  /* &:focus {
    outline-color: #f7c815;
  } */
`;

const StyledButton = styled.button`
  width: 100px;
  background-color: white;
  border-radius: 0px 10px 10px 0px;
  border: 1px solid black;
  border-left: 0px;
  &:hover {
    background-color: #d9d9d9;
    /* outline: 2px solid black;
    border-left: 2px solid black; */
  }
`;

function SearchBar() {
  return (
    <InputGroup className="SearchBar">
      <StyledInput
        type="text"
        placeholder="듣고 싶은 강의 이름을 입력해주세요"
      />
      <StyledButton>
        <FcSearch size="40" />
      </StyledButton>
    </InputGroup>
  );
}

export default SearchBar;
