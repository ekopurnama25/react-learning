import React from "react";
import Cooffe_Footer from "/assert/landing_page/coffe_login.jpg";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../utils/useDocumentTitle";

const Registrasi = () => {
  useDocumentTitle("Registrasi");
  return (
    <div className="mx-auto ">
      <div className="bg-[#000000]">
        <div className="p-4">
          <div className="font-bold text-2xl text-[#ffffff] text-justify">
            <Link className="flex w-14" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <section className="flex items-stretch bg-grey-lighter min-h-screen max-[780px]:mx-auto max-[780px]:min-h-screen  bg-[#000000]">
        <div className="flex justify-around w-full mx-auto max-[780px]:w-full">
          <div className="flex flex-col items-center max-[780px]:w-full">
            <div className="m-2 w-full">
              <div className="flex flex-col min-[1000px]:items-center max-[780px]:w-full rounded-t-lg">
                <div className="flex flex-col items-center max-[780px]:items-center max-[780px]:w-full">
                  <img
                    className="w-[180px] h-[190px] shadow-xl max-[780px]:w-[100px] max-[780px]:h-[105px] "
                    src={Cooffe_Footer}
                    alt=""
                  />
                  <div className="flex justify-items-center">
                    <h1 className="font-bold text-2xl text-[#ffffff] justify-center text-justify">
                      DAFTAR
                    </h1>
                  </div>
                </div>
                <form>
                  <div className="mt-4 max-[780px]:flex max-[780px]:flex-col max-[780px]:w-full max-[780px]:p-2 mx-auto">
                    <label className="block text-white text-sm font-bold mb-2 ">
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[400px] max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mt-4 max-[780px]:mt-0 max-[780px]:flex max-[780px]:flex-col max-[780px]:w-full max-[780px]:p-2 mx-auto">
                    <label className="block text-white text-sm font-bold mb-2 ">
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[400px] max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mt-4 max-[780px]:mt-0 max-[780px]:flex max-[780px]:flex-col max-[780px]:w-full max-[780px]:p-2 mx-auto">
                    <label className="block text-white text-sm font-bold mb-2 ">
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[400px] max-[780px]:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex mt-6 justify-end max-[780px]:m-2">
                    <button className="bg-[#dc2626] w-32 h-10 text-white font-bold rounded-lg">
                      Daftar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registrasi;
