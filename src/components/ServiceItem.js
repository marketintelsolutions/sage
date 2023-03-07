import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ServiceItem = ({ image, text, description, scrollPosition }) => {
  // console.log(scrollPosition);
  return (
    <div className="item">
      <div className="image">
        {/* <img src={image} alt="hematology" /> */}
        <LazyLoadImage
          alt="microscope"
          effect="blur"
          src={image}
          height="100%"
          width="100%"
          scrollPosition={scrollPosition}
          visibleByDefault={image.src === image}
        />
      </div>
      <h4>{text} </h4>

      <p>
        {description ||
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis adipisci dolor aliquid. Molestias id numquam possimus inventore iusto, nihil mollitia."}
      </p>
    </div>
  );
};

export default ServiceItem;
