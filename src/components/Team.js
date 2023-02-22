import React from "react";
import {
  adedokun,
  nancy,
  claudius,
  oluwagbogo,
  osadugba,
} from "../assets/images";

const Team = () => {
  return (
    <section className="team" id="team">
      <h2>Team</h2>
      <div className="people">
        <div className="person">
          <img src={osadugba} alt="osadugba" />
          <h3 className="name">Olumide Osadugba </h3>
          <p className="role">CHIEF OPERATING OFFICER (COO) </p>
          <p className="company">SAGE </p>
        </div>
        <div className="person">
          <img src={claudius} alt="claudius" />
          <h3 className="name">Cladius Eromosele </h3>
          <p className="role">LABORATORY MANAGER </p>
          <p className="company">SAGE DIAGNOSTICS </p>
        </div>
        <div className="person">
          <img src={adedokun} alt="adedokun" />
          <h3 className="name">Adedokun Adedayo Adewunmi </h3>
          <p className="role">ACCOUNT MANAGER </p>
          <p className="company">SAGE DIAGNOSTICS </p>
        </div>
      </div>
      <div className="bottom">
        <div className="person">
          <img src={oluwagbogo} alt="oluwagbogo" />
          <h3 className="name">Dr. Oluwagbogo Christiana Oyebade </h3>
          <p className="role">MEDICAL OFFICER</p>
          <p className="company">SAGE DIAGNOSTICS</p>
        </div>
        <div className="person">
          <img src={nancy} alt="nancy" />
          <h3 className="name">Nancy Clement</h3>
          <p className="role">HR/ADMIN OFFICER</p>
          <p className="company">AFRILIFE</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
