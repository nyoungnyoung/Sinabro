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
  width: 110px;
  height: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background-color: #f7c815;
  color: white;
  font-weight: bolder;
  font-size: large;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
`;
// const ImgDiv = styled.div`
//   width: 70px;
//   height: 70px;
//   border: none;
//   border-radius: 50%;
//   background-color: white;
// `;

// const StyledImg = styled.img`
//   margin-top: 13px;
//   width: 40px;
// `;

function SubCategory() {
  // 카테고리 목록 보여줄 Slider설정
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 800,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //   };

  const [subCategory, setSubCategory] = useState([]);

  // 카테고리 데이터 받아와서 state에 저장해주기
  useEffect(() => {
    axios
      .get("/dummydata/SubCategory.json")
      .then((res) => setSubCategory(res.data));
  }, []);

  return (
    <CategoryDiv>
      {/* <StyledSlider {...settings}> */}
      {subCategory.map((category) => (
        <StyledDiv key={category.no}>
          <span>{category.name}</span>
        </StyledDiv>
        // <NavLink key={category.no}>{category.name}</NavLink>
      ))}
      {/* </StyledSlider> */}
    </CategoryDiv>
  );
}

export default SubCategory;
