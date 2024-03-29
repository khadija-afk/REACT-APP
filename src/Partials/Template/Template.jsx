import { Outlet } from "react-router-dom";
import Header from "../../Partials/Header/Header";
import Footer from "../../Partials/Footer/Footer";

const Template = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Template;