import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import "./index.css";
import HomeAdmin from "./pages/Admin/Homes";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Login/index.jsx";
import Profile from "./pages/Profile/index.jsx";
import Registrasi from "./pages/Registrasi/index.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/regist",
    element: <Registrasi />,
  },
  {
    element: <Dashboard />,
    children: [
      {
        path: "/home/admin",
        element: <HomeAdmin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
