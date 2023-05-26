import { useState, useEffect } from "react";
import microscope from "../assets/microscope.jpg";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import { homePage } from "../utils/homePageData";

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
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [page]);

  return (
    <section
      className="section-one"
      // style={{ backgroundImage: `url(${microscope})` }}
    >
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
