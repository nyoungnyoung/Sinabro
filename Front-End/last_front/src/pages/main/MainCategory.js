import React, { useState, useEffect } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { NavLink } from "react-router-dom";
// import baseURL from "../../store/val";

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

function MainCategory({ changeValue, lecture }) {
  // // 카테고리 목록 보여줄 Slider설정
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 800,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  // };

  // 카테고리 icon
  // const icons = [
  //   "all.png",
  //   "excercise.png",
  //   "art.png",
  //   "cooking.png",
  //   "language.png",
  //   "digital.png",
  //   "writing.png",
  //   "music.png",
  //   "",
  // ];

  const [mainCategory, setMainCategory] = useState([]);
  const [selectedNo, setSelectedNo] = useState("");

  // 처음 마운트 됐을 때 메인 카테고리 데이터 받아와서 state에 저장해주기
  useEffect(() => {
    axios.get("http://localhost:5000/main/category").then(res => {
      setMainCategory(res.data);
    });
  }, []);

  const onClick = e => {
    setSelectedNo(e.target.id);
    // console.log(changeValue);
    if (lecture.isSelect) {
      changeValue(false, "isSelect");
    } else {
      changeValue(true, "isSelect");
    }
    changeValue(selectedNo, "SelectedMainNo");
    // console.log(e.target.id);
    // changeValue(selectedNo, "");
  };

  console.log(selectedNo);
  // const

  // console.log(selectedNo);
  // const getSearchData = async () => {
  //   console.log("클릭");
  //   try {
  //     const res = await axios.get("/dummydata/MyLectureCard.json");
  //     setItem(res.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  //   console.log(mainCategory);

  return (
    <CategoryDiv>
      {/* <Slider {...settings}> */}
      {mainCategory.map(category => (
        <StyledDiv
          key={category.no}
          id={category.no}
          onClick={onClick}
          // onClick={() => {
          //   onClick(category.no);
          // }}
        >
          <ImgDiv id={category.no}>
            <StyledImg id={category.no} src="/img/all.png" alt="all" />
          </ImgDiv>
          <span id={category.no}>{category.name}</span>
        </StyledDiv>
        // <NavLink key={category.no}>{category.name}</NavLink>
      ))}
      {/* </Slider> */}
    </CategoryDiv>
  );
}

export default MainCategory;
