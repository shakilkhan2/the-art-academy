import { useContext } from "react";
import { AuthContext } from "../providers/authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/loader/Loader";
import useAdmin from "../components/hooks/useAdmin";

// TODO: is't working properly, have to fix bug

const AdminonlyRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin()
  const location = useLocation();

  if(loading || isAdminLoading){
    return <Loader/>
  }

  if(user && isAdmin){
    return children;
  }
  return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminonlyRoutes;