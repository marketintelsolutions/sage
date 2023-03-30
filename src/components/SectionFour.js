import React, { useEffect, useState } from "react";
import { faqData } from "../utils/data";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const SectionFour = ({ targetId, data }) => {
  const [isAccordion, setIsAccordion] = useState(null);

  const toggle = (value) => {
    if (isAccordion === value) {
      setIsAccordion(null);
      return;
    }
    setIsAccordion(value);
    // setClassname("item");
  };

  useEffect(() => {
    if (targetId) {
      setIsAccordion(targetId);
    }
  }, [targetId]);

  return (
    <section className="section-four">
      <h1>FAQ</h1>
      <div className="center">
        {data.map((item) => {
          const { id, question, answer } = item;

          return (
            <div
              className={`${isAccordion === id ? "item active" : "item"}`}
              id={id}
              key={id}
            >
              <div className="question" onClick={() => toggle(id)}>
                <p>
                  {question}{" "}
                  <span>
                    {isAccordion === id ? (
                      <AiOutlineMinusCircle />
                    ) : (
                      <AiOutlinePlusCircle />
                    )}
                  </span>
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
