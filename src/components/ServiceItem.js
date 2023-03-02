import React from "react";

const ServiceItem = ({ image, text }) => {
  return (
    <div className="item">
      <div className="image">
        <img src={image} alt="hematology" />
      </div>
      <h4>{text} </h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquid
        officia porro autem quasi fugiat culpa necessitatibus dignissimos
        dolorem cupiditate dolorum, obcaecati quas. Numquam deleniti quas,
        suscipit consequuntur earum iure.
      </p>
    </div>
  );
};

export default ServiceItem;
