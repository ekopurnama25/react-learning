import React from "react";
import { Link } from "react-router-dom";
import Coffe from "/assert/landing_page/coffe4.jpg";
import { useState } from "react";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleNav = () => {
    setOpenNavbar(!openNavbar);
    console.log(openNavbar);
  };

  return (
    <>
      <nav className="flex py-1 mx-auto justify-around shadow-lg items-center">
        <div className="flex flex-col justify-between items-center max-w-5xl w-full sm:flex sm:flex-row sm:px-12 sm:justify-between">
          <div className="flex justify-between w-full">
            <div className="p-1">
              <img className="w-[65x] h-[60px]" src={Coffe} alt="" />
            </div>
            <div className=" flex-col gap-y-1 min-[805px]:hidden block max-[800px]:m-5">
              <button
                onClick={handleNav}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!openNavbar ? (
                  <>
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>

                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                    <svg
                      className="hidden h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>

                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <svg
                      className="hidden h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </>
                )}
              </button>
              {/* <span className="w-8 h-[5px] bg-[#374151] rounded-full"></span>
          <span className="w-8 h-[5px] bg-[#374151] rounded-full"></span>
          <span className="w-8 h-[5px] bg-[#374151] rounded-full"></span> */}
            </div>
          </div>

          <div className="flex-row items-center lg:flex max-[800px]:hidden">
            <ul className="flex flex-row p-1 gap-x-8">
              <Link
                className="font-sans font-bold text-[#4b5563]   
              hover:text-[#eab308] hover:duration-300 cursor-pointer"
                to="/"
              >
                Home
              </Link>
              <Link
                className="font-sans font-bold text-[#4b5563]   
              hover:text-[#eab308] hover:duration-300 cursor-pointer"
                to="/product"
              >
                Product
              </Link>
              <Link
                className="bg-[#1e40af] text-white h-7 w-20 text-center rounded-full font-medium font-sans shadow-lg"
                to="/login"
              >
                <p className="items-center">Login</p>
              </Link>
              <Link
                className="bg-[#991b1b] text-white h-7 w-24 text-center rounded-full items-center font-sans font-medium shadow-lg"
                to="/regist"
              >
                Registrasi
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={
          openNavbar
            ? "flex justify-between bg-[#f3f4f6] w-full rounded-b-xl absolute z-10"
            : "hidden"
        }
      >
        {/* Mobile Navigation Items */}
        <div className="flex mx-auto w-full justify-around flex-row p-4 ">
          <div className="flex flex-col space-y-5">
            <Link
              className="flex mx-auto font-sans font-bold text-[#4b5563] 
              hover:text-[#eab308] hover:duration-300 cursor-pointer"
              to="/"
            >
              Home
            </Link>
            <Link
              className="flex mx-auto font-sans font-bold text-[#4b5563]   
              hover:text-[#eab308] hover:duration-300 cursor-pointer"
              to="/product"
            >
              Product
            </Link>
            <Link
              className="flex mx-auto bg-[#1e40af] text-white h-7 w-20 justify-center rounded-full font-medium font-sans shadow-lg"
              to="/login"
            >
              <p className="items-center">Login</p>
            </Link>
            <Link
              className="flex mx-auto bg-[#991b1b] text-white h-7 w-24 justify-center rounded-full font-sans font-medium shadow-lg"
              to="/regist"
            >
              Registrasi
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
