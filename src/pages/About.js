import React, { useEffect } from "react";
import items from "../assets/items.jpg";
import Team from "../components/Team";
import { RiCustomerService2Fill, RiScalesFill } from "react-icons/ri";
import { TbHeartHandshake, TbBulb } from "react-icons/tb";
import { CiDumbbell } from "react-icons/ci";
import { FaPeopleCarry } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="about">
        <div className="top" style={{ backgroundImage: `url(${items})` }}>
          <h3> Improving health & wellness, impacting lives.</h3>
          <p>Cutting-Edge Molecular Lab Solutions.</p>
        </div>
        <div className="group">
          <div className="center">
            <h3>What Drives Us</h3>
            <p>
              Sage Diagnostics center is a full-fledged diagnostic center
              inclusive of a molecular lab center to service the growing demand
              for diagnostics both for occupational health safety and for
              medical diagnostics requirements to aid treatment.{" "}
            </p>
          </div>
          <div className="center">
            <h3>Vision</h3>
            <p>
              The preferred and trusted medical diagnostics partner — improving
              health & wellness, impacting lives.
            </p>
          </div>
          <div className="center">
            <h3>Mission</h3>
            <p>
              Provide innovative, timely, and quality medical diagnostics
              services.{" "}
            </p>
          </div>
          <div className="center values">
            <h3>Core values</h3>
            <ul>
              <li>
                <span>
                  <RiCustomerService2Fill />
                </span>{" "}
                Services
              </li>
              <li>
                <span>
                  <TbHeartHandshake />
                </span>{" "}
                Professionalism
              </li>
              <li>
                <span>
                  <CiDumbbell />
                </span>{" "}
                Integrity
              </li>
              <li>
                <span>
                  <RiScalesFill />
                </span>{" "}
                Respect
              </li>
              <li>
                <span>
                  <TbBulb />
                </span>{" "}
                Innovation
              </li>
              <li>
                <span>
                  <FaPeopleCarry />
                </span>{" "}
                Team Spirit
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Team />
      <section className="value-proposition">
        <h1>Value Propositions</h1>
        <div className="values">
          <div className="value">
            <span>1</span>
            <p>Quick Turnaround Time</p>{" "}
          </div>
          <div className="value">
            <span>2</span>
            <p>Online reporting </p>{" "}
          </div>
          <div className="value">
            <span>3</span>
            <p>Dispatch services/Home service </p>{" "}
          </div>
          <div className="value">
            <span>4</span>
            <p>Follow up services </p>{" "}
          </div>
        </div>
      </section>
      <section className="service-offering">
        <h1>Service offering</h1>
        <div className="center">
          <div className="item">
            <p>
              Comprehensive wellness packages: Occupational Health screenings
              (Annual Health Checks, Fit To Fly tests, Medical Fitness Tests
              etc)
            </p>
          </div>
          <div className="item">
            <p>
              Comprehensive laboratory, Basic Imaging, Other complimentary tests
            </p>
          </div>
          <div className="item">
            <p>Specialized PCR Tests</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
