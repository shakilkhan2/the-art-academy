import { useContext } from "react";
import { AuthContext } from "../providers/authProvider/AuthProvider";
import { Navigate } from "react-router-dom";

// TODO: is't working properly, have to fix bug

const PrivateRoutes = ({children}) => {
  const {user} = useContext(AuthContext);
  console.log(user);
  if(user){
    return children;
  }
  return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;