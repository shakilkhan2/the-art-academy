import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import Classes from "../components/classes/Classes";
import Teachers from "../components/teachers/Teachers";
import LogIn from "../components/authentications/login/LogIn";
import Register from "../components/authentications/register/Register";
import DashBoard from "../layout/DashBoard";
import MyCart from "../components/dashboard/MyCart/MyCart";
import ErrorPage from "../error/ErrorPage";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: '/class',
            element: <Classes/>
        },
        {
            path: '/instructor',
            element: <Teachers/>
        },
        {
          path: '/login',
          element: <LogIn/>
        },
        {
          path: '/register',
          element: <Register/>
        }
      ],
    },
    {
      path: "/dashboard",
      element: <DashBoard/>,
      children: [
        {
          path: "/dashboard/mycart",
          element: <MyCart/>
        }
      ]
    },
    {
      path: '*',
    element: <ErrorPage/>
    }
  ]);
