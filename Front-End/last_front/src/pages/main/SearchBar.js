import React, { useState } from "react";
import styled from "styled-components";
import axios from "../../store/baseURL";
import { useDispatch } from "react-redux";
import { changeLecture } from "../../store/mainSlice";

// import { FcSearch } from "react-icons/fc";

const InputGroup = styled.div`
  display: flex;
  margin-left: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  font-size: 15px;
  padding: 15px;
  border: 3px solid #f7c815;
  width: 100%;
  /* background-color: #f7c815; */
  border-radius: 10px 0px 0px 10px;
  font-weight: 500;
  &:focus::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  width: 80px;
  background-color: white;
  border-radius: 0px 10px 10px 0px;
  border: 3px solid #f7c815;
  background-color: #f7c815;
  border-left: 0px;
  &:hover {
    cursor: pointer;
    background-color: #ffd739;
    /* outline: 3px solid #ffd739; */
    /* border-left: 2px solid black; */
  }
`;

const StyledImg = styled.img`
  width: 40px;
`;

function SearchBar() {
  // dispatch 사용하기 위해 정의해주기
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const onChange = e => {
    setSearch(e.target.value);
  };

  const onKeyDown = e => {
    if (e.key == "Enter") {
      getSearchData();
    }
  };

  // 검색 시 search 내용에 맞는 강의 정보 가져오는 axios요청

  const getSearchData = async () => {
    try {
      const lecture = await axios.get("/main/search/" + search);
      dispatch(changeLecture(lecture.data));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <InputGroup className="SearchBar">
      <StyledInput
        type="text"
        placeholder="듣고 싶은 강의 이름을 입력해주세요"
        value={search}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <StyledButton onClick={getSearchData}>
        <StyledImg src="/img/search.png" alt="search" />
        {/* <FcSearch size="40" /> */}
      </StyledButton>
    </InputGroup>
  );
}

export default React.memo(SearchBar);
