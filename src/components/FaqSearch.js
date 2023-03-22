import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { faqblue } from "../assets/images";
import { faqData } from "../utils/data";

const FaqSearch = ({ dropdown, setFaqSearch, faqSearch, searchData }) => {
  const navigate = useNavigate();

  const [isQuestions, setIsQuestions] = useState(false);
  // console.log(searchData);

  useEffect(() => {
    if (isQuestions === true && !faqSearch) {
      const timeout = setTimeout(() => {
        setIsQuestions(false);
      }, 6000);

      return () => clearTimeout(timeout);
    }
  }, [isQuestions, faqSearch]);

  return (
    <div
      className="faqtop"
      style={{ backgroundImage: `url(${faqblue})` }}
      onClick={(e) => {
        if (e.target.classList.contains("faqtop")) setIsQuestions(false);
      }}
    >
      <h1>Can we help you?</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Search"
          value={faqSearch}
          onChange={(e) => {
            setFaqSearch(e.target.value);
            setIsQuestions(true);
          }}
          onFocus={() => setIsQuestions(true)}
        />
        <span>
          <BiSearchAlt2 />
        </span>
        {isQuestions && (
          <div className="questions" onBlur={() => setIsQuestions(false)}>
            {searchData.map((item, index) => {
              if (item) {
                if (item === "Others") {
                  return (
                    <p
                      key={index}
                      onClick={() => {
                        navigate("/faq", { state: { targetId: "others" } });
                      }}
                    >
                      {item}
                    </p>
                  );
                }
                return (
                  <p
                    key={index}
                    onClick={() => {
                      navigate("/faq", { state: { targetId: index + 1 } });
                    }}
                  >
                    {item}
                  </p>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqSearch;
