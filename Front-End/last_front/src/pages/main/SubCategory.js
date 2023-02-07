import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeLecture } from "../../store/mainSlice";
import axios from "../../store/baseURL";
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
  cursor: pointer;
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
  // dispatch 사용하기 위해 정의해주기
  const dispatch = useDispatch();

  // 소분류 리스트 store에서 가져오기
  const subCategory = useSelector(state => state.main.subCategory);

  // 선택된 대분류No store에서 가져오기
  const mainNo = useSelector(state => state.main.mainNo);

  // 소분류 클릭시 selectedNo 변경
  const [selectedNo, setSelectedNo] = useState("0");
  const onClick = e => {
    setSelectedNo(e.target.id);
  };

  // 소분류 버튼 클릭시 변경되는 selectedNo에 맞는 강의정보 가져오는 axios요청
  useEffect(() => {
    axios.get("/main/lecture/" + mainNo + "/" + selectedNo).then(lecture => {
      dispatch(changeLecture(lecture.data));
    });
  }, [selectedNo]);

  return (
    <div>
      {/* <StyledSlider {...settings}> */}
      {subCategory ? (
        <div>
          <CategoryDiv>
            {subCategory.map(category => (
              <StyledDiv key={category.no} id={category.no} onClick={onClick}>
                <span id={category.no}>{category.name}</span>
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
