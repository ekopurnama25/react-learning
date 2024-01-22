import React from "react";

import { Navigate } from "react-router-dom";

import { useDocumentTitle } from "../../../utils/useDocumentTitle";

const AddCooffeAdmin = () => {
  useDocumentTitle("Add Coffe");

  const SumbitFormCoffe = () => {
    try {
      console.log("ok");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="p-8">
        <section className="w-full h-auto rounded mt-6">
          <section className="w-full h-auto  rounded-xl">
            <h1 className="pb-6 font-bold text-gray-400">Tambah Menu Coffe</h1>
          </section>
          <section className="w-full h-auto  rounded-xl bg-gray-200">
            <form onSubmit={SumbitFormCoffe}>
              <div className="m-4 p-6">
                <div className="pb-4">
                  <p className="pb-2">Name Coffe</p>
                  <input
                    className="shadow appearance-none border bg-[#f1f5f9] rounded w-full max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Nama Coffe ..."
                  />
                </div>
                <div className="pb-4">
                  <p className="pb-2">Harga Coffe</p>
                  <input
                    className="shadow appearance-none border bg-[#f1f5f9] rounded w-full max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="number"
                    placeholder="Harga Coffe ..."
                  />
                </div>
                <div className="pb-4">
                  <p className="pb-2">Upload Image</p>
                  <input
                    className="shadow appearance-none border bg-[#f1f5f9] rounded w-full max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="file"
                    placeholder="Harga Coffe ..."
                  />
                </div>
                <div className="pb-4">
                  <p className="pb-2">Deskripsi</p>
                  <textarea
                    className="shadow appearance-none border bg-[#f1f5f9] rounded w-full max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="file"
                    placeholder="Harga Coffe ..."
                  />
                </div>
                <div className="pb-4">
                  <button className="bg-[#0ea5e9] w-32 h-8 text-white font-bold rounded-lg">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </section>
      </div>
    </>
  );
};

export default AddCooffeAdmin;
