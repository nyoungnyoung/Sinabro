import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
<<<<<<< HEAD
import BirthCalendar from "../signup/components/BirthCalendar";
import { useDispatch } from "react-redux";
import { signUpActions } from "../../store/SignUpSlice";

function SignUpBirth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
=======

function SignUpBirth() {
  const navigate = useNavigate();
>>>>>>> dev-BE

  const moveToPhone = () => {
    navigate("/signup/phone1");
  };

<<<<<<< HEAD
  // 😀생년월일 저장
  const [birth, setBirth] = useState("");

  // 😀BirthCalendar로부터 데이터 전달받기 위한 코드
  const dateHandle = (date) => {
    setBirth(date);
  };

  // 😀store의 생년월일 불러오기
  // const state = useSelector((state) => state);

  // 😀birth : 전역으로 보내기
  const sendBirth = () => {
    dispatch(signUpActions.addBirth(birth));
  };

=======
  // 생년월일 저장
  const [birth, setBirth] = useState("");

>>>>>>> dev-BE
  return (
    <div>
      <StyledDiv1>
        {/* <h1>SignUpBirth</h1> */}
        <div>
<<<<<<< HEAD
          <h3>고객님의 생년월일을 선택해주세요!</h3>
        </div>

        <StyledCalendar>
          <BirthCalendar dateHandle={dateHandle} />
        </StyledCalendar>

        <StyledDiv2>
          <h3>{birth}</h3>

          <StyledButton1
            onClick={() => {
              moveToPhone();
              sendBirth();
            }}
          >
            확인
          </StyledButton1>
        </StyledDiv2>
        {/* 
        <div>
          <StyledButton2 onClick={moveToPhone}>다음 단계로</StyledButton2>
        </div> */}
=======
          <h3>고객님의 생년월일을 선택/적어주세요!</h3>
        </div>
        <StyledDiv2>
          <StyledInput
            type="text"
            value={birth}
            placeholder="여기에 생년월일을 입력해주세요 :)"
            onChange={(e) => {
              setBirth(e.target.value);
              console.log(birth);
            }}
          />
          <StyledButton1>확인</StyledButton1>
        </StyledDiv2>
        <div>
          <StyledButton2 onClick={moveToPhone}>다음 단계로</StyledButton2>
        </div>
>>>>>>> dev-BE
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
<<<<<<< HEAD
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

// const StyledInput = styled.input`
//   width: 40%;
//   padding: 10px;
//   margin-right: 10px;
// `;
=======
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 40%;
  padding: 10px;
  margin-right: 10px;
`;
>>>>>>> dev-BE

const StyledButton1 = styled.button`
  cursor: pointer;
  padding: 10px;
`;

<<<<<<< HEAD
// const StyledButton2 = styled.button`
//   margin-top: 15px;
//   margin-bottom: 15px;
//   cursor: pointer;
//   padding: 10px;
// `;

const StyledCalendar = styled.div`
  justify-content: center;
  margin: auto;
=======
const StyledButton2 = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 10px;
>>>>>>> dev-BE
`;
export default SignUpBirth;
