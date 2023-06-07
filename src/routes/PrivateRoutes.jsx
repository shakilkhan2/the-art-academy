
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/loading/Loading";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoutes;