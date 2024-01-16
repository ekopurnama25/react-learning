import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, allowRoles }) => {
  const { isAuthorization, UsersCheckHome, usersCheck } =
    useContext(AuthContext);

  //   console.log(isAuthorization, "yes");
  console.log(usersCheck, "cek");
  let navigate = useNavigate();

  useEffect(() => {
    UsersCheckHome(isAuthorization?.AccessToken);
  }, []);
  //   const userHasRequired =
  //     isAuthorization && allowRoles.includes(isAuthorization) ? true : false;

  //   console.log(userHasRequired);
  useEffect(() => {
    if (!isAuthorization) {
      return navigate("/login");
    }
  });

  // else if (!user && userHasRequired)
  //   return <Navigate to="/login" replace={true} />;

  return children;

  return children;
};

export default PrivateRoute;
