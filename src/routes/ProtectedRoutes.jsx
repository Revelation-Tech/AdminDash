import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useValidate from "../hooks/useValidate";

const ProtectedRoutes = () => {
  const location = useLocation();

  const { data, token } = useValidate();

  if (!token && !data) return <Navigate to="/login" replace />;

  return <Outlet path={location.pathname} />;
};

export default ProtectedRoutes;
