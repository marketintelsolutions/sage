import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo2.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen === false) return;
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="right">
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About Us
        </Link>
        <Link to="services" onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <Link to="/patients" onClick={() => setIsOpen(false)}>
          Patients
        </Link>
        <div className="packages">
          <p onClick={() => setIsOpen(!isOpen)}>Health Packages</p>
          <span className={`${isOpen && "open"}`}>
            <Link to="/corporate" onClick={() => setIsOpen(false)}>
              Corporate
            </Link>
            <Link to="/individual" onClick={() => setIsOpen(false)}>
              individual
            </Link>
          </span>
        </div>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
