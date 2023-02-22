import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="section-two" id="sectionTwo">
        <h2>About us</h2>
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
          <div className="center">
            <h3>Core values</h3>
            <p>
              Services, Professionalism, Integrity, Respect, Innovation, Team
              Spirit
            </p>
          </div>
        </div>
      </section>
      <section className="section-three" id="team">
        <h2>Team</h2>
        <div className="people">
          <div className="person">
            <h3 className="name">Olumide Osadugba </h3>
            <p className="role">CHIEF OPERATING OFFICER (COO) </p>
            <p className="company">SAGE </p>
          </div>
          <div className="person">
            <h3 className="name">Cladius Eromosele </h3>
            <p className="role">LABORATORY MANAGER </p>
            <p className="company">SAGE DIAGNOSTICS </p>
          </div>
          <div className="person">
            <h3 className="name">Adedokun Adedayo Adewunmi </h3>
            <p className="role">ACCOUNT MANAGER </p>
            <p className="company">SAGE DIAGNOSTICS </p>
          </div>
          <div className="person">
            <h3 className="name">Dr. Oluwagbogo Christiana Oyebade </h3>
            <p className="role">MEDICAL OFFICER</p>
            <p className="company">SAGE DIAGNOSTICS</p>
          </div>
          <div className="person">
            <h3 className="name">Nancy Clement</h3>
            <p className="role">HR/ADMIN OFFICER</p>
            <p className="company">AFRILIFE</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
