import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/useAxios";

const CoffeContext = createContext({});

export const CoffeProvider = ({ children }) => {
  const [coffe, setCoffe] = useState();

  const getAllCoffe = async () => {
    try {
      const coffe = await axiosInstance.get("/coffe");
      setCoffe(coffe.data.coffe);
      console.log(coffe.data.coffe);
    } catch (error) {
      console.log(error);
    }
  };

  let contextCoffe = {
    coffe: coffe,
    getAllCoffe,
  };

  return (
    <CoffeContext.Provider value={contextCoffe}>
      {children}
    </CoffeContext.Provider>
  );
};

export default CoffeContext;
