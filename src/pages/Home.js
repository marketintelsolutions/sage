import React, { useEffect, useState } from "react";
import FaqSearch from "../components/FaqSearch";
import Newsletter from "../components/Newsletter";
import Patners from "../components/Patners";
import SectionFour from "../components/SectionFour";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";
import { faqData } from "../utils/data";

const Home = () => {
  const questions = faqData.map((item) => item.question);

  // const newData = questions.slice(0, 5);
  const newData = questions;
  const [faqSearch, setFaqSearch] = useState("");
  const [searchData, setSearchData] = useState(newData);

  useEffect(() => {
    if (faqSearch) {
      const match = questions.map((item) =>
        item.toLowerCase().match(faqSearch.toLowerCase())
      );

      const data = match.map((item) => item?.input);
      const check = data.filter((item) => item !== undefined);

      if (check.length > 0) {
        setSearchData([...data, "Others"]);
      } else {
        console.log("hello");
        setSearchData(["Others"]);
      }
    } else {
      setSearchData(newData);
    }
  }, [faqSearch]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <SectionOne />
      {/* ABOUT */}
      <SectionTwo />
      <SectionThree />
      <Newsletter />
      <FaqSearch
        setFaqSearch={setFaqSearch}
        faqSearch={faqSearch}
        searchData={searchData}
      />
      <Patners />
    </>
  );
};

export default Home;
