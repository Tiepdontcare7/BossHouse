import { Outlet, useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  HomeOutlined,
  DashboardOutlined,
  // AliwangwangOutlined,
  ApartmentOutlined,
  BarChartOutlined,
  TableOutlined,
  FolderOpenOutlined,
  DiffOutlined,
  UserAddOutlined,
  SettingOutlined,
  CalculatorOutlined,
  SolutionOutlined,
  UsergroupAddOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";

const { Footer, Sider } = Layout;

const menuItem = [
  { label: "Trang Chủ", key: "/../", icon: <HomeOutlined /> },
  { label: "Thống Kê", key: "/dashboard", icon: <DashboardOutlined /> },

  {
    label: "Quản lý",
    key: "sub1",
    // icon: <AliwangwangOutlined />,
    icon: <ApartmentOutlined />,
    children: [
      {
        label: "Sản phẩm",
        key: "/products",
        icon: <DiffOutlined />,
      },
      { label: "Danh mục", key: "/category", icon: <FolderOpenOutlined /> },
      { label: "Users", key: "/users", icon: <UserAddOutlined /> },
      { label: "Khách Hàng", key: "/khachhang", icon: <UsergroupAddOutlined /> },
      { label: "Đơn Hàng", key: "/donhang", icon: <SolutionOutlined /> },
      { label: "Hóa Đơn", key: "/hoadon", icon: <CalculatorOutlined /> },
    ],
  },
  { label: "Biểu Đồ", key: "/chart", icon: <BarChartOutlined /> },
  { label: "Bảng", key: "/tables", icon: <TableOutlined /> },
  { label: "Cài Đặt", key: "/settings", icon: <SettingOutlined /> },
];
// ... (your other imports)

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const next = useNavigate();

  const handleClick = ({ key }: { key: string }) => {
    next("/admin" + key);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            position: "fixed",
            height: "100vh",
            left: 0,
            zIndex: 1,
          }}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={menuItem}
            onClick={handleClick}
          />
        </Sider>
        <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: "margin 0.2s" }}>
          <Outlet />
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
