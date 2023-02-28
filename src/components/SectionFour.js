import React, { useState } from "react";
import { faqData } from "../utils/data";

const SectionFour = () => {
  const [isAccordion, setIsAccordion] = useState(1);

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
                <p>{question}</p>
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
