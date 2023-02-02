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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function FindIdInput(props) {
  const findIdStep = props.findIdStep;
  return (
    <div>
      <InputDiv>
        {findIdStep === "1" ? (
          <div>
            <StyledP>아이디를 찾기 위해</StyledP>
            <StyledP>고객님의 전화번호를 입력해주세요</StyledP>
            <input type="text" />
            <StyledLink to="/findid/2">
              <button>인증번호 받기</button>
            </StyledLink>
          </div>
        ) : findIdStep === "2" ? (
          <div>
            <StyledP>고객님 휴대폰으로 전송된</StyledP>
            <StyledP>인증번호 6자리를 입력해주세요</StyledP>
            <input type="text" placeholder="3분내로 입력해주세요" />
            {/* 인증번호 검증 후 맞으면 5, 틀리면 3 */}
            <StyledLink to="/findid/5">
              <button>확인</button>
            </StyledLink>
            <br />
            <StyledLink to="/findid/4">
              <button>인증번호가 오지 않으시면 여기를 눌러주세요</button>
            </StyledLink>
          </div>
        ) : findIdStep === "3" ? (
          <div>
            <StyledP>인증번호가 일치하지 않습니다.</StyledP>
            <StyledP>다시 한 번 입력해주세요</StyledP>
            <input type="text" placeholder="3분내로 입력해주세요" />
            {/* 인증번호 검증 후 맞으면 5, 틀리면 3 */}
            <StyledLink to="/findid/5">
              <button>확인</button>
            </StyledLink>
          </div>
        ) : findIdStep === "4" ? (
          <div>
            <StyledP>인증번호가 다시 전송되었습니다.</StyledP>
            <StyledP>고객님 휴대폰으로 전송된</StyledP>
            <StyledP>인증번호 6자리를 입력해주세요</StyledP>
            <input type="text" placeholder="3분내로 입력해주세요" />
            <StyledLink to="/findid/5">
              <button>확인</button>
            </StyledLink>
            <br />
            <StyledLink to="/findid/4">
              <button>인증번호가 오지 않으시면 여기를 눌러주세요</button>
            </StyledLink>
          </div>
        ) : (
          <div>
            <StyledP>고객님의 아이디는</StyledP>
            <StyledP>ㅇㅇㅇ 입니다.</StyledP>
            <StyledLink to="/login/id">
              <button>로그인하기</button>
            </StyledLink>
          </div>
        )}
      </InputDiv>
    </div>
  );
}

export default FindIdInput;
