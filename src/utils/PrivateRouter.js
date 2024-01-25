import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, allowRoles }) => {
  const { isAuthorization, UsersCheckHome, usersCheck } =
    useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    UsersCheckHome(isAuthorization?.AccessToken);
  }, []);

  useEffect(() => {
    if (!isAuthorization) {
      return navigate("/login");
    }
  });

  return children;
};

export default PrivateRoute;
