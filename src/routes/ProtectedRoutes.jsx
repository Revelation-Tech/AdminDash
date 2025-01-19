import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useValidate from "../hooks/useValidate";
import AppLayout from "../layouts/app";

const ProtectedRoutes = () => {
  const location = useLocation();


  const { data, isLoading, token, error } = useValidate();

  if (!data && !token) return <Navigate to="/" />;

  return (
    <AppLayout>
      <Outlet path={location.pathname} />
    </AppLayout>
  );
};

export default ProtectedRoutes;
