import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../store/baseURL";
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
      .post("/common/phone-check/", {
        phone: phone,
      })
      .then((response) => {
        if (response.data === true) {
          // 이미 있다고 페이지 바꿔야함
          moveToExisted();
        } else {
          // send-auth-code api 실행
          axios
            .post("/common/send-auth-code/", {
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
        <br />
        <StyledButton
          onClick={() => {
            HandleSignUp(phone, "phone");
            phoneCheck(phone);
            // moveToCheckNumber();
          }}
        >
          인증번호 받기
        </StyledButton>
      </StyledDiv2>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background-color: #fff9be;
  // background-color: white;
  height: 100vh;
`;

const StyledDiv2 = styled.div`
  background-color: white;
  border: 1px whitesmoke solid;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  width: 90vh;
  height: 40vh;
  text-align: left;
  margin: auto;
`;

const StyledP = styled.p`
  font-size: 25px;
  margin-left: 50px;
  margin-top: 70px;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  width: 50vh;
  height: 30px;
  font-size: 20px;
  padding: 10px;
  margin-right: 15px;
  margin-left: 50px;
  :focus {
    outline: 3px solid yellow;
  }
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  margin-left: 50px;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 700;
  background-color: #f7c815;
  font-size: 15px;
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
export default SignUpNumber;
