import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <h1>Sage</h1>
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
