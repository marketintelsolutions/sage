import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { booking } from "../assets/images";

const investigations = [
  "X-Ray",
  "Ultrasound",
  "Mammogram",
  "Echocardiogram",
  "ECG",
  "Spirometry",
  "Audiometry",
];

const time = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

const Booking = () => {
  const [slotActive, setSlotActive] = useState("");

  return (
    <section className="booking">
      <h1>Appointment Booking</h1>
      <h3>Simple booking process with exclusive benefits.</h3>
      <div className="center">
        {/* <img src={booking} alt="booking" /> */}
        <div className="image">
          <LazyLoadImage
            alt="microscope"
            effect="blur"
            src={booking}
            height="100%"
            width="100%"
          />
        </div>
        <form className="form">
          <div className="top">
            <div className="item department">
              <label htmlFor="investigation">Investigation</label>
              <select name="investigation" id="investigation">
                <option value="">Select Investigation</option>
                {investigations.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
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
          <div className="more">
            <label htmlFor="more">More Details on Investigation</label>
            <textarea name="more" id="more"></textarea>
          </div>
          <div className="slot">
            <h2>Slot</h2>
            <div className="items">
              {time.map((item, index) => (
                <div
                  className={`${slotActive === index ? "item active" : "item"}`}
                  onClick={() => setSlotActive(index)}
                  key={index}
                >
                  <p>{item}</p>
                  <p>Available</p>
                </div>
              ))}
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
  );
};

export default Booking;
