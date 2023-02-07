import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeSub } from "../../store/mainSlice";
import axios from "../../store/baseURL";
// import { NavLink } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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

const StyledLink = styled(Link)`
  width: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  color: black;
  text-decoration: none;
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
  // dispatch 사용하기 위해 정의해주기
  const dispatch = useDispatch();

  // 메인카테고리 리스트 store에서 가져오기
  const mainCategory = useSelector(state => state.main.mainCategory);
  const [selectedNo, setSelectedNo] = useState("0");
  // const [cardData, setCardData] = useState()

  // 대분류 클릭 시 selectedNo 변경
  const onClick = e => {
    setSelectedNo(e.target.id);
  };

  // 대분류 버튼 클릭 시 변경되는 selectedNo에 맞는 소분류 가져오는 axios 요청
  useEffect(() => {
    axios.get("/main/category/" + selectedNo).then(response => {
      dispatch(changeSub(response.data));
      // console.log(response);
      console.log("axios 내", selectedNo);
      // console.log(response.data);
    });
  }, [selectedNo]);

  return (
    <CategoryDiv>
      {/* <Slider {...settings}> */}
      {mainCategory.map(category => (
        <StyledLink
          to={`/main/${selectedNo}`}
          key={category.no}
          id={category.no}
          onClick={onClick}
        >
          <ImgDiv id={category.no}>
            <StyledImg id={category.no} src="/img/all.png" alt="all" />
          </ImgDiv>
          <span id={category.no}>{category.name}</span>
        </StyledLink>
        // <NavLink key={category.no}>{category.name}</NavLink>
      ))}
      {/* </Slider> */}
    </CategoryDiv>
  );
}

export default MainCategory;
