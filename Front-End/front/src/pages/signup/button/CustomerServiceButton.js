import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import phone from "../../../assets/img/phone.png";

function CustomerService() {
  const navigate = useNavigate();

  const moveCs = () => {
    navigate("/cs");
  };

  return (
    <StyledDiv1 onClick={moveCs}>
      <StyledDiv2 className="msg">
        <StyledImg src={phone} alt="" />
        <StyledH3>사용이 어려우신 분은 눌러주세요</StyledH3>
      </StyledDiv2>
    </StyledDiv1>
  );
}

const StyledDiv1 = styled.div`
  width: 60%;
  height: 100px;
  border: 1px solid black;
  line-height: 58px;
  margin: 10px auto;
  padding: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const StyledDiv2 = styled.div`
  display: flex;
`;
const StyledImg = styled.img`
  width: 60px;
  padding: auto;
  margin: auto;
`;

const StyledH3 = styled.h3`
  margin-left: 15px;
`;
export default CustomerService;
