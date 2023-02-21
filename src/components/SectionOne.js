import React from "react";
import microscope from "../assets/microscope.jpg";

const SectionOne = () => {
  return (
    <section
      className="section-one"
      style={{ backgroundImage: `url(${microscope})` }}
    >
      <div className="text">
        <h3>Cutting-edge molecular lab solutions.</h3>
        <p>
          Provide innovative, timely, and quality medical diagnostics services.{" "}
        </p>
      </div>
    </section>
  );
};

export default SectionOne;
