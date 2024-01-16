import React from "react";

import { Navigate } from "react-router-dom";

import { useDocumentTitle } from "../../../utils/useDocumentTitle";

const AddCooffeAdmin = () => {
  useDocumentTitle("Add Coffe");
  return (
    <>
      <div className="p-8">
        <section className="w-full h-auto rounded mt-6">
          <section className="w-full h-auto  rounded-xl">
            <h1 className="pb-6 font-bold text-gray-400">Tambah Menu Coffe</h1>
          </section>
        </section>
      </div>
    </>
  );
};

export default AddCooffeAdmin;
