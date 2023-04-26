import styled from "styled-components";
import { useFormik } from "formik";
import { Avatar, Button, Form, Input, Space, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { settingSchema } from "../../utils/validationSchema";
import apiClient from "../../network/api";

function Setting() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
      try {
        apiClient
          .patch("/api/v1/users/update", values)
          .then((res) => console.log(res))

          .catch((error) => alert(error.response.data.message));
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  });
  const yupSync = {
    async validator({ field }, value) {
      await settingSchema.validateSyncAt(field, { [field]: value });
    },
  };

  return (
    <SettingDiv>
      <Content1>
        <Avatar size={180} icon={<UserOutlined />} />
      </Content1>
      <Content2>
        <StyledForm onFinish={formik.handleSubmit}>
          <StyledInputGroup>
            <Typography.Title level={4}>Name</Typography.Title>
            <Form.Item name="full_name" rules={[yupSync]}>
              <StyledInput
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Name"
                value={formik.values.full_name}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </StyledInputGroup>
          <StyledInputGroup>
            <Typography.Title level={4}>Email</Typography.Title>
            <Form.Item name="email" rules={[yupSync]}>
              <StyledInput
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </StyledInputGroup>
          <StyledInputGroup>
            <Typography.Title level={4}>Password</Typography.Title>
            <Form.Item name="password" rules={[yupSync]}>
              <StyledInput
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </StyledInputGroup>
          <StyledButtonGroup size={"large"}>
            <Form.Item>
              <StyledButton
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Update
              </StyledButton>
            </Form.Item>
            <Form.Item>
              <StyledButton
                type="primary"
                danger
                htmlType="submit"
                className="login-form-button"
              >
                Reset
              </StyledButton>
            </Form.Item>
          </StyledButtonGroup>
        </StyledForm>
      </Content2>
    </SettingDiv>
  );
}
const SettingDiv = styled.div`
  background-color: white;
`;
const Content1 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
const Content2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 2rem;
`;
const StyledForm = styled(Form)`
  width: 500px;
`;
const StyledInputGroup = styled.div`
  justify-content: space-between;
`;
const StyledButtonGroup = styled(Space)`
  display: flex;
  justify-content: flex-end;
`;
const StyledInput = styled(Input)`
  padding: 8px;
  width: 100%;
`;
const StyledButton = styled(Button)`
  width: 100%;
`;
export default Setting;
