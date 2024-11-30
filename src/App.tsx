import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}
