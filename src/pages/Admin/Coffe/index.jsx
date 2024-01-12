import React from "react";

import Img_Dashboard from "/assert/landing_page/img_dash.png";

import { useDocumentTitle } from "../../../utils/useDocumentTitle";

const CoffeAdmin = () => {
  useDocumentTitle("Coffe Admin");
  return (
    <>
      <div className="p-8">
        <section className="w-full h-auto  rounded-xl">
          <input
            className="shadow appearance-none border bg-[#e2e8f0] rounded w-full max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Searching"
          />
        </section>

        <section className="w-full h-auto rounded mt-6 bg-[#e2e8f0]">
          <h1>Table Menu Coffe</h1>
        </section>
      </div>
    </>
  );
};

export default CoffeAdmin;
