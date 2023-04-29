import React from "react";
import {
  adedokun,
  nancy,
  claudius,
  oluwagbogo,
  team6,
  osadugba,
} from "../assets/images";

const people = [
  {
    name: "Olumide Osadugba",
    role: "Chief operating officer (C.O.O.)",
    image: osadugba,
  },
  {
    name: "Cladius Eromosele",
    role: "laboratory manager",
    image: claudius,
  },
  {
    name: "Oluwagbogo Christiana O.",
    role: "medical officer",
    image: oluwagbogo,
  },
  {
    name: "Adedokun Adedayo A.",
    role: "account manager",
    image: adedokun,
  },
  {
    name: "Nancy Clement",
    role: "HR/admin officer",
    image: nancy,
  },
  {
    name: "EZIKANYI CHRIS",
    role: "Business Development Lead",
    // image:
    //   "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    image: team6,
  },
];

const Team = () => {
  return (
    <section className="team" id="team">
      <h2>Team</h2>
      <div className="people">
        {people.map((person) => {
          const { name, role, image } = person;
          return (
            <div className="person">
              <div
                className="image"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              {/* <img src={osadugba} alt="osadugba" /> */}
              <div className="info">
                <h3 className="name">{name}</h3>
                <span></span>
                <p className="role">{role}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="bottom">
      </div> */}
    </section>
  );
};

export default Team;
