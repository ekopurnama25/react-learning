import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../../utils/useDocumentTitle";
import CoffeContext from "../../../context/CoffeContext";

const CoffeAdmin = () => {
  const { coffe, getAllCoffe, DeleteCoffeData } = useContext(CoffeContext);
  let navigate = useNavigate();
  useDocumentTitle("Add Coffe");
  console.log(coffe);
  const handleAddClik = () => {
    return navigate("/coffe/add_coffe");
  };

  const handleDeleteCoffe = (id) => {
    DeleteCoffeData(id);
  };

  useEffect(() => {
    getAllCoffe();
  }, []);

  return (
    <>
      <div className="p-8">
        <section className="w-full h-auto rounded mt-6">
          <section className="w-full h-auto  rounded-xl">
            <h1 className="pb-6 font-bold text-gray-400">Table Menu Coffe</h1>
            <div className="pb-6">
              <button
                onClick={handleAddClik}
                className="bg-[#f87171] w-32 h-8 text-white font-bold rounded-lg"
              >
                Add Coffe
              </button>
            </div>
            <div className="pb-6">
              <input
                className="shadow appearance-none border bg-[#f1f5f9] rounded w-full max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Searching"
              />
            </div>
          </section>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Coffe
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Harga
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Deskripsi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {coffe &&
                  coffe?.map((value, index) => {
                    return (
                      <tr
                        key={value?.id}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      >
                        <td className="px-6 py-4">{index + 1}</td>
                        <td scope="row" className="px-6 py-4">
                          <img src={value?.UrlImageCoffe} />
                        </td>
                        <td className="px-6 py-4"> {value?.JenisCoffe}</td>
                        <td className="px-6 py-4"> {value?.HargaCoffe}</td>
                        <td className="px-6 py-4">{value?.DescriptionCoffe}</td>
                        <td className="px-6 py-4">
                          <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Edit
                          </a>{" "}
                          |{" "}
                          <button
                            onClick={() => {
                              handleDeleteCoffe(value?.id);
                            }}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default CoffeAdmin;
