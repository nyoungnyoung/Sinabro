import styled from "styled-components";
import { Link } from "react-router-dom";

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
  return (
    <InputDiv>
      {loginStep === "id" ? (
        <StyledP>고객님의 아이디를 입력해주세요</StyledP>
      ) : (
        <StyledP>고객님의 비밀번호를 입력해주세요</StyledP>
      )}
      <input type="text" />
      {loginStep === "id" ? (
        <Link to="/login/password">
          <button>다음단계로</button>
        </Link>
      ) : (
        // 로그인 처리 후 메인화면으로 돌아가기
        // 일단 메인화면으로 돌아가는 것만 처리해둠
        <Link to="/">
          <button>다음단계로</button>
        </Link>
      )}
    </InputDiv>
  );
}

export default LoginInput;
