import React from "react";
import { Link } from "react-router-dom";
import Coffe from "/assert/landing_page/coffe4.jpg";

const Navbar = () => {
  return (
    <div className="flex py-1 mx-auto justify-around shadow-lg items-center">
      <div className="flex flex-row justify-between items-center max-w-5xl w-full sm:flex sm:flex-row sm:px-12 sm:justify-between border-2 border-[#000]">
        <p className="p-1">
          <img className="w-[65x] h-[60px]" src={Coffe} alt="" />
        </p>
        <div className="md:flex md:flex-col sm:gap-y-1 md:gap-y-1">
          <span className="xl:hidden lg:hidden md:flex  md:w-8 md:h-[5px] md:rounded-full md:bg-[#374151] max-sm:flex max-sm:w-8 max-sm:h-[5px] max-sm:bg-[#374151]"></span>
          <span className="xl:hidden lg:hidden md:flex  md:w-8 md:h-[5px] md:rounded-full md:bg-[#374151] max-sm:flex max-sm:w-8 max-sm:h-[5px] max-sm:bg-[#374151]"></span>
          <span className="xl:hidden lg:hidden md:flex  md:w-8 md:h-[5px] md:rounded-full md:bg-[#374151] max-sm:flex max-sm:w-8 max-sm:h-[5px] max-sm:bg-[#374151]"></span>
        </div>
        <nav className="flex flex-row items-center lg:flex max-sm:hidden max-md:hidden">
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
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
