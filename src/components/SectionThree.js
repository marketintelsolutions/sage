import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineImageSearch } from "react-icons/md";
import { TbVirusSearch } from "react-icons/tb";
import { GoPackage } from "react-icons/go";
import { BiTestTube } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";

const SectionThree = () => {
  const navigate = useNavigate();

  return (
    <section className="services" id="team">
      <h1>Services</h1>
      <div className="center">
        <div className="item-center">
          <div className="item">
            <h2>
              <span>
                <BiTestTube />
              </span>{" "}
              Pathology
            </h2>
            <ul>
              <li>Hematology</li>
              <li>Clinical chemistry</li>
              <li
                onClick={() => {
                  navigate("/services", { state: { targetId: 1 } });
                }}
              >
                <p className="read-more">
                  read more <BsArrowRightShort />
                </p>
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
              <li
                onClick={() => {
                  navigate("/services", { state: { targetId: 2 } });
                }}
              >
                <p className="read-more">
                  read more <BsArrowRightShort />
                </p>
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
              <li
                onClick={() => {
                  navigate("/services", { state: { targetId: 3 } });
                }}
              >
                <p className="read-more">
                  read more <BsArrowRightShort />
                </p>
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
              <li
                onClick={() => {
                  navigate("/services", { state: { targetId: 4 } });
                }}
              >
                <p className="read-more">
                  read more <BsArrowRightShort />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
