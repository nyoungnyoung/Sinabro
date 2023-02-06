import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
function SignUpNumber({ HandleSignUp, HandleAuthCode }) {
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const changeNumber = (event) => {
    setPhone(event);
  };

  const moveToCheckNumber = () => {
    navigate("/signup/checknumber");
  };

  const moveToExisted = () => {
    navigate("/signup/existed");
  };

  const phoneCheck = (phone) => {
    axios
      .post("http://localhost:5000/common/phone-check/", {
        phone: phone,
      })
      .then((response) => {
        if (response.data === true) {
          // 이미 있다고 페이지 바꿔야함
          moveToExisted();
        } else {
          // send-auth-code api 실행
          axios
            .post("http://localhost:5000/common/send-auth-code/", {
              phone: phone,
            })
            .then((response) => {
              console.log(response.data);
              HandleAuthCode(response.data);
            })
            .catch((error) => console.log(error));

          // 인증번호 입력 화면으로 전환
          moveToCheckNumber();
        }
      })
      .catch((error) => console.log(error));
  };

  // const sendAuthCode = () => {
  //   axios.post(baseUrl + '/common/send-auth-code', {
  //     phone: axiosNumber,
  //   }).then((response) => console.log(response.data))
  //     .catch((error) => console.log(error));
  // };

  return (
    <StyledDiv>
      <StyledDiv2>
        <StyledP>고객님의 전화번호를 입력해주세요.</StyledP>
        <StyledInput
          type="text"
          value={phone}
          onChange={(event) => {
            changeNumber(event.target.value);
          }}
          placeholder="여기에 전화번호를 입력해주세요 :)"
        />
        <StyledButton
          onClick={() => {
            HandleSignUp(phone, "phone");
            phoneCheck(phone);
            // moveToCheckNumber();
          }}
        >
          등록
        </StyledButton>
      </StyledDiv2>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  // background-color: #fff9be;
  // background-color: white;
  height: 100vh;
`;

const StyledDiv2 = styled.div`
  background-color: white;
  border: 1px black solid;
  width: 90vh;
  height: 30vh;
  text-align: left;
  margin: auto;
`;

const StyledP = styled.p`
  font-size: 25px;
  margin-left: 50px;
  margin-top: 40px;
`;

const StyledInput = styled.input`
  width: 50vh;
  height: 30px;
  font-size: 20px;
  padding: 10px;
  margin-right: 15px;
  margin-left: 50px;
`;

const StyledButton = styled.button`
  width: 60px;
  height: 50px;
  font-size: 15px;
`;

export default SignUpNumber;
