import React from "react";
import {
  adedokun,
  nancy,
  claudius,
  oluwagbogo,
  team6,
  osadugba,
  businessteam
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
    name: "Nancy Clement",
    role: "HR/admin officer",
    image: nancy,
  },
  {
    name: "EZIKANYI CHRIS",
    role: "Business Development Team",
    image: businessteam,
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
