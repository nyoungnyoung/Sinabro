import styled from "styled-components";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { findPw } from "../../store/userSlice";
>>>>>>> dev-BE

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

function FindPwInput(props) {
  const findPwStep = props.findPwStep;
<<<<<<< HEAD
=======
  const findPwInfo = useSelector((state) => state.user.findPwInfo);

  // phone, inputNum 입력받아 state로 갖고 있기
  const [phone, setPhone] = useState("");
  const [inputNum, setInputNum] = useState("");
  const [newPw, setNewPw] = useState("");
  const dispatch = useDispatch();

  console.log(findPwInfo);

>>>>>>> dev-BE
  return (
    <div>
      <InputDiv>
        {findPwStep === "1" ? (
          <div>
            <StyledP>비밀번호를 다시 설정하기 위해</StyledP>
            <StyledP>고객님의 전화번호를 입력해주세요</StyledP>
<<<<<<< HEAD
            <input type="text" />
            <StyledLink to="/findpw/2">
=======
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <StyledLink
              to="/findpw/2"
              onClick={() => {
                dispatch(
                  findPw({
                    phone: phone,
                    authNum: "",
                    inputNum: inputNum,
                    newPw: newPw,
                  })
                );
              }}
            >
>>>>>>> dev-BE
              <button>인증번호 받기</button>
            </StyledLink>
          </div>
        ) : findPwStep === "2" ? (
          <div>
            <StyledP>고객님 휴대폰으로 전송된</StyledP>
            <StyledP>인증번호 6자리를 입력해주세요</StyledP>
<<<<<<< HEAD
            <input type="text" placeholder="3분내로 입력해주세요" />
            {/* 인증번호 검증 후 맞으면 5, 틀리면 3 */}
            <StyledLink to="/findpw/5">
=======
            <input
              type="text"
              placeholder="3분내로 입력해주세요"
              onChange={(e) => setInputNum(e.target.value)}
              value={inputNum}
            />
            {/* 인증번호 검증 후 맞으면 5, 틀리면 3 */}
            <StyledLink
              to="/findpw/5"
              onClick={() => {
                dispatch(
                  findPw({
                    phone: phone,
                    authNum: "",
                    inputNum: inputNum,
                    newPw: "",
                  })
                );
              }}
            >
>>>>>>> dev-BE
              <button>확인</button>
            </StyledLink>
            <br />
            <StyledLink to="/findpw/4">
              <button>인증번호가 오지 않으시면 여기를 눌러주세요</button>
            </StyledLink>
          </div>
        ) : findPwStep === "3" ? (
          <div>
            <StyledP>인증번호가 일치하지 않습니다.</StyledP>
            <StyledP>다시 한 번 입력해주세요</StyledP>
<<<<<<< HEAD
            <input type="text" placeholder="3분내로 입력해주세요" />
            {/* 비밀번호 검증 후 맞으면 5, 틀리면 3 */}
            <StyledLink to="/findpw/5">
=======
            <input
              type="text"
              placeholder="3분내로 입력해주세요"
              onChange={(e) => setInputNum(e.target.value)}
              value={inputNum}
            />
            {/* 비밀번호 검증 후 맞으면 5, 틀리면 3 */}
            <StyledLink
              to="/findpw/5"
              onClick={() => {
                dispatch(
                  findPw({
                    phone: phone,
                    authNum: "",
                    inputNum: inputNum,
                    newPw: "",
                  })
                );
              }}
            >
>>>>>>> dev-BE
              <button>확인</button>
            </StyledLink>
          </div>
        ) : findPwStep === "4" ? (
          <div>
            <StyledP>인증번호가 다시 전송되었습니다.</StyledP>
            <StyledP>고객님 휴대폰으로 전송된</StyledP>
            <StyledP>인증번호 6자리를 입력해주세요</StyledP>
<<<<<<< HEAD
            <input type="text" placeholder="3분내로 입력해주세요" />
            <StyledLink to="/findpw/5">
=======
            <input
              type="text"
              placeholder="3분내로 입력해주세요"
              onChange={(e) => setInputNum(e.target.value)}
              value={inputNum}
            />
            <StyledLink
              to="/findpw/5"
              onClick={() => {
                dispatch(
                  findPw({
                    phone: phone,
                    authNum: "",
                    inputNum: inputNum,
                    newPw: "",
                  })
                );
              }}
            >
>>>>>>> dev-BE
              <button>확인</button>
            </StyledLink>
            <br />
            <StyledLink to="/findpw/4">
              <button>인증번호가 오지 않으시면 여기를 눌러주세요</button>
            </StyledLink>
          </div>
        ) : findPwStep === "5" ? (
          <div>
            <StyledP>새로운 비밀번호를 입력해주세요</StyledP>
<<<<<<< HEAD
            <input type="text" placeholder="비밀번호를 입력해주세요" />
            <StyledLink to="/findpw/6">
=======
            <input
              type="text"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => setNewPw(e.target.value)}
              value={newPw}
            />
            <StyledLink
              to="/findpw/6"
              onClick={() => {
                dispatch(
                  findPw({
                    phone: phone,
                    authNum: "",
                    inputNum: inputNum,
                    newPw: newPw,
                  })
                );
              }}
            >
>>>>>>> dev-BE
              <button>재설정</button>
            </StyledLink>
          </div>
        ) : (
          <div>
<<<<<<< HEAD
            <StyledP>ㅇㅇㅇㅇㅇㅇㅇ</StyledP>
=======
            <StyledP>{newPw}</StyledP>
>>>>>>> dev-BE
            <StyledP>앞으로 이 비밀번호로 로그인해 주세요</StyledP>
            <StyledLink to="/login/id">
              <button>로그인하기</button>
            </StyledLink>
          </div>
        )}
      </InputDiv>
    </div>
  );
}

export default FindPwInput;
