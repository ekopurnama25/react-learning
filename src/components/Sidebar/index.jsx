import React from "react";
import Coffe_Sidebar from "/assert/landing_page/sid_coffe.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <div className="w-full mt-2">
        <div className="flex justify-center">
          <img className="w-[135px] h-[126px]" src={Coffe_Sidebar} alt="" />
        </div>
        <div className="flex p-4">
          <ul>
            <li className="m-4">
              <Link
                className="font-bold text-[18px] text-[#475569]"
                to="/home/admin"
              >
                <div className="flex flex-row">
                  <div className="px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  Dashboard
                </div>
              </Link>
            </li>
            <li className="m-4">
              <Link
                className="font-bold text-[18px] text-[#475569]"
                to="/coffe/admin"
              >
                <div className="flex flex-row">
                  <div className="px-3">
                    <svg
                      width="27"
                      height="30"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 6h10a1 1 0 0 1 1 1v8a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4v-8a1 1 0 0 1 1 -1" />{" "}
                      <path d="M16 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2" />
                    </svg>
                  </div>
                  Coffe
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
