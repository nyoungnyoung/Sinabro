import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const CategoryDiv = styled.div`
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
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

// const StyledSlider = styled(Slider)`
//   width: 100%;
// `;

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
  // 소분류 리스트 store에서 가져오기
  const subCategory = useSelector(state => state.main.subCategory);

  return (
    <div>
      {/* <StyledSlider {...settings}> */}
      {subCategory ? (
        <div>
          <CategoryDiv>
            {subCategory.map(category => (
              <StyledDiv key={category.no}>
                <span>{category.name}</span>
              </StyledDiv>
            ))}
          </CategoryDiv>
        </div>
      ) : (
        <div></div>
      )}

      {/* </StyledSlider> */}
    </div>
  );
}

export default SubCategory;
