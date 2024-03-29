import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import "./index.css";
import setupInterceptors from "./utils/setupinterceptor.js";
import CoffeAdmin from "./pages/Admin/Coffe";
import HomeAdmin from "./pages/Admin/Homes";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Login/index.jsx";
import Product from "./pages/Product/index.jsx";
import Registrasi from "./pages/Registrasi/index.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import PrivateRoute from "./utils/PrivateRouter.js";
import AddCooffeAdmin from "./pages/Admin/Coffe/AddCooffeAdmin.jsx";
import { CoffeProvider } from "./context/CoffeContext.jsx";
import EditCoffeAdmin from "./pages/Admin/Coffe/EditCoffeAdmin.jsx";
//import AddCoffe from "./pages/Admin/Coffe/AddCoffe.jsx";

setupInterceptors();
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
        element: (
          <PrivateRoute>
            <HomeAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "/coffe/admin",
        element: (
          <PrivateRoute>
            <CoffeAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "/coffe/add_coffe",
        element: (
          <PrivateRoute>
            <AddCooffeAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "/coffe/update_coffe/:id",
        element: (
          <PrivateRoute>
            <EditCoffeAdmin />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CoffeProvider>
        <RouterProvider router={router} />
      </CoffeProvider>
    </AuthProvider>
  </React.StrictMode>
);
