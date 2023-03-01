import React, { useEffect } from "react";
import Booking from "../components/Booking";
import Feedback from "../components/Feedback";
import FeedbackForm from "../components/FeedbackForm";
import HomeService from "../components/HomeService";

const Patients = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Booking />
      <HomeService />
      <FeedbackForm />
      {/* <Feedback /> */}
    </div>
  );
};

export default Patients;
