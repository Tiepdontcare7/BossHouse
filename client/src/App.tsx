import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import DetailPage from "./pages/client/DetailPage";
import HomePage from "./pages/client/HomePage";
import NotFound from "./pages/errors/404";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import ListProduct from "./pages/admin/products/ListProduct";
import AdminLayout from "./layout/AdminLayout";
import ContactPage from "./pages/client/Contact";
import Blog from "./pages/client/Blog";
import  Cart  from "./pages/client/Cart";
import { BlogDeatl } from "./pages/client/BlogDeatl";

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
          </Route>

          <Route path="/admin/" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ListProduct />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
