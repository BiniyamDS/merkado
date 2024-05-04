import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoutes = () => {
  const {currentUser} = useAuth()

  return <div>{currentUser ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoutes;
