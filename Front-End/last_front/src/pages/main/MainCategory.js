import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../store/baseURL";
import { useSelector, useDispatch } from "react-redux";
import { changeSub, changeLecture, changeMainNo } from "../../store/mainSlice";
// import { Link } from "react-router-dom";
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

const StyledDiv = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
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
  // dispatch 사용하기 위해 정의해주기
  const dispatch = useDispatch();

  // 메인카테고리 리스트 store에서 가져오기
  const mainCategory = useSelector(state => state.main.mainCategory);
  const [selectedNo, setSelectedNo] = useState("1");

  // 대분류 클릭 시 selectedNo 변경
  const onClick = e => {
    setSelectedNo(e.target.id);
  };

  // 대분류 버튼 클릭 시 변경되는 selectedNo에 맞는 소분류 가져오는 axios 요청
  useEffect(() => {
    axios.get("/main/category/" + selectedNo).then(response => {
      dispatch(changeSub(response.data));
      dispatch(changeMainNo(selectedNo));
      // console.log(response.data);
    });
  }, [selectedNo]);

  // 대분류 버튼 클릭시 변경되는 selectedNo에 맞는 강의정보 가져오는 axios 요청
  useEffect(() => {
    axios.get("/main/lecture/" + selectedNo).then(lecture => {
      dispatch(changeLecture(lecture.data));
    });
  }, [selectedNo]);

  // 대분류에 들어갈 아이콘 리스트
  const imgs = [
    "all.png",
    "excercise.png",
    "art.png",
    "cooking.png",
    "language.png",
    "digital.png",
    "writing.png",
    "music.png",
    "money.png",
  ];

  return (
    <CategoryDiv>
      {/* <Slider {...settings}> */}
      {mainCategory.map(category => (
        <StyledDiv
          to={`/main/${selectedNo}`}
          key={category.no}
          id={category.no}
          onClick={onClick}
        >
          <ImgDiv id={category.no}>
            {/* <StyledImg
              id={category.no}
              src={require(`/img/${imgs[category.no - 1]}`).default}
              alt="icon"
            /> */}
            <StyledImg
              id={category.no}
              src={"/img/" + imgs[category.no - 1]}
              alt="all"
            />
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
