"use client";
import React, { useState } from "react";
import {
  AlertOutlined,
  DesktopOutlined,
  PieChartOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, Layout, Menu, theme } from "antd";
import Image from "next/image";
const { Header, Content, Footer, Sider } = Layout;
import Logo from "../../assets/img/Logo.png";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Layouts = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const goto = (key: string) => {
    return router.push(key);
  };

  function getItem(
    label: string,
    key: string,
    icon: React.ReactElement,
    children?: React.ReactNode
  ) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem("Dashboard", "/dashboard", <PieChartOutlined />),
    getItem("Broiler Management", "/broiler-management", <DesktopOutlined />),
    getItem("Slaughterhouse", "/slaughterhouse", <DesktopOutlined />),
    getItem("Feedmill", "/feedmill", <DesktopOutlined />),
    getItem("Layer Management", "/layer-management", <DesktopOutlined />),
    getItem("Manure Handling", "/manure-handling", <DesktopOutlined />),
    getItem("Inventory", "/inventory", <DesktopOutlined />),
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logOut = async () => {
    await signOut();
  };
  const logoutItem = [
    {
      key: "1",
      label: (
        <Button type="default" onClick={logOut}>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ backgroundColor: "#fff" }}
        width={250}
      >
        <Image src={Logo} alt="logo" className="p-5 -mt-5 w-7xl" />
        <label className="ml-8 text-gray-600 uppercase mb-10">
          General Menu
        </label>
        <Menu
          //   theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          style={{ backgroundColor: "#fff", color: "#4a5565" }}
          onClick={(data) => goto(data.key)}
          className="text-gray-600"
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            paddingLeft: "20px",
            paddingRight: "40px",
          }}
        >
          <div className="flex justify-between">
            <div>
              {" "}
              <Input
                size="large"
                placeholder="search"
                prefix={<SearchOutlined />}
              />
            </div>
            <div className="flex flex-row gap-3">
              <SettingOutlined />

              <AlertOutlined />

              <Dropdown
                menu={{
                  items: logoutItem,
                }}
              >
                <button>
                  <UserOutlined />
                </button>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
          className="p-5 pt-10"
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Layouts;
