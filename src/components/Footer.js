import React from "react";
import logo from "../assets/logos/logo2.png";
import { GoLocation } from "react-icons/go";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className="top">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="text">
          <span>
            <GoLocation />
          </span>
          <p>Plot 10, Block 64, Fola Osibo Street, Lekki Phase 1, Lagos</p>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="item">
          <h1>quick links</h1>
          <p>
            <Link to="/patients" className="links">
              Patients
            </Link>
          </p>
          <p>
            <Link to="/about" className="links">
              About Us
            </Link>
          </p>
          <p>
            <Link to="/services" className="links">
              Services
            </Link>
          </p>
          <p>
            <Link to="/packages" className="links">
              Health Packages
            </Link>
          </p>
        </div>
        <div className="item">
          <h1>get connected</h1>
          <div className="icons">
            <BsTwitter />
            <BsFacebook />
            <BsInstagram />
          </div>
          <p>+2348030030033</p>
        </div>
      </div>
      <hr />
      <p className="copyright">© SAGE Nigeria Copyright {date}</p>
    </footer>
  );
};

export default Footer;
