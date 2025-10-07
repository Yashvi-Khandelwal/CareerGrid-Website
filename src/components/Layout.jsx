import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import "./Layout.css";

export const Layout = () => {
  return (
     <div className="layout-wrapper">
      <NavBar />
      <main className="layout-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};