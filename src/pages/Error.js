import React from "react";
import { Link } from "react-router-dom";
import { error } from "../assets/images";

const Error = () => {
  return (
    <div className="error">
      <h1>Oops! Page not found</h1>
      <Link to="/" className="back">
        Back Home
      </Link>
      <img src={error} alt="error" />
    </div>
  );
};

export default Error;
