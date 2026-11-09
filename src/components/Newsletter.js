import { useState } from "react";
import axios from "axios";

const SUBSCRIBE_URL =
  // "http://localhost:5050/subscribe_newsletter";
  "https://sagebackend-207c01373df4.herokuapp.com/subscribe_newsletter";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    if (!name.trim() || !email.trim()) {
      setStatus("error");
      setMessage("Please enter your name and email.");
      return;
    }

    setStatus("loading");
    setMessage("");
    try {
      await axios.post(SUBSCRIBE_URL, {
        name: name.trim(),
        email: email.trim(),
      });
      setStatus("success");
      setMessage("Thanks for subscribing! You'll hear from us soon.");
      setName("");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(
        err.response?.status === 400
          ? "Please enter a valid name and email address."
          : "Something went wrong. Please try again later."
      );
    }
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          required
          aria-label="Your name"
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Your email"
        />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && (
        <p
          className={`newsletter-status ${status}`}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
        </p>
      )}
    </section>
  );
};

export default Newsletter;
