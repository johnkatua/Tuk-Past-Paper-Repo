import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import "./index.css";

const Layout = ({ children }) => {
  return (
    <div className="layout--container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
