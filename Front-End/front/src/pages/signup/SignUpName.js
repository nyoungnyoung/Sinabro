import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
<<<<<<< HEAD
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
import { useSelector, useDispatch } from "react-redux";
import { signUpActions } from "../../store/SignUpSlice";

function SignUpName() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
=======
import CsBtn from "../../components/CsBtn";
import styled from "styled-components";

function SignUpName() {
  const navigate = useNavigate();
>>>>>>> dev-BE

  const moveToBirth = () => {
    navigate("/signup/birth");
  };

<<<<<<< HEAD
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

=======
  // 이름 저장
  const [name, setName] = useState("");

>>>>>>> dev-BE
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
<<<<<<< HEAD
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
=======
              console.log(name);
            }}
          />
          <StyledButton1>확인</StyledButton1>
        </StyledDiv2>
        <div>
          <StyledButton2 onClick={moveToBirth}>다음 단계로</StyledButton2>
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
  display: flex;
  justify-content: center;
<<<<<<< HEAD
  padding-bottom: 20px;
=======
>>>>>>> dev-BE
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

<<<<<<< HEAD
=======
const StyledButton2 = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 10px;
`;
>>>>>>> dev-BE
export default SignUpName;
