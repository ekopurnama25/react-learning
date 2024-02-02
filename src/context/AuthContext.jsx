import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/useAxios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuthorization, setAuth] = useState();
  const [usersCheck, setUsers] = useState();

  useEffect(() => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem("Token");
    if (userData) {
      setAuth(JSON.parse(userData));
    }
  }, []);

  const AuthWebCoffe = async (auth) => {
    try {
      const PostAuthorization = await axiosInstance.post("/auth/", {
        Email: auth.Email,
        Password: auth.Password,
      });
      localStorage.setItem("Token", JSON.stringify(PostAuthorization.data));
      setAuth(PostAuthorization?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const UsersCheckHome = async (data) => {
    try {
      const ChcekHomeUsers = await axiosInstance.get("/home", data);
      setUsers(ChcekHomeUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const LogoutUsers = async (data) => {
    try {
      const logout = await axiosInstance.post("/logout");
      localStorage.clear();
      setAuth(null);
      return logout;
    } catch (e) {
      console.log(e);
    }
  };

  let contextAuthorization = {
    isAuthorization: isAuthorization,
    usersCheck: usersCheck,
    UsersCheckHome,
    AuthWebCoffe,
    LogoutUsers,
  };

  return (
    <AuthContext.Provider value={contextAuthorization}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
