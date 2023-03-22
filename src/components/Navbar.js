import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo2.jpg";
import {
  AiOutlineCaretDown,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (isOpen === false) return;
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(false);
    setMenu(false);
  };

  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={`${menu ? "right menu-open" : "right"}`}>
        <Link to="/" onClick={toggle}>
          Home
        </Link>
        <Link to="/about" onClick={toggle}>
          About Us
        </Link>
        <Link to="services" onClick={toggle}>
          Services
        </Link>
        <Link to="/book-a-test" onClick={toggle}>
          Book a Test
        </Link>
        <div className="packages">
          <p onClick={() => setIsOpen(!isOpen)}>
            Health Packages <AiOutlineCaretDown />
          </p>
          <span className={`${isOpen && "open"}`}>
            <Link to="/corporate" onClick={toggle}>
              Corporate
            </Link>
            <Link to="/individual" onClick={toggle}>
              individual
            </Link>
          </span>
        </div>
        <Link to="/faq" onClick={toggle}>
          FAQ
        </Link>
        <Link to="/contact" onClick={toggle}>
          Contact
        </Link>
      </div>
      <div className="menu-logo" onClick={() => setMenu(!menu)}>
        {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
