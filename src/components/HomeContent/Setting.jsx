import styled from "styled-components";
import { useFormik } from "formik";
import { Avatar, Button, Form, Input, Space, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { settingSchema } from "../../utils/validationSchema";
import apiClient from "../../network/api";
import { useQueryClient } from "react-query";
import Cookies from "js-cookie";
import { useState } from "react";

function Setting() {
  const queryClient = useQueryClient();
  const [formMode, setFormMode] = useState("updateUser");
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      password: "",
    },

    onSubmit: (values) => {
      const bodyUserForm = {
        name: values.name,
        phone: values.phone,
      };
      const bodyPasswordForm = {
        password: values.password,
      };
      try {
        if (formMode === "updateUser") {
          apiClient
            .patch(
              "http://localhost:8000/updateuser/" + Cookies.get("userId"),
              bodyUserForm,
              {
                headers: {
                  Authorization: `Bearer ${Cookies.get("userToken")}`,
                },
              }
            )
            .then((res) => {
              console.log(res);
              queryClient.invalidateQueries("userInformation");
            })
            .catch((error) => alert(error.response.data.message));
        } else {
          apiClient
            .patch(
              "http://localhost:8000/updateuserpassword/" +
                Cookies.get("userId"),
              bodyPasswordForm,
              {
                headers: {
                  Authorization: `Bearer ${Cookies.get("userToken")}`,
                },
              }
            )
            .then((res) => {
              console.log(res);
              queryClient.invalidateQueries("userInformation");
            })
            .catch((error) => alert(error.response.data.message));
        }
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
          {formMode === "updateUser" ? (
            <>
              {" "}
              <StyledInputGroup>
                <Typography.Title level={4}>Name</Typography.Title>
                <Form.Item name="name" rules={[yupSync]}>
                  <StyledInput
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </Form.Item>
              </StyledInputGroup>
              <StyledInputGroup>
                <Typography.Title level={4}>Phone</Typography.Title>
                <Form.Item name="phone" rules={[yupSync]}>
                  <StyledInput
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Phone"
                    value={formik.values.phone}
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
                    onClick={() => setFormMode("updatePassword")}
                  >
                    Change Password
                  </StyledButton>
                </Form.Item>
              </StyledButtonGroup>
            </>
          ) : (
            <>
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
                  <StyledButton onClick={() => setFormMode("updateUser")}>
                    Back
                  </StyledButton>
                </Form.Item>
              </StyledButtonGroup>
            </>
          )}
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
