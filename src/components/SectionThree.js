import React from "react";
import { Link } from "react-router-dom";
import { FaDisease } from "react-icons/fa";
import { MdOutlineImageSearch } from "react-icons/md";
import { TbVirusSearch } from "react-icons/tb";
import { GoPackage } from "react-icons/go";

const SectionThree = () => {
  return (
    <section className="services" id="team">
      <h1>Services</h1>
      <div className="center">
        <div className="item-center">
          <div className="item">
            <h2>
              <span>
                <FaDisease />
              </span>{" "}
              Pathology
            </h2>
            <ul>
              <li>Hematology</li>
              <li>Clinical chemistry</li>
              <li>
                {/* <Link to="/services" className="read-more">
                  <a href="/services#test">Read more...</a>
                </Link> */}
                <a href="/services#test">read more</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item-center">
          <div className="item">
            <h2>
              <span>
                <MdOutlineImageSearch />
              </span>{" "}
              Imaging
            </h2>
            <ul>
              <li>X-Ray</li>
              <li>ECG</li>
              <li>
                <Link to="/services#Imaging" className="read-more">
                  Read more...
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="item-center">
          <div className="item">
            <h2>
              <span>
                <TbVirusSearch />
              </span>{" "}
              Other Investigations
            </h2>
            <ul>
              <li>Spirometry</li>
              <li>Audiometry</li>
              <li>
                <Link to="/services" className="read-more">
                  Read more...
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="item-center">
          <div className="item">
            <h2>
              <span>
                <GoPackage />
              </span>{" "}
              Healthcare Packages
            </h2>
            <ul>
              <li>Individual Health Checks</li>
              <li>Occupational Health Screenings</li>
              <li>
                <Link to="/services" className="read-more">
                  Read more...
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
