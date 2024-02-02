import React, { useContext } from "react";
import { Outlet } from "react-router";
import AuthContext from "../../context/AuthContext";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { LogoutUsers } = useContext(AuthContext);
  let navigate = useNavigate();
  const Logout = () => {
    LogoutUsers();
    navigate("/login");
  };
  return (
    <div className="mx-auto">
      <div className="flex justify-between shadow-lg mx-auto h-full min-h-screen">
        <div className="flex flex-col basis-80 w-full shadow-md bg-[#2dd4bf]">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <nav className="shadow-md bg-[#ffff] py-4">
            <div className="flex felx-row mx-4">
              <div className="basis-1/2">
                <h1 className="font-bold text-2xl text-[#172554]">Dashboard</h1>{" "}
              </div>
              <div className="flex basis-1/2 justify-end">
                <button onClick={Logout}>
                  <h1 className="font-semibold text-[#3b82f6]">Logout</h1>
                </button>
              </div>
            </div>
          </nav>
          <Outlet />

          <footer className="bg-[#cbd5e1] py-4 sticky top-[100vh]">
            <div className="mx-4">
              <h1 className="text-[#172554] ">footer@tailwind.css</h1>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
