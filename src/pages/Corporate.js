import React, { useState, useEffect } from "react";
import { corporateData, nigeriaStates } from "../utils/packagesData";
import { corporate } from "../assets/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Corporate = () => {
  const [text, setText] = useState(true);

  useEffect(() => {
    window.scroll(0, 0);
    setText(false);
  }, []);

  return (
    <section className="corporate">
      <div
        className={`${text ? "topmost translated" : "topmost"}`}
        // style={{ backgroundImage: `url(${corporate})` }}
      >
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
        <form>
          <div className="top">
            <div className="input-item">
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" id="firstname" />
            </div>
            <div className="input-item">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" id="lastname" />
            </div>
            <div className="input-item">
              <label htmlFor="company">Company Name</label>
              <input type="text" name="company" id="company" />
            </div>
            <div className="input-item">
              <label htmlFor="mail">Email Address</label>
              <input type="email" name="email" id="mail" />
            </div>
          </div>
          <div className="center">
            <div className="input-item">
              <label htmlFor="address">Office Address</label>
              <input type="text" name="address" id="address" />
            </div>
            <div className="input-item">
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" />
            </div>
            <div className="input-item">
              <label htmlFor="state">State</label>
              <select name="state" id="state">
                <option value="" selected>
                  Select State
                </option>
                {nigeriaStates.map((state) => {
                  const { name } = state;
                  return <option value={name}>{name}</option>;
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
              />
            </div>
            <div className="input-item">
              <label htmlFor="package">Select a Package</label>
              <select name="package" id="package">
                {corporateData.map((item) => {
                  const { text } = item;
                  return <option value={text}>{text}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <button type="button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Corporate;
