import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
import { useSelector, useDispatch } from "react-redux";
import { signUpActions } from "../../store/SignUpSlice";

function SignUpPw1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToPw2 = () => {
    navigate("/signup/pw2");
  };

  // 😀비밀번호 저장
  const [password, setPassword] = useState("");

  // 😀store의 비밀번호 불러오기
  // const statePw = useSelector((state) => state.signUp.password);
  const state = useSelector((state) => state);

  // 😀password : 전역으로 보내기
  const sendPw = () => {
    dispatch(signUpActions.addPw(password));
  };

  // 😀statePw 갱신 여부 확인 콘솔
  console.log("state", state);

  return (
    <div>
      <StyledDiv1>
        <div>
          <h3>고객님께서 사용하고 싶으신 비밀번호를 적어주세요!</h3>
        </div>
        <StyledDiv2>
          <StyledInput
            type="text"
            value={password}
            placeholder="여기에 비밀번호를 적어주세요 :)"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <StyledButton1
            onClick={() => {
              sendPw();
              moveToPw2();
            }}
          >
            확인
          </StyledButton1>
        </StyledDiv2>
      </StyledDiv1>

      {/* 고객센터 */}
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

export default SignUpPw1;
