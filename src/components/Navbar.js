import React from "react";
import logo from "../assets/logos/logo2.jpg";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        {/* <h1>Sage</h1> */}
        <img src={logo} alt="logo" />
      </div>
      <div className="right">
        <a href="#">Home</a>
        <a href="#sectionTwo">About Us</a>
        {/* <a href="#">Our Mission</a> */}
        <a href="#team">Team</a>
        <a href="#">Services</a>
        <a href="#">FAQ</a>
      </div>
    </nav>
  );
};

export default Navbar;
