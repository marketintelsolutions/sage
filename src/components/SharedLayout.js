import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PreNav from "./PreNav";

import { ReactComponent as logo } from "../assets/logos/logo-icon.svg";

import { WhatsAppWidget } from "react-whatsapp-widget";

const SharedLayout = ({ children }) => {
  return (
    <>
      <PreNav />
      <Navbar />
      {children}
      <Footer />
      <div className="whatsapp-widget">
        <WhatsAppWidget
          CompanyIcon={logo}
          companyName="Sage Diagnostics"
          message="Hello, how can we help you today?"
          phoneNumber="+2348139289067"
        />
      </div>
    </>
  );
};

export default SharedLayout;
