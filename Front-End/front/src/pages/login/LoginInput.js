import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { login } from "../../store/userSlice";

const InputDiv = styled.div`
  border: 1px solid black;
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

const StyledP = styled.p`
  font-size: large;
`;

function LoginInput(props) {
  const loginStep = props.loginStep;
  const user = useSelector(state => state.user.loginInfo);
  // const userId = useSelector(state => state.user.login.id);
  // const userPw = useSelector(state => state.user.login.password);

  // id, pw 입력받아 state로 갖고 있기
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // const onClick = e => {
  //   dispatch(login({ id: id, password: password }));
  // };

  console.log(user);

  return (
    <InputDiv>
      {loginStep === "id" ? (
        <StyledP>고객님의 아이디를 입력해주세요</StyledP>
      ) : (
        <StyledP>고객님의 비밀번호를 입력해주세요</StyledP>
      )}
      {loginStep === "id" ? (
        <input type="text" onChange={e => setId(e.target.value)} value={id} />
      ) : (
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      )}

      {loginStep === "id" ? (
        <Link
          to="/login/password"
          onClick={() => {
            dispatch(login({ id: id, password: password }));
          }}
        >
          <button>다음단계로</button>
        </Link>
      ) : (
        // 로그인 처리 후 메인화면으로 돌아가기
        // 일단 loginInfo store에 저장한 상태로 메인화면으로 돌아가는 것만 해둠
        // 백쪽에 데이터 보내주고, 검증 후 로그인 처리 필요
        <Link
          to="/"
          onClick={() => {
            dispatch(login({ id: id, password: password }));
          }}
        >
          <button>다음단계로</button>
        </Link>
      )}
    </InputDiv>
  );
}

export default LoginInput;
