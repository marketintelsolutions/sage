import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo2.jpg";
import { GoLocation } from "react-icons/go";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const PreNav = () => {
  return (
    <section className="pre-nav">
      <div className="center">
        <p>
          <GoLocation /> Plot 10, Block 64, Fola Osibo Street, Lekki Phase 1,
          Lagos{" "}
        </p>
        <div className="left">
          <div className="socials">
            <BsTwitter />
            <BsFacebook />
            <BsInstagram />
          </div>
          <a href="#">
            <button>Test Results</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreNav;
