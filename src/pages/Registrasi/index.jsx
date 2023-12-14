import React from "react";
import Cooffe_Footer from "/assert/landing_page/coffe_login.jpg";
import { Link } from "react-router-dom";

const Registrasi = () => {
  return (
    <div className="mx-auto">
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
      <div className="flex items-stretch bg-grey-lighter min-h-screen bg-[#000000]">
        <section className="flex justify-around w-full h-full">
          <div className="flex flex-col items-center">
            <div className="m-1">
              <div className="flex flex-col items-center w-[400px] h-[500px] rounded-t-lg">
                <img
                  className="w-[110px] h-[120px] shadow-xl"
                  src={Cooffe_Footer}
                  alt=""
                />
                <h1 className="font-bold text-2xl text-[#ffffff] text-justify">
                  REGISTRASI
                </h1>
                <form>
                  <div className="mt-1">
                    <label className="block text-white text-sm font-bold mb-2 ">
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mt-1">
                    <label className="block text-white text-sm font-bold mb-2 ">
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mt-1">
                    <label className="block text-white text-sm font-bold mb-2 ">
                      No.Hp
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="mo_hp"
                      type="email"
                      placeholder="No.Hp"
                    />
                  </div>
                  <div className="mt-1">
                    <label className="block text-white text-sm font-bold mb-2 ">
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="passwword"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex mt-6 justify-end">
                    <button className="bg-[#b91c1c] w-32 h-10 text-white font-bold rounded-lg">
                      Registrasi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registrasi;
