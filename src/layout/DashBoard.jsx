import { Link, Outlet } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher } from "react-icons/Gi";
import {
  MdClass,
  MdHome,
  MdOutlineClass,
  MdPayment,
  MdVerifiedUser,
} from "react-icons/md";
import useCart from "../components/hooks/useCart";
import { Helmet } from "react-helmet-async";
import useAdmin from "../components/hooks/useAdmin";
import useUser from "../components/hooks/useUser";

const DashBoard = () => {
  const [cart] = useCart();
  // TODO: have to create admin, students, instructors
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [checkUser] = useUser();
  console.log(checkUser);

  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>Dashboard | The Art Academy</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <Link to="/">
            <p className="text-lg text-amber-400 mb-12">
              The{" "}
              <span className="text-2xl font-bold text-amber-500">
                Art Academy
              </span>
            </p>
          </Link>
          {checkUser === "admin" && (
            <>
              <li>
                <Link to="/dashboard/manage_classes">
                  <MdClass className="h-6 w-6" />
                  Manage Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manage_users">
                  <MdVerifiedUser className="h-6 w-6" />
                  Manage Users
                </Link>
              </li>
            </>
          )}
          {checkUser === "student" && (
            <>
              <li>
                <Link to="/dashboard/mycart">
                  {" "}
                  <SiGoogleclassroom className="h-6 w-6" /> My Selected Classes:{" "}
                  <span className="text-amber-600 font-bold">
                    {cart?.length || 0}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/enrolled">
                  <MdClass className="h-6 w-6" />
                  My Enrolled Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/payment_history">
                  <MdPayment className="h-6 w-6" />
                  My Payment History
                </Link>
              </li>
            </>
          )}
          {checkUser === "instructor" && (
            <>
              
              <li>
                <Link to="/dashboard/add_class">
                  <MdClass className="h-6 w-6" />
                  Add a Class
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my_classes">
                  <MdPayment className="h-6 w-6" />
                  My Classes
                </Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link to="/">
              <MdHome className="h-6 w-6" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/class">
              <MdOutlineClass className="h-6 w-6" />
              Classes
            </Link>
          </li>
          <li>
            <Link to="/class">
              <GiTeacher className="h-6 w-6" />
              Instructors
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
