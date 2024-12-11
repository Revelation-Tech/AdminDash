import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useValidate from "../hooks/useValidate";
import AppLayout from "../layouts/app";

const ProtectedRoutes = () => {
  const location = useLocation();

  // const { data, token } = useValidate();

  // if (!token && !data) return <Navigate to="/login" replace />;

  return (
    <AppLayout>
      <Outlet path={location.pathname} />
    </AppLayout>
  );
};

export default ProtectedRoutes;
