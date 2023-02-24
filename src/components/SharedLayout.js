import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PreNav from "./PreNav";

const SharedLayout = ({ children }) => {
  return (
    <>
      <PreNav />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default SharedLayout;
