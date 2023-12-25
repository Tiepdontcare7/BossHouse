import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import DetailPage from "./pages/client/DetailPage";
import HomePage from "./pages/client/HomePage";
import NotFound from "./pages/errors/404";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import ListProduct from "./pages/admin/products/ListProduct";
import AdminLayout from "./layout/AdminLayout";
import AdminChart from "./components/AdminChart";
import AdminTable from "./components/AdminTable";
import ListCategory from "./pages/admin/category/ListCategory";
import ListUsers from "./pages/admin/users/ListUsers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="detail/:id" element={<DetailPage />} />
          </Route>

          <Route path="/admin/" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ListProduct />} />

            <Route path="category" element={<ListCategory />} />
            <Route path="users" element={<ListUsers />} />

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
