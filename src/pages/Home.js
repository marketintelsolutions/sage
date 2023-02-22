import React, { useEffect } from "react";
import SectionFour from "../components/SectionFour";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <SectionOne />
      {/* ABOUT */}
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
};

export default Home;
