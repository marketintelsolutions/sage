import React from "react";

const ServiceItem = ({ image, text }) => {
  return (
    <div className="item">
      <div className="image">
        <img src={image} alt="hematology" />
      </div>
      <p>{text} </p>
    </div>
  );
};

export default ServiceItem;
