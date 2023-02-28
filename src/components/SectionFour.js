import React, { useState } from "react";
import { faqData } from "../utils/data";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const SectionFour = () => {
  const [isAccordion, setIsAccordion] = useState(null);

  const toggle = (value) => {
    if (isAccordion === value) {
      setIsAccordion(null);
      return;
    }
    setIsAccordion(value);
  };

  return (
    <section className="section-four">
      <h1>FAQ</h1>
      <div className="center">
        {faqData.map((item) => {
          const { id, question, answer } = item;
          return (
            <div className={`${isAccordion === id ? "item active" : "item"}`}>
              <div className="question" onClick={() => toggle(id)}>
                <p>
                  {question}{" "}
                  {isAccordion === id ? (
                    <AiOutlineMinusCircle />
                  ) : (
                    <AiOutlinePlusCircle />
                  )}
                </p>
              </div>
              <div className="answer">
                <p>{answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionFour;
