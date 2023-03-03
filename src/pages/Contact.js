import React, { useState, useEffect } from "react";
import { GoLocation } from "react-icons/go";
import { BsArrowRightShort } from "react-icons/bs";
import { sendmail } from "../utils/sendMailHelpers";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    let formName = "User Getting in Touch";
    let recipient_email = "igbagboleye2@gmail.com";

    const { firstname, lastname, email, phone, subject, message } = formData;

    const fields = Object.keys(formData);

    console.log(fields);

    sendmail({
      firstname,
      lastname,
      email,
      phone,
      subject,
      message,
      formName,
      recipient_email,
      fields,
    });
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="contact">
      <div className="center">
        <div className="details">
          <div>
            <h2>Contact Us</h2>
            <p>
              <span>
                <GoLocation />
              </span>{" "}
              Plot 10, Block 64, Fola Osibo Street, <br />
              Lekki Phase 1, Lagos
            </p>

            <h3>We value your feedback.</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h3>Get in Touch</h3>
          <div className="inputs">
            <div className="item">
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
              <label htmlFor="firstname">First Name *</label>
            </div>
            <div className="item">
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
              <label htmlFor="lastname">Last Name *</label>
            </div>
            <div className="item">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email *</label>
            </div>
            <div className="item">
              <input
                type="number"
                id="number"
                name="phone"
                className="number"
                value={formData.phone}
                onChange={handleChange}
              />
              <label htmlFor="number">Phone No. *</label>
            </div>
          </div>
          <div className="long">
            <div className="item">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <label htmlFor="subject">Subject *</label>
            </div>
            <div className="item">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                // cols="30"
                // rows="10"
              ></textarea>
              <label htmlFor="message">Message *</label>
            </div>
          </div>
          <button type="submit">
            Submit <BsArrowRightShort />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
