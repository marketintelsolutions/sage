import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ServiceItem = ({ image, text, scrollPosition }) => {
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquid
        officia porro autem quasi fugiat culpa necessitatibus dignissimos
        dolorem cupiditate dolorum, obcaecati quas. Numquam deleniti quas,
        suscipit consequuntur earum iure.
      </p>
    </div>
  );
};

export default ServiceItem;
