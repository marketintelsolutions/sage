import React from "react";
import { Link } from "react-router-dom";
import company from "../assets/company.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SectionTwo = () => {
  return (
    <section className="about-home" id="sectionTwo">
      {/* <h2>About us</h2> */}
      <div className="group">
        <div className="left">
          <h2>About Company</h2>
          <h4>The preferred and trusted medical diagnostics partner</h4>

          <p>
            Sage Diagnostics center is a full-fledged diagnostic center
            inclusive of a molecular lab center to service the growing demand
            for diagnostics both for occupational health safety and for medical
            diagnostics requirements to aid treatment.{" "}
          </p>
          <Link to="/about" className="read-more">
            <button>
              Read More <BsArrowRightShort />
            </button>
          </Link>
        </div>
        <div className="right">
          {/* <img src={company} alt="company" /> */}
          <div className="image">
            <LazyLoadImage
              src={company}
              alt="company"
              effect="blur"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
