import React from "react";

const NavbarResponsive = ({ openNavbar }) => {
  console.log(openNavbar);
  return (
    <>
      <ul
        className={
          openNavbar
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        {/* Mobile Navigation Items */}
        <li className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
          OKOK
        </li>
      </ul>
    </>
  );
};

export default NavbarResponsive;
