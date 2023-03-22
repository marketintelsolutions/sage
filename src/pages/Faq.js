import React, { useEffect, useState } from "react";
import SectionFour from "../components/SectionFour";
import FaqSearch from "../components/FaqSearch";
import { sendmail } from "../utils/sendMailHelpers";
import ContactForm from "../components/ContactForm";
import { useLocation } from "react-router-dom";
import { faqData } from "../utils/data";
import { faqblue } from "../assets/images";
import { BiSearchAlt2 } from "react-icons/bi";

const Faq = () => {
  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    if (!targetId) {
      window.scroll(0, 0);
      return;
    }

    const el = document.getElementById(targetId);

    if (el) {
      const scrolledY = window.scrollY;
      const { top } = el.getBoundingClientRect();

      const position = top + scrolledY - 200;
      window.scroll(0, position);
    }
  }, [targetId]);

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
  //   useEffect(() => {
  //     window.scroll(0, 0);
  //   }, []);
  return (
    <section className="faq-main">
      <div className="faqtop" style={{ backgroundImage: `url(${faqblue})` }}>
        <h1>Can we help you?</h1>
        <div className="input">
          <input type="text" placeholder="Search" />
          <span>
            <BiSearchAlt2 />
          </span>

          {/* <div className="questions">
            {faqData.map((item, index) => {
              console.log(index);
              if (item) {
                return <p key={index}>{item.question}</p>;
              }
            })}
          </div> */}
        </div>
      </div>
      <SectionFour targetId={targetId} />
      <div className="faq-form" id="others">
        <ContactForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
    </section>
  );
};

export default Faq;
