import React, { useState, useEffect } from "react";
import { corporateData, nigeriaStates } from "../utils/packagesData";
import { corporate } from "../assets/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { sendcorporate } from "../utils/sendMailHelpers";

const Corporate = () => {
  const [text, setText] = useState(true);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    heathPackage: "",
    message: "",
    noOfStaff: "",
  });

  useEffect(() => {
    window.scroll(0, 0);
    setText(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log(formData);

    let formName = "User Getting in Touch";
    let recipient_email = "enquiries@sagedsl.com";

    const {
      firstname,
      lastname,
      company,
      email,
      address,
      city,
      state,
      phone,
      heathPackage,
      message,
      noOfStaff,
    } = formData;

    const fields = Object.keys(formData);

    if (
      !firstname ||
      !lastname ||
      !company ||
      !email ||
      !address ||
      !city ||
      !state ||
      !phone ||
      !heathPackage ||
      !message ||
      !noOfStaff
    ) {
      alert("Fill all fields");
      return;
    }

    sendcorporate({
      firstname,
      lastname,
      company,
      email,
      address,
      city,
      state,
      phone,
      heathPackage,
      message,
      noOfStaff,
      formName,
      recipient_email,
      fields,
    });
    setFormData({
      firstname: "",
      lastname: "",
      company: "",
      email: "",
      address: "",
      city: "",
      state: "",
      phone: "",
      heathPackage: "",
      message: "",
      noOfStaff: "",
    });
  };

  return (
    <section className="corporate">
      <div className={`${text ? "topmost translated" : "topmost"}`}>
        <div className="image">
          <LazyLoadImage
            alt="microscope"
            effect="blur"
            src={corporate}
            height="100%"
            width="100%"
          />
        </div>
        <h1>Corporate</h1>
      </div>
      <div className="content">
        <h1>Sage Corporate Packages</h1>
        <div className="items">
          {corporateData.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div></div> {item.text}
              </div>
            );
          })}
        </div>
        <p>
          Kindly fill out the form below , one of our customer representative
          will reach out to you shortly.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="top">
            <div className="input-item">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="input-item">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="input-item">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="input-item">
              <label htmlFor="mail">Email Address</label>
              <input
                type="email"
                name="email"
                id="mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="center">
            <div className="input-item">
              <label htmlFor="address">Office Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="input-item">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="input-item">
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                {nigeriaStates.map((state) => {
                  const { name } = state;
                  return (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-item">
              <label htmlFor="phone">Phone No.</label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="number"
                placeholder="080xxx"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="input-item">
              <label htmlFor="heathPackage">Select a Package</label>
              <select
                name="heathPackage"
                id="heathPackage"
                value={formData.heathPackage}
                onChange={handleChange}
              >
                <option hidden defaultValue>
                  {" "}
                  Select a Package
                </option>
                {corporateData.map((item) => {
                  const { text } = item;

                  return (
                    <option key={text} value={text}>
                      {text}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-item">
              <label htmlFor="phone">No. of Staff</label>
              <input
                type="number"
                name="noOfStaff"
                id="noOfStaff"
                className="number"
                placeholder="e.g 20"
                value={formData.noOfStaff}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Corporate;
