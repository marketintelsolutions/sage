import React, { useEffect } from "react";
import { GoLocation } from "react-icons/go";
import { BsArrowRightShort } from "react-icons/bs";

const Contact = () => {
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
        <form>
          <h3>Get in Touch</h3>
          <div className="inputs">
            <div className="item">
              <input type="text" id="firstname" name="firstname" />
              <label htmlFor="firstname">First Name *</label>
            </div>
            <div className="item">
              <input type="text" id="lastname" name="lastname" />
              <label htmlFor="lastname">Last Name *</label>
            </div>
            <div className="item">
              <input type="email" id="email" name="email" />
              <label htmlFor="email">Email *</label>
            </div>
            <div className="item">
              <input
                type="number"
                id="number"
                name="phone"
                className="number"
              />
              <label htmlFor="number">Phone No. *</label>
            </div>
          </div>
          <div className="long">
            <div className="item">
              <select name="subject" id="subject">
                <option value="whistleblowing">Whistleblowing</option>
                <option value="staff complaint">Staff complaint</option>
                <option value="feedback">Feedback on Our Reporting</option>
                <option value="mistreatment">Mistreatment</option>
                <option value="Bad service">Bad service</option>
                <option value="others">Others</option>
              </select>
              <label htmlFor="subject">Subject *</label>
            </div>
            <div className="item">
              <textarea
                name="message"
                id="message"
                // cols="30"
                // rows="10"
              ></textarea>
              <label htmlFor="message">Message *</label>
            </div>
          </div>
          <button type="button">
            Submit <BsArrowRightShort />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
