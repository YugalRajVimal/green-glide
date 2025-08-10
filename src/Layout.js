import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import NewFooter from "./Components/New/NewFooter";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
      <NewFooter />
    </div>
  );
};

export default Layout;
