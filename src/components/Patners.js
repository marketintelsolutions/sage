import React, { useEffect, useState } from "react";
import { partners } from "../utils/partners";

const Patners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let interval = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === partners.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex, interval, partners.length]);

  return (
    <section className="patners">
      <div className="left">
        <h2>
          We work with the <br /> best partners
        </h2>
        <p>
          While we are at the forefront and specialize in diagnostics services,
          we are very familiar with a number of test methods and are confident
          we can find the service that will best help you meet your
          expectations.
        </p>
      </div>
      <div className="right">
        <div className="images">
          {/* {partners.map((partner, index) => {
            return (
              <div key={index} className="partner">
                <img src={partner.img} alt="partner logo" />
              </div>
            );
          })} */}
          <img src={partners[currentIndex].img} alt={`Slide ${currentIndex}`} />
        </div>
      </div>
    </section>
  );
};

export default Patners;
