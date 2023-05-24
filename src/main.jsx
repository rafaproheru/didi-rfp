import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Consulta from "./pages/Consulta.jsx";
import DetailUser from "./pages/DetailUser";
import GenerateCertificates from "./pages/GenerateCertificates";
import Admin from "./pages/Admin";
import Reportes from "./pages/Reportes";
import ReportDetail from "./pages/ReportDetail";

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
    element: <Reportes />,
  },
  {
    path: "/generar-certificados",
    element: <GenerateCertificates />,
  },
  {
    path: "/permisos",
    element: <Consulta />,
  },
  {
    path: "/detail-user",
    element: <DetailUser />,
  },
  {
    path: "/report-detail",
    element: <ReportDetail />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
