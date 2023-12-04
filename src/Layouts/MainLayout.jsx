import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import FooterComponent from "../Components/Shared/FooterComponent";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterComponent></FooterComponent>
            <ToastContainer />

        </div>
    );
};

export default MainLayout;