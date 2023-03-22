import React, { useEffect, useState } from "react";
import FaqSearch from "../components/FaqSearch";
import SectionFour from "../components/SectionFour";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";
import { faqData } from "../utils/data";

const Home = () => {
  const questions = faqData.map((item) => item.question);

  const newData = questions.slice(0, 4);
  const [faqSearch, setFaqSearch] = useState("");
  const [searchData, setSearchData] = useState(newData);

  useEffect(() => {
    if (faqSearch) {
      const match = questions.map((item) =>
        item.toLowerCase().match(faqSearch)
      );
      // .filter((i) => i !== null);
      const data = match.map((item) => item?.input).slice(0, 5);
      // console.log(match);
      const check = data.filter((item) => item !== undefined);
      if (check.length > 0) {
        console.log(check);
        setSearchData(data);
      } else {
        console.log("hellod");
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
      <FaqSearch
        setFaqSearch={setFaqSearch}
        faqSearch={faqSearch}
        searchData={searchData}
      />
    </>
  );
};

export default Home;
