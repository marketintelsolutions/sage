import React from "react";
import ServiceItem from "./ServiceItem";

const Service = ({ title, items }) => {
  return (
    <div className="service" id={title}>
      <h1>{title}</h1>
      <div className="center">
        {items.map((item) => {
          return <ServiceItem {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Service;
