import React from "react";
import Cooffe_Footer from "/assert/landing_page/coffe_login.jpg";
import { Link } from "react-router-dom";
const Login = () => {
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
      <div className="flex items-stretch bg-grey-lighter min-h-screen max-[780px]:mx-auto max-[780px]:w-full  bg-[#000000] max-[780px]:border-2 max-[780px]:border-[#000]">
        <section className="flex justify-around w-full mx-auto max-[780px]:w-full  h-full">
          <div className="flex flex-col items-center ">
            <div className="m-2">
              <div className="flex flex-col items-center w-[400px] h-[500px] rounded-t-lg max-[780px]:border-2 max-[780px]:border-[#000]">
                <img
                  className="w-[180px] h-[190px] shadow-xl max-[780px]:w-[100px] max-[780px]:h-[105px] "
                  src={Cooffe_Footer}
                  alt=""
                />
                <h1 className="font-bold text-2xl text-[#ffffff] text-justify">
                  LOGIN
                </h1>
                <form>
                  <div className="mt-4 max-[780px]:w-full mx-auto max-[780px]:border-2 max-[780px]:border-[#000]">
                    <label className="block text-white text-sm font-bold mb-2 ">
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[400px] max-[780px]:w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-white text-sm font-bold mb-2 ">
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border max-[780px]:w-24 rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className=" flex mt-6 justify-end">
                    <button className="bg-[#1e40af] w-32 h-10 text-white font-bold rounded-lg">
                      Login
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

export default Login;
