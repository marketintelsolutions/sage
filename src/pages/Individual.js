import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { individual } from "../assets/images";
import { individualData } from "../utils/packagesData";

const Individual = () => {
  const [text, setText] = useState(true);

  useEffect(() => {
    window.scroll(0, 0);
    setText(false);
  }, []);
  return (
    <section className="individual">
      <div
        className={`${text ? "top translated" : "top"}`}
        // style={{ backgroundImage: `url(${individual})` }}
      >
        <div className="image">
          <LazyLoadImage
            alt="microscope"
            effect="blur"
            src={individual}
            height="100%"
            width="100%"
          />
        </div>
        <h1>Individual</h1>
      </div>

      <div className="content">
        <h2>Individual Health Packages</h2>
        <div className="packages">
          {individualData.map((item) => {
            const { name, items } = item;
            return (
              <div className="item">
                <h2>{name}</h2>
                {/* <h3>₦00,000</h3> */}
                <hr />
                <div className="text">
                  {items.map((text) => {
                    return (
                      <>
                        <p>{text}</p>
                        <hr />
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Individual;
