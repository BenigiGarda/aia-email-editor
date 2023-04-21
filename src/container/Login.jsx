import styled from "styled-components";
import { Formik, useFormik } from "formik";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { loginSchema } from "../utils/validationSchema";
import apiClient from "../network/api";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
      try {
        apiClient
          .post("/api/v1/users/login", values)
          .then(() => {
            navigate("otp");
          })
          .catch((error) => alert(error.response.data.message));
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  });
  return (
    <LoginBody>
      <StyledForm onFinish={formik.handleSubmit}>
        <StyledImg src="./src/assets/images/aialogo.png" />
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item name="password">
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
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
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d9d0d0;
  background-image: url("https://s7ap1.scene7.com/is/image/aiastage/singapore-skyline?qlt=85&wid=1200&ts=1669361767601&dpr=off");
  background-size: cover;
`;

const StyledForm = styled(Form)`
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
const StyledImg = styled.img`
  background: none;
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  align-self: center;
`;
const StyledButton = styled(Button)`
  width: 100%;
`;
export default Login;
