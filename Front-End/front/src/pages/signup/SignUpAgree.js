<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
import { useSelector, useDispatch } from "react-redux";
import { signUpActions } from "../../store/SignUpSlice";

function SignUpAgree() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const moveToMSG = () => {
    if (agree === false) {
      alert("약관동의를 해주세요 :)");
      navigate("/signup/agree");
    } else {
      navigate("/signup/msg");
    }
  };

  // 😀약관동의 여부 저장
  const [agree, setAgree] = useState(false);

  // 😀약관동의 여부 : 전역으로 보내기
  const sendAgree = () => {
    setAgree(!agree);
    dispatch(signUpActions.changeAgree(agree));
  };

  // 😀stateId 갱신 여부 확인 콘솔
  // console.log("stateId", stateId);
  const state = useSelector((state) => state);
  console.log("state", state);
  // console.log(agree);
=======
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";

function SignUpAgree() {
  const navigate = useNavigate();

  const moveToMSG = () => {
    navigate("/signup/msg");
  };

  // 약관동의 여부
  // const [isCheck, setisCheck] = useState(false);
>>>>>>> dev-BE

  return (
    <div>
      <StyledDiv1>
        {/* <h1>SignUpAgree</h1> */}
        <div>
          <h3>사이트 사용을 위한 약관 동의</h3>
          <StyledDiv2>
            <p>개인정보 이용 동의서</p>
          </StyledDiv2>
        </div>
        <StyledDiv3>
<<<<<<< HEAD
          <input type="checkbox" onClick={sendAgree} />
=======
          <input type="checkbox" />
>>>>>>> dev-BE
          <p>약관에 동의합니다</p>
        </StyledDiv3>
        <div>
          <StyledButton1 onClick={moveToMSG}>다음 단계로</StyledButton1>
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
  border: 1px solid black;
  width: 70%;
  margin: auto;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 90px;
`;

const StyledButton1 = styled.button`
  margin-top: 8px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 10px;
`;
export default SignUpAgree;
