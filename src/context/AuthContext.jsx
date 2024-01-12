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
      //console.log(data);
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
      const ChcekHomeUsers = await axiosInstance.post("/auth/home", {
        accsesToken: data,
      });
      console.log(ChcekHomeUsers);
      setUsers(ChcekHomeUsers);
    } catch (error) {
      console.log(error);
    }
  };

  let contextAuthorization = {
    isAuthorization: isAuthorization,
    usersCheck: usersCheck,
    UsersCheckHome,
    AuthWebCoffe,
  };

  return (
    <AuthContext.Provider value={contextAuthorization}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
