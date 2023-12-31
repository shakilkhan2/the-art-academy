import { useContext } from "react";
import { AuthContext } from "../providers/authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/loader/Loader";

// TODO: is't working properly, have to fix bug

const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <Loader/>
  }

  if(user){
    return children;
  }
  return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;