import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import DetailPage from './pages/client/DetailPage';
import HomePage from './pages/client/HomePage';
import NotFound from './pages/errors/404';
import Dashboard from './pages/admin/Dashboard';
import ListProduct from './pages/admin/products/ListProduct';
import AdminLayout from './layout/AdminLayout';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* ! Client */}
                    <Route path="/" element={<BaseLayout />}>
                        <Route path="" element={<HomePage />} />
                        <Route path="detail/:id" element={<DetailPage />} />
                    </Route>
                    {/*  !Admin */}
                    <Route path="/admin/" element={<AdminLayout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="products" element={<ListProduct />} />
                    </Route>
                    // !Errors
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
