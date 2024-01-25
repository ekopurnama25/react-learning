import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/useAxios";

const CoffeContext = createContext({});

const config = {
  headers: { "content-type": "multipart/form-data" },
};

export const CoffeProvider = ({ children }) => {
  const [coffe, setCoffe] = useState();
  const getAllCoffe = async () => {
    try {
      const coffe = await axiosInstance.get("/coffe");
      setCoffe(coffe.data.coffe);
    } catch (error) {
      console.log(error);
    }
  };

  const PostCoffeCreate = async (data) => {
    try {
      const postCoffeData = await axiosInstance.post("/coffe/", data, config);
      return [postCoffeData.data.data];
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteCoffeData = async (id) => {
    try {
      const Deletecoffe = await axiosInstance.delete(`/coffe/${id}`);
      //   const Delete = Deletecoffe.filter((x) => {
      //     return x.id !== id;
      //   });
      //   console.log(Delete);
      //   setCoffe(Delete);
    } catch (e) {
      console.log(e);
    }
  };
  let contextCoffe = {
    coffe: coffe,
    getAllCoffe,
    PostCoffeCreate,
    DeleteCoffeData,
  };

  return (
    <CoffeContext.Provider value={contextCoffe}>
      {children}
    </CoffeContext.Provider>
  );
};

export default CoffeContext;
