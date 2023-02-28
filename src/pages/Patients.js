import React, { useEffect } from "react";
import { booking, home } from "../assets/images";

const Patients = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <section className="booking">
        <h1>Appointment Booking</h1>
        <h3>Simple booking process with exclusive benefits.</h3>
        <div className="center">
          <img src={booking} alt="booking" />
          <form className="form">
            <div className="top">
              <div className="item department">
                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                  <option value="">Select Department</option>
                  <option value="CT SCAN">CT SCAN</option>
                  <option value="MRI">MRI</option>
                </select>
              </div>
              <div className="item date">
                <label htmlFor="date">Appointment Date</label>
                {/* <select name="department" id="date">
                  <option value="">Select Date</option>
                  <option value="01-03-2023">01-03-2023</option>
                  <option value="03-03-2023">03-03-2023</option>
                  <option value="05-03-2023">05-03-2023</option>
                  <option value="12-03-2023">12-03-2023</option>
                </select> */}
                <input type="date" name="date" id="date" />
              </div>
            </div>
            <div className="slot">
              <h2>Slot</h2>
              <div className="items">
                <div className="item">
                  <p>14:00</p>
                  <p>Available</p>
                </div>
                <div className="item">
                  <p>14:30</p>
                  <p>Available</p>
                </div>
                <div className="item">
                  <p>16:00</p>
                  <p>Available</p>
                </div>
                <div className="item">
                  <p>16:30</p>
                  <p>Available</p>
                </div>
                <div className="item">
                  <p>17:00</p>
                  <p>Available</p>
                </div>
                <div className="item">
                  <p>17:30</p>
                  <p>Available</p>
                </div>
                <div className="item">
                  <p>18:00</p>
                  <p>Available</p>
                </div>
              </div>
            </div>
            <div className="name">
              <select name="title" id="title">
                <option value="Title">Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="M/CHOF">M/CHOF</option>
                <option value="F/CHOF">F/CHOF</option>
                <option value="Dr.">Dr.</option>
              </select>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="details">
              <select name="gender" id="gender">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input type="date" name="dateofb" />
              <input
                type="number"
                placeholder="Mobile No."
                name="phone"
                className="number"
              />
              <input type="email" placeholder="Email ID" name="email" />
              <input type="number" placeholder="Weight in kg" name="weight" />
            </div>
            <button type="button">SUBMIT</button>
          </form>
        </div>
      </section>
      <div className="home-service" style={{ backgroundImage: `url(${home})` }}>
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
      </div>
    </div>
  );
};

export default Patients;
