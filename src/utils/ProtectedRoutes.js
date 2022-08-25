import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  console.log("USERSERSER", user)

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
