import React from "react";
import logo from "../assets/logos/logo2.png";
import { GoLocation } from "react-icons/go";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsFillTelephoneFill,
  BsTelephone,
  BsLinkedin,
} from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
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
              Plot 10, Fola Osibo Street <br /> (by road 15 junction), <br />
              Lekki Phase 1, Lagos
            </p>
          </div>
        </div>
        {/* <div className="bottom"> */}
        <div className="item">
          <h1>quick links</h1>
          <p>
            <Link to="/book-a-test" className="links">
              Book a Test
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
            <Link to="/faq" className="links">
              FAQ
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
              <span>
                <GoLocation />
              </span>{" "}
              Plot 10, Fola Osibo Street <br /> (by road 15 junction), Lekki
              Phase 1, Lagos
            </p>
          </div>
          <p>
            <span>
              <BsTelephone />
            </span>{" "}
            08139289067
          </p>
          <p>
            <span>
              <BsTelephone />
            </span>{" "}
            08139239147
          </p>
        </div>
        <div className="item">
          <h1>get connected</h1>
          <div className="icons">
            <a href="https://twitter.com/sage_diagnostic?">
              {" "}
              <BsTwitter />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100090491735035&mibextid=ZbWKwL">
              {" "}
              <BsFacebook />
            </a>
            <a href="https://instagram.com/sage_diagnostics?igshid=ZDdkNTZiNTM=">
              <BsInstagram />
            </a>
            <a href="https://www.tiktok.com/@sage_diagnostics">
              {" "}
              <SiTiktok />
            </a>
            <a href="https://www.linkedin.com/company/sage-diagnostics">
              {" "}
              <BsLinkedin />
            </a>
          </div>
          <p>info@sagedsl.com</p>
          <p>enquiries@sagedsl.com</p>
        </div>
      </div>
      <hr />
      <p className="copyright">© SAGE Nigeria Copyright {date}</p>
    </footer>
  );
};

export default Footer;
