import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
import { useSelector, useDispatch } from "react-redux";
import { signUpActions } from "../../store/SignUpSlice";

function SignUpId1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToPw1 = () => {
    navigate("/signup/pw1");
  };

  // 😀id 저장
  const [id, setId] = useState("");

  // 😀store의 id 불러오기
  // const stateId = useSelector((state) => state.signUp.id);
  // 아이디 데이터 저장여부 확인을 위한 변수 state
  const state = useSelector((state) => state);

  // 😀id : 전역으로 보내기
  const sendId = () => {
    dispatch(signUpActions.addId(id));
  };

  // 😀stateId 갱신 여부 확인 콘솔
  // console.log("stateId", stateId);
  console.log("state", state);

  // 😀중복체크 확인 여부 변수
  // 😀서버에서 중복체크를 했을 때 맞으면 true 반환
  const isChecked = false;

  return (
    <div>
      {/* 😀1. 중복체크가 안됐을 때 */}
      {!isChecked && (
        <StyledDiv1>
          <div>
            <h3>고객님께서 사용하고 싶으신 아이디를 적어주세요!</h3>
          </div>

          <StyledDiv2>
            <StyledInput
              type="text"
              value={id}
              placeholder="여기에 아이디를 입력해주세요 :)"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <StyledButton1 onClick={sendId}>중복체크</StyledButton1>
          </StyledDiv2>
          <div>
            <StyledButton2 onClick={moveToPw1}>다음 단계로</StyledButton2>
          </div>
        </StyledDiv1>
      )}

      {/* 😀2. 중복체크가 됐을 때 */}
      {isChecked && (
        <StyledDiv1>
          <div>
            <h3>중복체크가 완료되었습니다.</h3>
          </div>
          <StyledDiv2>
            <div>
              <h4>사용하실 아이디 : {id}</h4>
              <StyledButton2 onClick={moveToPw1}>다음 단계로</StyledButton2>
            </div>
          </StyledDiv2>
        </StyledDiv1>
      )}

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
`;

const StyledButton2 = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 10px;
`;
export default SignUpId1;
