import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import welcome from "../assets/images/welcome.jpg";
import lab from "../assets/images/lab.jpg";

const Greeting = ({ setGreetOpen }) => {
  const closeGreet = (e) => {
    // console.log(e.target.classList.contains("greeting"));

    if (e.target.classList.contains("greeting")) {
      setGreetOpen(false);
    }
  };

  return (
    <div className="greeting" onClick={(e) => closeGreet(e)}>
      <div className="greeting-container">
        <div className="group group-one">
          <div className="group-center">
            <div className="left">
              <h1>Welcome To Sage</h1>
              <p>
                Welcome to Sage Diagnostic company! We are committed to
                providing accurate and timely diagnostic solutions to help you
                make informed decisions about your health. With our
                state-of-the-art technology and experienced team of
                professionals, you can trust that your health is in good hands.
              </p>
            </div>
            <div className="right">
              <span onClick={() => setGreetOpen(false)}>
                <AiOutlineCloseSquare />
              </span>
              <img src={welcome} alt="welcome" />
            </div>
          </div>
        </div>
        <div className="group group-two">
          <div className="group-center">
            <div className="left">
              <h1>Welcome to our site</h1>
              <p>
                You can check your Test Results here, just click on the button
                below
              </p>
              <button>test result</button>
            </div>
            <div className="right">
              <span onClick={() => setGreetOpen(false)}>
                <AiOutlineCloseSquare />
              </span>
              <img src={lab} alt="lab" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
