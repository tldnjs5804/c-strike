import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useReveal } from "../hooks/useReveal";

export default function Layout() {
  useReveal();
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main key={pathname} className="animate-page-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
