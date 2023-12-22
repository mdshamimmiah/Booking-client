import Navber from "../navber/Navber";
import { Outlet } from 'react-router-dom'
import Footer from "../pages/home/Footer";

const MainLayout = () => {
    return (
        <div className="">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;