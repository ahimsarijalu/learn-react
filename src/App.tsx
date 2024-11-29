import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground m-8 sm:m-0">
      <Navbar />
      <div className="py-4"></div>
      <Outlet />
    </div>
  );
}
