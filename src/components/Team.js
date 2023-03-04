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
          <div
            className="image"
            style={{ backgroundImage: `url(${osadugba})` }}
          ></div>
          {/* <img src={osadugba} alt="osadugba" /> */}
          <h3 className="name">Olumide Osadugba </h3>
          <p className="role">Chief operating officer (C.O.O.) </p>
          <p className="company">SAGE </p>
        </div>
        <div className="person">
          <div
            className="image"
            style={{ backgroundImage: `url(${claudius})` }}
          ></div>
          {/* <img src={claudius} alt="claudius" /> */}
          <h3 className="name">Cladius Eromosele </h3>
          <p className="role">laboratory manager </p>
          <p className="company">SAGE DIAGNOSTICS </p>
        </div>
        <div className="person">
          <div
            className="image"
            style={{ backgroundImage: `url(${oluwagbogo})` }}
          ></div>
          {/* <img src={oluwagbogo} alt="oluwagbogo" /> */}
          <h3 className="name">Oluwagbogo Christiana Oyebade </h3>
          <p className="role">medical officer</p>
          <p className="company">SAGE DIAGNOSTICS</p>
        </div>
        <div className="person">
          <div
            className="image"
            style={{ backgroundImage: `url(${adedokun})` }}
          ></div>
          {/* <img src={adedokun} alt="adedokun" /> */}
          <h3 className="name">Adedokun Adedayo Adewunmi </h3>
          <p className="role">account manager </p>
          <p className="company">SAGE DIAGNOSTICS </p>
        </div>

        <div className="person">
          <div
            className="image"
            style={{ backgroundImage: `url(${nancy})` }}
          ></div>
          {/* <img src={nancy} alt="nancy" /> */}
          <h3 className="name">Nancy Clement</h3>
          <p className="role">HR/admin officer</p>
          <p className="company">AFRILIFE</p>
        </div>
        <div className="person">
          <div
            className="image"
            style={{
              backgroundImage: `url(${"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"})`,
            }}
          ></div>
          {/* <img src={nancy} alt="nancy" /> */}
          <h3 className="name">-</h3>
          <p className="role">Business Development Lead</p>
          <p className="company">SAGE DIAGNOSTICS</p>
        </div>
      </div>
      {/* <div className="bottom">
      </div> */}
    </section>
  );
};

export default Team;
