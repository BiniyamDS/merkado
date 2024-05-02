import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  return <div>{false ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoutes;
