import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { booking } from "../assets/images";
import { sendbooking } from "../utils/sendMailHelpers";

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

  // FORM DATA
  const [slot, setSlot] = useState("");
  const [investigation, setInvestigation] = useState("");
  const [date, setDate] = useState("");
  const [moreDetails, setMoreDetails] = useState("");
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      slot,
      investigation,
      date,
      moreDetails,
      title,
      firstname,
      lastname,
      gender,
      phone,
      email,
      weight
    );

    const formData = {
      slot,
      investigation,
      date,
      moreDetails,
      title,
      firstname,
      lastname,
      gender,
      phone,
      email,
      weight,
    };

    let formName = "APPOINTMENT BOOKING";
    let recipient_email = "enquiries@sagedsl.com";
    // let recipient_email = "igbagboleye2@gmail.com";

    const fields = Object.keys(formData);

    if (
      !slot ||
      !investigation ||
      !date ||
      !moreDetails ||
      !title ||
      !firstname ||
      !lastname ||
      !gender ||
      !phone ||
      !email ||
      !weight
    ) {
      alert("Fill all fields");
      return;
    }

    sendbooking({
      slot,
      investigation,
      date,
      moreDetails,
      title,
      firstname,
      lastname,
      gender,
      phone,
      email,
      weight,
      formName,
      recipient_email,
      fields,
    });

    setSlotActive(null);

    setSlot("");
    setInvestigation("");
    setDate("");
    setMoreDetails("");
    setTitle("");
    setFirstname("");
    setLastname("");
    setGender("");
    setPhone("");
    setEmail("");
    setWeight("");
  };

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
        <form className="form" onSubmit={handleSubmit}>
          <div className="top">
            <div className="item department">
              {/* INVESTIGATION */}
              <label htmlFor="investigation">Investigation</label>
              <select
                name="investigation"
                id="investigation"
                onChange={(e) => setInvestigation(e.target.value)}
                value={investigation}
              >
                <option>Select Investigation</option>
                {investigations.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {/* ITEM DATE */}
            <div className="item date">
              <label htmlFor="date">Appointment Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          {/* MORE DETAILS ON INVESTIGATION */}
          <div className="more">
            <label htmlFor="more">More Details on Investigation</label>
            <textarea
              name="more"
              id="more"
              value={moreDetails}
              onChange={(e) => setMoreDetails(e.target.value)}
            ></textarea>
          </div>

          {/* SLOT */}
          <div className="slot">
            <h2>Slot</h2>
            <div className="items">
              {time.map((item, index) => (
                <div
                  className={`${slotActive === index ? "item active" : "item"}`}
                  onClick={() => {
                    setSlot(item);
                    setSlotActive(index);
                  }}
                  key={index}
                >
                  <p>{item}</p>
                  <p>Available</p>
                </div>
              ))}
            </div>
          </div>
          <div className="name">
            {/* TITLE */}
            <select
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            >
              <option value="Title">Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="M/CHOF">M/CHOF</option>
              <option value="F/CHOF">F/CHOF</option>
              <option value="Dr.">Dr.</option>
            </select>

            {/* FIRST NAME */}
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            {/* LAST NAME */}
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="details">
            {/* GENDER */}
            <select
              name="gender"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            {/* PHONE */}
            <input
              type="number"
              placeholder="Mobile No."
              name="phone"
              className="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email ID"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* WEIGHT */}
            <input
              type="number"
              placeholder="Weight in kg"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
