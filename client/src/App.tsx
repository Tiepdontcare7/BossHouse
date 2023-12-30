import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import DetailPage from "./pages/client/Detail/DetailPage";
import HomePage from "./pages/client/Homepage/HomePage";
import NotFound from "./pages/errors/404";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import ListProduct from "./pages/admin/products/ListProduct";
import AdminLayout from "./layout/AdminLayout";
import AdminChart from "./components/AdminChart";
import AdminTable from "./components/AdminTable";
import ListCategory from "./pages/admin/category/ListCategory";
import ListUsers from "./pages/admin/users/ListUsers";
import Settings from "./pages/admin/settings/Settings";
import ContactPage from "./pages/client/Contact";
import Blog from "./pages/client/Blog/Blog";
import  Cart  from "./pages/client/Cart";
import { BlogDeatl } from "./pages/client/Blog/BlogDeatl";
import Shop from "./pages/client/Shop/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="detail/:id" element={<DetailPage />} />
            <Route path="contact" element={<ContactPage/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="blogDetail" element={<BlogDeatl/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="dogshop" element={<Shop />} />
            <Route path="catshop" element={<Shop />} />
          </Route>

          <Route path="/admin/" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ListProduct />} />

            <Route path="category" element={<ListCategory />} />
            <Route path="users" element={<ListUsers />} />
            <Route path="settings" element={<Settings />} />
            <Route path="khachhang" element={<ListCategory />} />
            <Route path="hoadon" element={<ListUsers />} />
            <Route path="donhang" element={<Settings />} />

            <Route path="chart" element={<AdminChart />} />
            <Route path="tables" element={<AdminTable />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
