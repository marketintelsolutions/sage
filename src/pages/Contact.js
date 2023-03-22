import React, { useState, useEffect } from "react";

import { sendmail } from "../utils/sendMailHelpers";
import ContactForm from "../components/ContactForm";

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
      <ContactForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
      <div className="map">
        <iframe
          title="Google Maps Embed"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15858.426721606123!2d3.463502524957985!3d6.444519997590981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%2010%2C%20Fola%20Osibo%20Street%20(by%20road%2015%20junction)%2C%20Lekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1679405711706!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Contact;
