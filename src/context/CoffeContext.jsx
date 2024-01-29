import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/useAxios";

const CoffeContext = createContext({});

const config = {
  headers: { "content-type": "multipart/form-data" },
};

export const CoffeProvider = ({ children }) => {
  const [coffe, setCoffe] = useState();
  const [getcoffe, setGetCoffe] = useState();
  const [cofeepublic, setCoffePublic] = useState();
  const getAllCoffe = async () => {
    try {
      const coffe = await axiosInstance.get("/coffe");
      setCoffe(coffe.data.coffe);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCoffePublic = async () => {
    try {
      const getcoffepublic = await axiosInstance.get("/getcoffepublic");
      setCoffePublic(getcoffepublic.data.coffe);
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
      if (Deletecoffe) {
        const Delete = coffe.filter((x) => x.id !== id);
        setCoffe(Delete);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const GetIdCoffeData = async (id) => {
    try {
      const GetIdCoffe = await axiosInstance.get(`/coffe/${id}`);
      //console.log(GetIdCoffe.data.data);
      setGetCoffe(GetIdCoffe.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const PutCoffeUpdate = async (id, data) => {
    try {
      const putCoffeData = await axiosInstance.post(
        `/coffe/${id}`,
        data,
        config
      );
      console.log("update", putCoffeData);
    } catch (error) {
      console.log(error);
    }
  };
  let contextCoffe = {
    coffe: coffe,
    getcoffe: getcoffe,
    cofeepublic: cofeepublic,
    getAllCoffe,
    PostCoffeCreate,
    DeleteCoffeData,
    GetIdCoffeData,
    getAllCoffePublic,
    PutCoffeUpdate,
  };

  return (
    <CoffeContext.Provider value={contextCoffe}>
      {children}
    </CoffeContext.Provider>
  );
};

export default CoffeContext;
