import { Avatar, Layout, Menu, Space, Typography } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import AIALogo from "../../assets/images/aialogofull.svg";
import { useLocation, useNavigate } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
function HomeLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const items = [
    {
      label: "Home Editor",
      key: "/",
      icon: <MailOutlined />,
    },
    {
      label: "Save Data",
      key: "savedata",
      icon: <MailOutlined />,
    },
    {
      label: "Settings",
      key: "setting",
      icon: <MailOutlined />,
    },
  ];

  const onClick = (e) => {
    navigate(e.key);
  };
  return (
    <StyledLayout>
      <Sider breakpoint="lg" collapsedWidth="0" style={siderStyle}>
        <ImgLogo src={AIALogo} alt="..." />
        <StyledMenu
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={items}
          onClick={onClick}
        />
      </Sider>
      <Layout>
        <StyledHeader>
          <StyledUserSpace>
            <UserName>Jonathan Joestar</UserName>
            <Avatar size={50} icon={<UserOutlined />} />
          </StyledUserSpace>
        </StyledHeader>

        <Content
          style={{
            margin: "16px 16px 16px",
            height: "100%",
          }}
        >
          {children}
        </Content>
      </Layout>
    </StyledLayout>
  );
}

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  width: 100%;
`;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: flex-end;
  text-align: center;
  color: #fff;
  height: 75px;
  padding-inline: 50;
  background-color: red;
`;
const UserName = styled(Typography)`
  color: white !important;
  font-family: "AIACondensedMedium";
  font-size: 22px;
`;
const StyledUserSpace = styled(Space)`
  display: "flex";
  align-items: "center";
`;
const ImgLogo = styled.img`
  width: 200px;
  height: 75px;
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid white;
`;
const StyledMenu = styled(Menu)`
  background-color: white;
  background: none;
  margin-top: -50px;
  .ant-menu-item-selected {
    background-color: rgb(206, 28, 28) !important;
    color: white !important;
  }
  .ant-menu-item {
    color: white !important;
    font-family: "AIACondensedMedium";
    font-size: 22px;
  }
  .ant-menu-item:hover {
    background-color: white !important;
    color: rgb(206, 28, 28) !important;
    font-family: "AIACondensedMedium";
    font-size: 22px;
  }
`;

const siderStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#ff0000",
};

export default HomeLayout;
