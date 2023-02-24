import React from "react";
import ServiceItem from "./ServiceItem";

const Service = ({ id, title, items }) => {
  return (
    <div className="service" id={id}>
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
