import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import "./index.css";
import CoffeAdmin from "./pages/Admin/Coffe";
import HomeAdmin from "./pages/Admin/Homes";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Login/index.jsx";
import Product from "./pages/Product/index.jsx";
import Registrasi from "./pages/Registrasi/index.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

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
        element: <Product />,
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
      {
        path: "/coffe/admin",
        element: <CoffeAdmin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
