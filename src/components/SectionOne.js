import { useState, useEffect } from "react";
import microscope from "../assets/microscope.jpg";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import { homePage } from "../utils/homePageData";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";

const SectionOne = () => {
  const [texts, setText] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setText(false);

    // homePage.map((_, index) => {
    //   const current = `${index}00`;
    //   let max = "400";

    //   if (page === max) {
    //     setPage(0);
    //   }
    //   const timeout = setTimeout(() => {
    //     setPage(current);
    //   }, 3000);
    // });
    const timeout = setTimeout(() => {
      let max = 300;

      if (page === max) {
        setPage(0);
        return;
      }

      setPage((prevPage) => prevPage + 100);
    }, 7000);

    return () => {
      clearTimeout(timeout);
    };
  }, [page]);

  const scroll = (direction) => {
    if (direction === "left") {
      if (page === 0) {
        setPage(300);
        return;
      }
      setPage(page - 100);
      return;
    } else if (direction === "right") {
      if (page === 300) {
        setPage(0);
        return;
      }
      setPage(page + 100);
    }
  };

  return (
    <section className="section-one">
      <div className="left-button">
        <img src={leftArrow} alt="leftArrow" onClick={() => scroll("left")} />
      </div>
      <div className="right-button">
        <img
          src={rightArrow}
          alt="rightArrow"
          onClick={() => scroll("right")}
        />
      </div>
      <div className="sections">
        {homePage.map((_, index) => {
          let active;
          active = `${index}00` === `${page}`;

          if (index === 0) {
            active = `${index}` === `${page}`;
          }
          // console.log(active);
          return (
            <div
              key={index}
              className={`${active ? "section active" : "section"}`}
            ></div>
          );
        })}
      </div>
      <div
        className="section-content"
        style={{ transform: `translateX(-${page}%)` }}
      >
        {homePage.map((item) => {
          const { text, src, desc } = item;
          return (
            <div className="main">
              <div className="image">
                <LazyLoadImage
                  alt="microscope"
                  effect="blur"
                  src={src}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className={`${texts ? "text translated" : "text"}`}>
                <h3>{text}</h3>
                {desc && <p>{desc}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionOne;
