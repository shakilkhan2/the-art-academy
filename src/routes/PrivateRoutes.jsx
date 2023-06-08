
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import Loader from "../components/shared/loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loader/>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoutes;