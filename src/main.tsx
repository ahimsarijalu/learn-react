import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import InvoicePage from "./pages/InvoicePage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import CameraPage from "./pages/CameraPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import StatisticPage from "./pages/StatisticPage.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
        children: [
          {
            path: "",
            element: <Navigate to="/dashboard/statistic" replace />,
          },
          {
            path: "invoice",
            element: <InvoicePage />,
          },
          {
            path: "statistic",
            element: <StatisticPage />,
          },
        ],
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/camera",
        element: <CameraPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    <Toaster />
  </StrictMode>
);
