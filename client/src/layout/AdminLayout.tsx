import { Outlet, useNavigate } from "react-router-dom";

import { useState } from "react";
import {
  DashboardOutlined,
  // AliwangwangOutlined,
  ApartmentOutlined,
  BarChartOutlined,
  TableOutlined,
  FolderOpenOutlined,
  DiffOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";

const { Footer, Sider } = Layout;

const menuItem = [
  { label: "Dashboard", key: "/dashboard", icon: <DashboardOutlined /> },

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
    ],
  },
  { label: "Chart", key: "/chart", icon: <BarChartOutlined /> },
  { label: "Tables", key: "/tables", icon: <TableOutlined /> },
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const next = useNavigate();

  const handleClick = ({ key }: { key: string }) => {
    next("/admin" + key);
  };
  return (
    // <div id="wrapper">
    //   <AdminSidebar />
    //   <Outlet />
    // </div>
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          // style={{ display: "none" }}
          // style={{ backgroundColor: "#ccc" }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          {/* <div>
            <img
              width={80}
              style={{ marginLeft: "50px", padding: "30px 0" }}
              src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png"
              alt="logo"
            />
          </div> */}
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={menuItem}
            onClick={handleClick}
          />
        </Sider>
        <Layout>
          {/* <Breadcrumb items={[{ title: "admin" }, { title: "products" }]} /> */}
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
