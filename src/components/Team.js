import React from "react";
import {
  //adedokun,
  nancy,
  man,
  //oluwagbogo,
  //team6,
  franklyn,
 // businessteam
} from "../assets/images";

const people = [
  {
    name: "Franklyn Ovbigbahon",
    role: "General Manager (GM)",
    image: franklyn,
  },
  {
    name: "Ganiyu Olayiwola",
    role: "Business Development Manager",
    image: man,
  },
  /*{
    name: "Oluwagbogo Christiana O.",
    role: "medical officer",
    image: oluwagbogo,
  },*/
  {
    name: "Nancy Clement",
    role: "HR/admin officer",
    image: nancy,
  },
  /*{
    name: "DEVELOPMENT TEAM",
    role: "Business Development Team",
    image: businessteam,
  },*/
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
