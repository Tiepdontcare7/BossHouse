import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const BaseLayout = () => {
    return (
        <>
            <Header />
           <div className="xl:pt-[120px] pt-[75px] md:pt-[100px]">
           <Outlet />
           </div>
            <Footer />
        </>
    );
};

export default BaseLayout;
