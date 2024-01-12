import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, allowRoles }) => {
  const { isAuthorization, UsersCheckHome, usersCheck } =
    useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    UsersCheckHome(isAuthorization?.accsesToken);
  }, []);
  const userHasRequired =
    isAuthorization && allowRoles.includes(isAuthorization?.roles)
      ? true
      : false;

  useEffect(() => {
    if (!isAuthorization) {
      return navigate("/login");
    }

    if (isAuthorization && !userHasRequired) {
      return navigate("/login");
    }
  });

  return children;
};

export default PrivateRoute;
