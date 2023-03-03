import React, { useState } from "react";
import { home } from "../assets/images";

const HomeService = () => {
  const [name, setName] = useState("wike");
  const [email, setEmail] = useState("igbagboleye@gmail.com");
  const [message, setMessage] = useState("testing");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sent");
    fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json", mode: "no-cors" },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (response.ok) {
          setStatus("Email sent successfully");
        } else {
          setStatus("Error sending email");
        }
      })
      .catch((error) => {
        console.error(error);
        setStatus("Error sending email");
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      className="home-service"
      style={{ backgroundImage: `url(${home})` }}
    >
      <form className="form" onSubmit={handleSubmit}>
        <h1>Apply for Home Service</h1>
        <div className="center">
          <div className="item">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="item">
            <label htmlFor="test">Test</label>
            <input type="text" name="test" id="test" placeholder="Test" />
          </div>
          <div className="item">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="item">
            <label htmlFor="number">Phone number</label>
            <input
              type="number"
              name="phone"
              id="number"
              className="number"
              placeholder="Phone number"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default HomeService;
