import React, { useState } from "react";
import { home } from "../assets/images";
import { sendhome } from "../utils/sendMailHelpers";

const HomeService = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    address: "",
    phone: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("sent");

    let formName = "User Getting in Touch";
    let recipient_email = "enquiries@sagedsl.com";

    console.log(formData);

    const fields = Object.keys(formData);

    const { name, email, message, address, phone } = formData;

    if (!name || !email || !message || !address || !phone) {
      alert("Fill all fields");
      return;
    }

    sendhome({
      name,
      email,
      message,
      address,
      phone,
      formName,
      recipient_email,
      fields,
    });

    setFormData({ name: "", email: "", message: "", address: "", phone: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label htmlFor="test">Test</label>
            <input
              type="text"
              name="message"
              id="test"
              placeholder="Test"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label htmlFor="number">Phone number</label>
            <input
              type="number"
              name="phone"
              id="number"
              className="number"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default HomeService;
