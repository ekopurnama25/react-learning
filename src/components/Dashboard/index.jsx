import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../Sidebar";

const Dashboard = () => {
  return (
    <div className="mx-auto">
      <div className="flex justify-between shadow-lg mx-auto h-full min-h-screen">
        <div className="flex flex-col basis-80 w-full shadow-md bg-[#2dd4bf]">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <nav className="shadow-md bg-[#ffff] py-4">
            <div className="mx-4">
              <h1 className="font-bold text-2xl text-[#172554]">Dashboard</h1>
            </div>
          </nav>
          <Outlet />
          <footer>Footer</footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
