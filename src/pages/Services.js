import React, { useEffect } from "react";
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
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
