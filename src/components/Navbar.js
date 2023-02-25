import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo2.jpg";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/about">About Us</Link>
        <Link to="services">Services</Link>
        <Link to="/packages">Health Packages</Link>
      </div>
    </nav>
  );
};

export default Navbar;
