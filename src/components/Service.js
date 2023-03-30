import React from "react";
import ServiceItem from "./ServiceItem";
import { trackWindowScroll } from "react-lazy-load-image-component";

const Service = ({ id, title, items, scrollPosition }) => {
  return (
    <div className="service" id={id}>
      <h1>{title}</h1>
      <div className="center">
        {items.map((item) => {
          return (
            <ServiceItem
              {...item}
              key={item.id}
              scrollPosition={scrollPosition}
            />
          );
        })}
      </div>
    </div>
  );
};

// export default trackWindowScroll(Service);
export default Service;
