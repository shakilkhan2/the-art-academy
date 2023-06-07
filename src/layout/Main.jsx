import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import NavBar from "../components/shared/navbar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar/>
           <Outlet/>
           <Footer/> 
        </div>
    );
};

export default Main;