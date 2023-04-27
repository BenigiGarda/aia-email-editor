import styled from "styled-components";
import { Button, Input, Typography } from "antd";
import { useRef } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../network/api";
import Cookies from "js-cookie";
import bgImage from "../assets/images/people.png";

function OTP() {
  const { id } = useParams();
  const navigate = useNavigate();
  const textbase = useRef(null);
  const [OtpValue, setOtpValue] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  // const [state, dispatch] = useReducer(
  //   (state, action) => {
  //     switch (action.type) {
  //       case "RESEND":
  //         return { ...state, isResent: true };
  //       default:
  //         return state;
  //     }
  //   },
  //   { isResent: false }
  // );

  // const handleResend = () => {
  //   // lakukan proses mengirim ulang OTP code di sini
  //   dispatch({ type: "RESEND" });
  //   setErrorMessage("");
  //   try {
  //     apiClient
  //       .post("/sendotp", { id: id })
  //       .then((res) => {
  //         // Proses respons dari API di sini
  //       })
  //       .catch((error) => {
  //         // Proses error dari API di sini
  //       });
  //   } catch (error) {
  //     // Proses error di sini
  //   }
  // };
  // };

  const onChange = (field) => (e) => {
    const childCount = textbase.current.childElementCount;
    const currentIndex = [...e.target.parentNode.children].indexOf(e.target);
    setOtpValue({ ...OtpValue, [field]: e.target.value });
    if (currentIndex !== childCount - 1) {
      e.target.nextSibling.focus();
    }
  };

  const onKeyPress = (e) => {
    // Hanya memperbolehkan angka
    if (!/^\d*$/.test(e.key)) {
      e.preventDefault();
    }
  };
  const onSubmit = () => {
    const otp = Object.values(OtpValue).join("");
    if (otp.length < 6) {
      // Atur pesan kesalahan
      setErrorMessage("OTP harus terdiri dari 6 angka");
      return;
    }
    const body = {
      id: id,
      otp: otp,
    };
    try {
      apiClient
        .post("/sendotp", body)
        .then((res) => {
          Cookies.set("userToken", res.data.token);
          navigate(`/`);
        })
        .catch((error) => alert(error.response.data.message));
    } catch (error) {
      console.log(error.response.data.message);
    }
    // console.log(test.join(""));
  };
  const onReset = () => {
    setOtpValue({});
    setErrorMessage("");
  };

  return (
    <LoginBody>
      <BlurStyle />
      <OTPContainer>
        <Content>
          {/* <Text>
            {state.isResent
              ? "OTP already sent"
              : "Please input your OTP code:"}
          </Text> */}
          <Text>Please input your OTP code</Text>
          <InputContainer ref={textbase}>
            {new Array(6).fill(null).map((input, index) => {
              return (
                <StyledInput
                  value={Object.values(OtpValue)[index]}
                  onChange={onChange(`${index}`)}
                  key={index}
                  maxLength={1}
                  onKeyPress={onKeyPress}
                />
              );
            })}
          </InputContainer>
          {errorMessage && <Error>{errorMessage}</Error>}
          <ButtonGroup>
            <StyledButton danger onClick={onReset}>
              Reset
            </StyledButton>
            {/* <StyledButton onClick={handleResend}>Resend</StyledButton> */}
            <StyledButton type="primary" onClick={onSubmit}>
              Submit
            </StyledButton>
          </ButtonGroup>
        </Content>
      </OTPContainer>
    </LoginBody>
  );
}
const LoginBody = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const OTPContainer = styled.div`
  width: 25vw;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 5%;
`;
const Content = styled.div`
  padding: 2rem;
  background: rgb(240, 240, 240, 75%);
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  animation: scale-in-hor-center 1s;
`;
const StyledInput = styled(Input)`
  width: 35px;
  height: 35px;
  text-align: center;
  font-family: AIABold;
  font-size: 20px;
`;
const ButtonGroup = styled.div`
  margin-top: 20px;
  width: 20vw;
  display: flex;
  justify-content: space-around;
  animation: scale-in-hor-center 1s;
`;
const StyledButton = styled(Button)`
  display: flex;
  font-family: "AIARegular";
`;

const Text = styled.p`
  font-size: 23px;
  text-align: center;
  font-weight: bold;
  color: #d11145;
  animation: scale-in-hor-center 1s;
  font-family: "AIABold";
`;

const BlurStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
`;

const Error = styled.p`
  display: block;
  margin-block-start: 10px !important;
  margin-block-end: 0px !important;
  margin-inline-start: 1px !important;
  margin-inline-end: 0px !important;
  color: #d11145;
  animation: scale-in-hor-center 1s;
  font-family: "AIABold";
`;
export default OTP;
