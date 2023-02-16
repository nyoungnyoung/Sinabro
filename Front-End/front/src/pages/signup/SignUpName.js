import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
import { useSelector, useDispatch } from "react-redux";
import { signUpActions } from "../../store/SignUpSlice";

function SignUpName() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToBirth = () => {
    navigate("/signup/birth");
  };

  // 😀이름 저장
  const [name, setName] = useState("");

  // 😀store의 state불러오기
  const state = useSelector((state) => state);

  // 😀name: 전역으로 보내기
  const sendName = () => {
    dispatch(signUpActions.addName(name));
  };

  // 😀stateName 갱신 여부 확인 콘솔
  console.log("state", state);

  return (
    <div>
      <StyledDiv1>
        {/* <h1>SignUpName</h1> */}
        <div>
          <h3>고객님의 이름을 적어주세요!</h3>
        </div>
        <StyledDiv2>
          <StyledInput
            type="text"
            value={name}
            placeholder="고객님의 이름을 적어주세요 :)"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <StyledButton1
            onClick={() => {
              sendName();
              moveToBirth();
            }}
          >
            확인
          </StyledButton1>
        </StyledDiv2>
      </StyledDiv1>
      <LoginDiv>
        <StyledLink to="/cs">
          <CsBtn />
        </StyledLink>
      </LoginDiv>
    </div>
  );
}
const LoginDiv = styled.div`
  padding-left: 18%;
  padding-right: 18%;
  padding-top: 5vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const StyledDiv1 = styled.div`
  border: 1px solid black;
  width: 60%;
  margin: auto;
`;
const StyledDiv2 = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 40%;
  padding: 10px;
  margin-right: 10px;
`;

const StyledButton1 = styled.button`
  cursor: pointer;
  padding: 10px;
`;

export default SignUpName;
