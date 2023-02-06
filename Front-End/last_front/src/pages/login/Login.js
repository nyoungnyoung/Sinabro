import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate("/main");
  };

  const moveToLogin = () => {
    navigate("/login");
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

  const apiLogin = () => {
    axios
      .post("http//localhost:5000/common/login-in", {
        number: login.number,
        password: login.password,
      })
      .then((response) => {
        console.log(response.data);
        // response.data : 토큰
        // 토큰은 전역변수로 관리해줘야한다.
        if (response.data) {
          moveToMain();
        } else {
          moveToLogin();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(login);
  return (
    <div className="Login">
      <h1>로그인</h1>
      <div>
        <div>
          <label>전화번호 : </label>
          <input
            type="text"
            value={login.number}
            onChange={(event) => {
              changeLogin(event, "number");
            }}
          />
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            value={login.password}
            onChange={(event) => {
              changeLogin(event, "password");
            }}
          />
        </div>

        <button onClick={apiLogin()}>로그인</button>
      </div>
    </div>
  );
}

export default Login;
