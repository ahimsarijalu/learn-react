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
import { Toaster } from "./components/ui/toaster.tsx";
import CameraPage from "./pages/CameraPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import StatisticPage from "./pages/StatisticPage.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import IndexDB from "./pages/IndexDB.tsx";
import FileUpload from "./pages/FileUpload.tsx";
import Laravel from "./pages/LaravelPage.tsx";
import AuthPage from "./pages/auth/AuthPage.tsx";
import BookDetailPage from "./pages/BookDetail.tsx";

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
        path: "/auth",
        element: <Navigate to="/auth/register" replace />,
      },
      {
        path: "/auth/register",
        element: <AuthPage destination="register" />,
      },
      {
        path: "/auth/login",
        element: <AuthPage destination="login" />,
      },

      {
        path: "/camera",
        element: <CameraPage />,
      },
      {
        path: "/indexdb",
        element: <IndexDB />,
      },
      {
        path: "/file",
        element: <FileUpload />,
      },
      {
        path: "/laravel",
        element: <Laravel />,
      },
      {
        path: "/book/:id",
        element: <BookDetailPage />,
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
