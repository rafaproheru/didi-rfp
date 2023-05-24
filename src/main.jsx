import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Consulta from "./pages/Consulta.jsx";
import DetailUser from "./pages/DetailUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/consulta",
    element: <Consulta />,
  },
  {
    path: "/estadisticas",
    element: <Consulta />,
  },
  {
    path: "/reportes",
    element: <Consulta />,
  },
  {
    path: "/generar-certificados",
    element: <Consulta />,
  },
  {
    path: "/permisos",
    element: <Consulta />,
  },
  {
    path: "/detail-user",
    element: <DetailUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
