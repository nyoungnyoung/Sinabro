import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../../store/baseURL";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/loginSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToMain = () => {
    navigate("/main");
  };

  const moveToLobby = () => {
    navigate("/");
  };
  const [login, setLogin] = useState({
    number: "",
    password: "",
  });

  const changeLogin = (event, type) => {
    setLogin({
      ...login,
      [type]: event.target.value,
    });
  };

  const isLogined = (data) => {
    dispatch(loginActions.addToken(data));
  };

  const apiLogin = () => {
    axios
      .post("/common/sign-in", {
        phone: login.number,
        password: login.password,
      })
      .then((response) => {
        console.log(response.data);
        // response.data : 토큰
        // 토큰은 전역변수로 관리해줘야한다.
        if (response.data) {
          isLogined(response.data);
          moveToMain();
        } else {
          alert(
            "전화번호가 없거나, 비밀번호가 틀렸습니다! 다시 시도해주세요 :)"
          );
          setLogin({
            number: "",
            password: "",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const token = useSelector((state) => state);
  console.log(token);
  // console.log(login);
  return (
    <StyledDiv>
      <StyledH1>로그인</StyledH1>
      <div>
        <StyledDiv2>
          <StyledLabel>전화번호 : </StyledLabel>
          <StyledInput
            type="text"
            value={login.number}
            onChange={(event) => {
              changeLogin(event, "number");
            }}
            placeholder="전화번호를 입력해주세요 :)"
          />
        </StyledDiv2>
        <StyledDiv2>
          <StyledLabel>비밀번호 : </StyledLabel>
          <StyledInput
            type="password"
            value={login.password}
            onChange={(event) => {
              changeLogin(event, "password");
            }}
            placeholder="비밀번호를 입력해주세요 :)"
          />
        </StyledDiv2>

        <StyledButton
          onClick={() => {
            apiLogin();
          }}
        >
          로그인
        </StyledButton>
        <StyledButton onClick={moveToLobby}>홈으로</StyledButton>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background-color: #fff9be;
  height: 100vh;
`;

const StyledDiv2 = styled.div`
  margin-top: 5px;
`;
const StyledH1 = styled.h1`
  margin: 0;
  padding: 30px;
`;

const StyledInput = styled.input`
  padding: 10px;
  width: 300px;
  border-radius: 15px;
`;
const StyledButton = styled.button`
  width: 180px;
  height: 50px;
  margin-left: 20px;
  margin-right: auto;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 700;
  background-color: #f7c815;
  font-size: 20px;
  font-family: "Chilgok_Cye";
  padding: 10px;
  border: none;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  :hover {
    letter-spacing: 2px;
    transform: scale(1.2);
    cursor: pointer;
    background-color: #ff5f2e;
    color: white;
    outline: 0;
  }
`;
const StyledLabel = styled.label`
  font-size: 20px;
`;
export default Login;
