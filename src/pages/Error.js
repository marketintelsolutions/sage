import React, { useState } from "react";
import { Link } from "react-router-dom";
import { error } from "../assets/images";
import axios from "axios";

const Error = () => {
  const [recipient_email, setEmail] = useState("igbagboleye2@gmail.com");
  const [subject, setSubject] = useState("testing email sender");
  const [message, setMessage] = useState("this had better work");

  function sendmail() {
    if (recipient_email && subject && message) {
      axios
        .post("http://localhost:5000/send_email", {
          recipient_email,
          subject,
          message,
        })
        .then(() => alert("Message Sent successfully"))
        .catch(() => alert("Ooops...failed"));
    } else return alert("Fill all fields");
  }

  return (
    <div className="error">
      <h1>Oops! Page not found</h1>
      <Link to="/" className="back">
        Back Home
      </Link>
      <img src={error} alt="error" />

      <button type="button" onClick={sendmail}>
        send form
      </button>
    </div>
  );
};

export default Error;
