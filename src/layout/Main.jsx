import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import NavBar from "../components/shared/navbar/NavBar";


const Main = () => {
    const location = useLocation();
    const hideNavFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {hideNavFooter || <NavBar/>}
           <Outlet/>
           {hideNavFooter || <Footer/> }
        </div>
    );
};

export default Main;