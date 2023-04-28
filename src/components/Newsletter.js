import React, { useState } from "react";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setName("");
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h1>Subscribe To Our Newsletter </h1>
      <p>
        Subscribe to our company's email to have access to a wealth of benefits,
        including exclusive access to promotions, updates on new products or
        services, and informative content that can help you stay up-to-date on
        industry trends. When you subscribe to our company's email, you can
        receive regular communications from us directly to your inbox, which can
        help you stay engaged with our brand and informed about our offerings.
      </p>
      <form>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
