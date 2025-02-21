import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);
