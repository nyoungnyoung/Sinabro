import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate("/main");
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

  console.log(login);
  return (
    <div className="Login">
      <h1>Login</h1>
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

        <button onClick={moveToMain}>로그인</button>
      </div>
    </div>
  );
}

export default Login;
