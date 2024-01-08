import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const BaseLayout = () => {
    return (
        <>
            <Header />
           <div className="pt-[140px]">
           <Outlet />
           </div>
            <Footer />
        </>
    );
};

export default BaseLayout;
