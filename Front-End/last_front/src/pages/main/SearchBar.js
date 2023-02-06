import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
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

function SearchBar(props) {
  const [search, setSearch] = useState("");
  const [item, setItem] = useState([]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key == "Enter") {
      getSearchData();
      props.setCardData(item);
    }
  };

  const getSearchData = async () => {
    console.log("클릭");
    try {
      const res = await axios.get("/dummydata/MyLectureCard.json");
      setItem(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(item);
  //   useEffect(() => {
  //     const getCardData = async () => {
  //       const res = await axios.get("/dummydata/MyLectureCard.json");
  //       setCardData(res.data);
  //     };
  //     getCardData();
  //   }, []);

  //   useEffect(() => {
  //     const getSearchData = async () => {
  //       const searchInfo = search;
  //       try {
  //         console.log("클릭");
  //         const res = await axios.get("/dummydata/SearchLecture.json");
  //         setItem(res.data);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };
  //   });

  //   console.log(item);
  return (
    <InputGroup className="SearchBar">
      <StyledInput
        type="text"
        placeholder="듣고 싶은 강의 이름을 입력해주세요"
        value={search}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <StyledButton
        onClick={() => {
          getSearchData();
          props.setCardData(item);
        }}
      >
        <StyledImg src="/img/search.png" alt="search" />
        {/* <FcSearch size="40" /> */}
      </StyledButton>
    </InputGroup>
  );
}

export default React.memo(SearchBar);
