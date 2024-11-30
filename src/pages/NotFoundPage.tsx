import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-5xl font-bold text-zinc-400 tracking-wide">
      <Link to={"/"} >404 Not Found</Link>
    </div>
  );
}
