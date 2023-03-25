import { useState, useEffect } from "react";
import microscope from "../assets/microscope.jpg";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";

const SectionOne = () => {
  const [text, setText] = useState(true);

  useEffect(() => {
    setText(false);
  }, []);

  return (
    <section
      className="section-one"
      // style={{ backgroundImage: `url(${microscope})` }}
    >
      <div className="image">
        <LazyLoadImage
          alt="microscope"
          effect="blur"
          src={microscope}
          height="100%"
          width="100%"
        />
      </div>
      <div className={`${text ? "text translated" : "text"}`}>
        <h3>
          Cutting-edge molecular
          <br /> lab solutions.
        </h3>
        <p>
          Provide innovative, timely, and quality medical diagnostics services.{" "}
        </p>
      </div>
    </section>
  );
};

export default SectionOne;
