import React from "react";
import logo from "../assets/logos/logo2.png";
import { GoLocation } from "react-icons/go";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className="content">
        <div className="top">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="text">
            <span>
              <GoLocation />
            </span>
            <p>
              Plot 10, Block 64, <br />
              Fola Osibo Street, Lekki Phase 1, Lagos
            </p>
          </div>
        </div>
        {/* <div className="bottom"> */}
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
            <Link to="/individual" className="links">
              Individual Packages
            </Link>
          </p>
          <p>
            <Link to="/corporate" className="links">
              Corporate Packages
            </Link>
          </p>
          <p>
            <Link to="/contact" className="links">
              Contact
            </Link>
          </p>
        </div>
        <div className="item">
          <h1>centers</h1>
          <div className="icons">
            <p>
              {" "}
              Plot 10, Block 64, Fola Osibo Street,
              <br />
              Lekki Phase 1, Lagos
            </p>
          </div>
          <p>08139289067</p>
          <p>08139239147</p>
        </div>
        <div className="item">
          <h1>get connected</h1>
          <div className="icons">
            <BsTwitter />
            <BsFacebook />
            <BsInstagram />
          </div>
          <p>info@sagedsl.com</p>
          <p>enquiries@sagedsl.com</p>
        </div>
        {/* </div> */}
      </div>
      <hr />
      <p className="copyright">© SAGE Nigeria Copyright {date}</p>
    </footer>
  );
};

export default Footer;
