import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo2.jpg";
import { GoLocation } from "react-icons/go";

const PreNav = () => {
  return (
    <section className="pre-nav">
      <div className="center">
        <p>
          <GoLocation /> Plot 10, Block 64, Fola Osibo Street, Lekki Phase 1,
          Lagos{" "}
        </p>
        <a href="#">
          <button>Test Results</button>
        </a>
      </div>
    </section>
  );
};

export default PreNav;
