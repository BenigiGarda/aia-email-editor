import styled from "styled-components";
import { useFormik } from "formik";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import apiClient from "../network/api";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/images/people.png";
import Cookies from "js-cookie";
function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      try {
        apiClient
          .post("/login", values)
          .then((res) => {
            Cookies.set("userId", res.data.userId);
            navigate(`otp/${res.data.userId}`);
          })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  });
  return (
    <LoginBody>
      <BlurStyle />

      <StyledForm onFinish={formik.handleSubmit}>
        <StyledImg src={require("../assets/images/aialogo.png")} />
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <StyledInput
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <StyledInput
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <CheckBoxStyle>Remember me</CheckBoxStyle>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <StyledButton
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </StyledButton>
        </Form.Item>
      </StyledForm>
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
  font-family: "AIARegular";
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "AIARegular";
  width: 25vw;
  position: absolute;
  left: 37.5%;
  top: 25%;

  background: rgb(240, 240, 240, 90%);
  padding: 20px;
  border-radius: 5%;

  .login-form-forgot {
    float: right;
  }

  .ant-col-rtl .login-form-forgot {
    float: left;
  }

  .ant-btn-primary {
    background-color: #d11145;
  }

  .ant-form-item .ant-form-item-explain-error {
    font-family: AIABold;
  }

  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: #d11145;
    border-color: none !important;
  }
`;

const StyledImg = styled.img`
  display: flex;
  width: 10vw;
  padding: 5%;
  margin: auto;
`;

const StyledButton = styled(Button)`
  background-color: #d11145;
  width: 100%;
  font-family: "AIABold";
`;

const StyledInput = styled(Input)`
  width: 100%;
  .ant-input {
    font-family: AIARegular;
  }
`;

const BlurStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
`;

const CheckBoxStyle = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #d11145;
  }
  font-family: "AIARegular";
`;
export default Login;
