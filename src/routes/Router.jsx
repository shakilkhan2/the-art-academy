import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import Classes from "../components/classes/Classes";
import Teachers from "../components/teachers/Teachers";
import LogIn from "../components/authentications/login/LogIn";
import Register from "../components/authentications/register/Register";
import DashBoard from "../layout/DashBoard";
import MyCart from "../components/dashboard/MyCart/MyCart";
import ErrorPage from "../error/ErrorPage";
import EnrolledClasses from "../components/dashboard/enrolledClass/EnrolledClasses";
import PaymentHistory from "../components/dashboard/paymentHistory/PaymentHistory";
import PrivateRoutes from "./PrivateRoutes";
import ManageClasses from "../components/dashboard/manageClasses/ManageClasses";
import ManageUsers from "../components/dashboard/manageUsers/ManageUsers";
import AddClass from "../components/dashboard/addClass/AddClass";
import AdminonlyRoutes from "./AdminonlyRoutes";
import MyClasses from "../components/dashboard/myclasses/MyClasses";
import Payment from "../components/dashboard/payment/Payment";
import UpdateClass from "../components/dashboard/updateClass/UpdateClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/class",
        element: <Classes />,
      },
      {
        path: "/instructor",
        element: <Teachers />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/mycart",
        element: <MyCart />,
      },
      {
        path: "/dashboard/enrolled",
        element: <EnrolledClasses />,
      },
      {
        path: "/dashboard/payment_history",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/manage_classes",
        element: <ManageClasses />,
      },
      {
        path: "/dashboard/manage_users",
        element:<AdminonlyRoutes> <ManageUsers /></AdminonlyRoutes>,
      },
      {
        path: "/dashboard/add_class",
        element: <AddClass/>
      },
      {
        path: "/dashboard/my_classes",
        element: <MyClasses/>
      },
      {
        path: "/dashboard/payment",
        element: <Payment/>
      },
      {
        path: "/dashboard/update-class/:id",
        element: <UpdateClass/>
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
