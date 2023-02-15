import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
import { useSelector, useDispatch } from "react-redux";
import { signUpActions } from "../../store/SignUpSlice";

function SignUpPw2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const moveToName = () => {
    navigate("/signup/name");
  };

  // 😀password2 저장
  const [password2, setPassword2] = useState("");

  // 😀store의 password2 불러오기
  const state = useSelector((state) => state);

  // 😀password2 : 전역으로 보내기
  const sendPw2 = () => {
    dispatch(signUpActions.addPw2(password2));
  };

  // 😀statePw2 갱신 여부 확인 콘솔
  console.log("state", state);

  return (
    <div>
      {/* <h1>SignUp PW_2</h1> */}
      <StyledDiv1>
        <div>
          <h3>
            고객님께서 사용하고 싶으신 비밀번호를 다시 한 번 입력해주세요!
          </h3>
        </div>
        <StyledDiv2>
          <StyledInput
            type="text"
            value={password2}
            placeholder="비밀번호를 한 번 더 입력해주세요 :)"
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
          <StyledButton1 onClick={sendPw2}>확인</StyledButton1>
        </StyledDiv2>
        <div>
          <StyledButton2 onClick={moveToName}>다음 단계로</StyledButton2>
        </div>
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

const StyledButton2 = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 10px;
`;

export default SignUpPw2;
