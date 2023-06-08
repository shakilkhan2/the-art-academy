import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import NavBar from "../components/shared/navbar/NavBar";

const Main = () => {
  const location = useLocation();
  const hideNavFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {hideNavFooter || <NavBar />}
      <div className="pt-16">
      <Outlet />
      </div>
      {hideNavFooter || <Footer />}
    </div>
  );
};

export default Main;
