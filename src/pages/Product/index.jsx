import React, { useContext, useEffect } from "react";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import Coffe_Sidebar from "/assert/landing_page/sid_coffe.png";
import CoffeContext from "../../context/CoffeContext";

const Product = () => {
  useDocumentTitle("Product");
  const { cofeepublic, getAllCoffePublic } = useContext(CoffeContext);

  //console.log(cofeepublic);
  useEffect(() => {
    getAllCoffePublic();
  }, []);
  return (
    <section className="mx-auto">
      <div className="flex justify-around items-center bg-[#f59e0b]">
        <div className="flex flex-row bg-[#f59e0b] h-16">
          <div className="flex flex-row items-center bg-[#f59e0b] w-[920px] h-16">
            <div className="flex m-4 w-full">
              <input
                className="shadow appearance-none border bg-[#e2e8f0] rounded w-full max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Searching"
              />
            </div>
            <div className="flex m-4">
              <button className="bg-[#e11d48] text-white  w-24 text-center rounded h-[40px] items-center font-sans font-medium shadow-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around mx-auto max-[780px]:w-full max-w-5xl">
        <div className="flex flex-row">
          <div className="grid grid-cols-4 gap-4 justify-between w-[920px]">
            {cofeepublic &&
              cofeepublic.map((value) => {
                return (
                  <div
                    key={value.id}
                    className="flex flex-col m-4 bg-[#e2e8f0] h-[250px] rounded-lg shadow-lg"
                  >
                    <div className="flex justify-center m-3 h-[120px]">
                      <img
                        className="w-full h-full"
                        src={value?.UrlImageCoffe}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center mt-4 font-bold">
                      {value?.JenisCoffe}
                    </div>
                    <div className="flex justify-center mt-2 text-red-800">
                      {value?.HargaCoffe}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
