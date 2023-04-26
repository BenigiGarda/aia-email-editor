import styled from "styled-components";
import { Button, Input, Typography } from "antd";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../network/api";
import Cookies from "js-cookie";

function OTP() {
  const { id } = useParams();
  const navigate = useNavigate();
  const textbase = useRef(null);
  const [OtpValue, setOtpValue] = useState({});

  const onChange = (field) => (e) => {
    const childCount = textbase.current.childElementCount;
    const currentIndex = [...e.target.parentNode.children].indexOf(e.target);
    setOtpValue({ ...OtpValue, [field]: e.target.value });
    if (currentIndex !== childCount - 1) {
      e.target.nextSibling.focus();
    }
  };
  const onSubmit = () => {
    const test = Object.values(OtpValue);
    const body = {
      id: id,
      otp: test.join(""),
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
  };

  return (
    <LoginBody>
      <OTPContainer>
        <Content>
          <Typography>Harap Masukan OTP</Typography>
          <InputContainer ref={textbase}>
            {new Array(6).fill(null).map((input, index) => {
              return (
                <StyledInput
                  value={Object.values(OtpValue)[index]}
                  onChange={onChange(`${index}`)}
                  key={index}
                  maxLength={1}
                />
              );
            })}
          </InputContainer>

          <ButtonGroup>
            <StyledButton danger onClick={onReset}>
              Reset
            </StyledButton>
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
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d9d0d0;
  background-image: url("https://s7ap1.scene7.com/is/image/aiastage/singapore-skyline?qlt=85&wid=1200&ts=1669361767601&dpr=off");
  background-size: cover;
`;
const OTPContainer = styled.div`
  width: 300px;
`;
const Content = styled.div`
  padding: 2rem;
  background-color: white;
  box-sizing: border-box;
  border-radius: 8px;
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
`;
const StyledInput = styled(Input)`
  width: 30px;
`;
const ButtonGroup = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const StyledButton = styled(Button)`
  width: 100px;
`;

export default OTP;
