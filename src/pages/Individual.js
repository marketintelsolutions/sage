import React, { useEffect } from "react";
import { individual } from "../assets/images";
import { individualData } from "../utils/packagesData";

const Individual = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="individual">
      <div className="image" style={{ backgroundImage: `url(${individual})` }}>
        <h1>Individual</h1>
      </div>

      <div className="content">
        <h2>Health Packages</h2>
        <div className="packages">
          {individualData.map((item) => {
            const { name, items } = item;
            return (
              <div className="item">
                <h2>{name}</h2>
                <h3>₦00,000</h3>
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
