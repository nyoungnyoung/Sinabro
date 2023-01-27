import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import phone from "../../assets/img/phone.png";

function CustomerService() {
  const navigate = useNavigate();

  const moveCs = () => {
    navigate("/cs");
  };

  return (
    <StyledDiv onClick={moveCs}>
      <StyledImg className="img">
        <img
          src={phone}
          alt=""
          width="100%"
          height="50%"
          align-itmes="center"
        />
      </StyledImg>
      <div className="msg">
        <h5>사용이 어려우신 분은 눌러주세요</h5>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
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

const StyledImg = styled.div`
  // margin: auto;
  paddding: auto;
`;
export default CustomerService;
