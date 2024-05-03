import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  return <div>{true ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoutes;
