import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { individual } from "../assets/images";
import { conventionalPackages, individualData } from "../utils/packagesData";

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
        <h2>Conventional Individual Packages</h2>
        <div className="packages">
          {conventionalPackages.map((item, index) => {
            const { name, tests, price } = item;
            return (
              <div className="item" key={index}>
                <h2>{name}</h2>
                {price ? <h3>₦{price}</h3> : <h3>₦---,---</h3>}
                <hr />
                <div className="text">
                  {tests.map((text, index) => {
                    return (
                      <div key={index}>
                        <p>{text}</p>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="content">
        <h2>Specialised Individual Packages</h2>
        <div className="packages">
          {individualData.map((item) => {
            const { name, items, price } = item;
            return (
              <div className="item">
                <h2>{name}</h2>
                {price ? <h3>₦{price}</h3> : <h3>₦---,---</h3>}
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
