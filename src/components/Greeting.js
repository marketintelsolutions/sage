import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import welcome from "../assets/images/welcome.jpg";

const Greeting = ({ setGreetOpen }) => {
  const close = () => setGreetOpen(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setGreetOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [setGreetOpen]);

  return (
    <div
      className="greeting"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div
        className="greeting-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="greeting-title"
      >
        <button
          type="button"
          className="greeting-close"
          aria-label="Close welcome message"
          onClick={close}
        >
          <IoClose />
        </button>

        <div className="greeting-media">
          <img src={welcome} alt="Sage Diagnostics laboratory" />
        </div>

        <div className="greeting-body">
          <span className="greeting-eyebrow">Welcome to our site</span>
          <h2 id="greeting-title">Welcome To Sage</h2>
          <p>
            We are committed to providing accurate and timely diagnostic
            solutions to help you make informed decisions about your health.
            With state-of-the-art technology and an experienced team, your
            health is in good hands.
          </p>

          <div className="greeting-results">
            <p>Already had a test? Check your results online.</p>
            <div className="greeting-actions">
              <a
                className="greeting-btn primary"
                target="_blank"
                rel="noopener noreferrer"
                href="http://sagediag.elabassist.com/"
              >
                View Test Results
              </a>
              <button
                type="button"
                className="greeting-btn ghost"
                onClick={close}
              >
                Explore the site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
