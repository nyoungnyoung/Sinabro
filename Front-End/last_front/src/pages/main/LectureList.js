import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import SearchBar from "./SearchBar";
import LectureItemCard from "./LectureItemCard";
import { useNavigate, Route, Routes } from "react-router-dom";

const StyledDiv = styled.div`
  width: 50%;
  padding-left: 5vw;
  padding-right: 5%;
  background-color: whitesmoke;
  border-right: 1px solid lightgray;
  /* @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  } */
`;

const CardDiv = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
  }
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: -1000px;
  }
`;

function LectureList({ changeValue, lecture }) {
  const [cardData, setCardData] = useState([]);
  // const [searchData, setSearchData] = useState([]);

  // 카드 데이터 받아와서 state에 저장해주기

  useEffect(() => {
    const getCardData = async () => {
      const res = await axios.get("/dummydata/MyLectureCard.json");
      setCardData(res.data);
    };
    getCardData();
  }, []);

  // const getSearchData = async () => {
  //   console.log("클릭");
  //   try {
  //     const res = await axios.get("/dummydata/MyLectureCard.json");
  //     setSearchData(res.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   axios
  //     .get("/dummydata/LectureCard.json")
  //     .then((res) => setCardData(res.data));
  // }, []);

  // console.log(cardData);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };

  return (
    <StyledDiv>
      <h1>LectureList</h1>
      <p>로그인 후 출력될 신청 가능한 강의 목록 리스트!</p>
      <SearchBar setCardData={setCardData} />
      <MainCategory changeValue={changeValue} lecture={lecture} />
      <SubCategory />
      <CardDiv>
        {cardData &&
          cardData.map(data => (
            <LectureItemCard
              key={data.no}
              no={data.no}
              subject={data.subject}
              startDate={data.startDate}
              endDate={data.endDate}
              content={data.content}
              savedName={data.savedName}
            />
          ))}
      </CardDiv>
    </StyledDiv>
  );
}

export default LectureList;
