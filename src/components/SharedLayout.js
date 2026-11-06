import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PreNav from "./PreNav";

import { ReactComponent as logo } from "../assets/logos/logo-icon.svg";

import { WhatsAppWidget } from "react-whatsapp-widget";
import Greeting from "./Greeting";

const SharedLayout = ({ children }) => {
  const [greetOpen, setGreetOpenState] = React.useState(false);

  // Show the welcome popup once per browser session, after the hero has had
  // a moment to render, instead of covering the page immediately.
  React.useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("sage-greeted") === "1";
    } catch (e) {}
    if (seen) return;
    const t = setTimeout(() => setGreetOpenState(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const setGreetOpen = React.useCallback((open) => {
    setGreetOpenState(open);
    if (!open) {
      try {
        sessionStorage.setItem("sage-greeted", "1");
      } catch (e) {}
    }
  }, []);

  return (
    <>
      {greetOpen && (
        <Greeting greetOpen={greetOpen} setGreetOpen={setGreetOpen} />
      )}
      <PreNav />
      <Navbar />
      {children}
      <Footer />
      <div className="whatsapp-widget">
        <WhatsAppWidget
          CompanyIcon={logo}
          companyName="Sage Diagnostics"
          message="Hello, how can we help you today?"
          phoneNumber="+2348141786966"
        />
      </div>
    </>
  );
};

export default SharedLayout;
