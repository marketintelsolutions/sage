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
      <div className="service" id="test">
        <h1>test</h1>
        <div className="center">
          <div className="item">
            <div className="image">
              <img src="" alt="hematology" />
            </div>
            <h4>hello </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              aliquid officia porro autem quasi fugiat culpa necessitatibus
              dignissimos dolorem cupiditate dolorum, obcaecati quas. Numquam
              deleniti quas, suscipit consequuntur earum iure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
