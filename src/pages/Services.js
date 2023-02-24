import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import {
//   histology,
//   microbiology,
//   pathology,
//   hematology,
//   chemistry,
// } from "../assets/images";
import Service from "../components/Service";
import { services } from "../utils/data";

const Services = () => {
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

  return (
    <section className="services-main">
      <h1>Services</h1>
      <h3>The preferred and trusted medical diagnostics partner</h3>

      {services.map((item) => {
        return <Service key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Services;
