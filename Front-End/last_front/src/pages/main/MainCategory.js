import React, { useState, useEffect } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { NavLink } from "react-router-dom";

const CategoryDiv = styled.div`
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const StyledDiv = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ImgDiv = styled.div`
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 50%;
  background-color: white;
`;

const StyledImg = styled.img`
  margin-top: 13px;
  width: 40px;
`;

function MainCategory() {
  // 카테고리 목록 보여줄 Slider설정
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  // 카테고리 icon
  const icons = [
    "all.png",
    "excercise.png",
    "art.png",
    "cooking.png",
    "language.png",
    "digital.png",
    "writing.png",
    "music.png",
    "",
  ];

  const [mainCategory, setMainCategory] = useState([]);

  // 카테고리 데이터 받아와서 state에 저장해주기
  useEffect(() => {
    axios
      .get("/dummydata/MainCategory.json")
      .then((res) => setMainCategory(res.data));
  }, []);

  //   console.log(mainCategory);

  return (
    <CategoryDiv>
      {/* <Slider {...settings}> */}
      {mainCategory.map((category) => (
        <StyledDiv key={category.no}>
          <ImgDiv>
            <StyledImg src="/img/all.png" alt="all" />
          </ImgDiv>
          <span>{category.name}</span>
        </StyledDiv>
        // <NavLink key={category.no}>{category.name}</NavLink>
      ))}
      {/* </Slider> */}
    </CategoryDiv>
  );
}

export default MainCategory;
