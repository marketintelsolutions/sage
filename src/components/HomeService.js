import React from "react";
import { home } from "../assets/images";

const HomeService = () => {
  return (
    <section
      className="home-service"
      style={{ backgroundImage: `url(${home})` }}
    >
      <form action="" className="form">
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
        <button type="button">Submit</button>
      </form>
    </section>
  );
};

export default HomeService;
