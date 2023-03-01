import React, { useEffect } from "react";
import classes from "./Features.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Features({ featuresList }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className={classes.features} id="features">
      {featuresList.map((items) => {
        const { icon, title, description } = items;
        return (
          <div className={classes["features-sub"]}>
            <div className={classes["features-icon"]}>
              <img src={icon} alt="ee" />
            </div>
            <div>
              <p className={classes["preview-title"]}>{title}</p>
              <span className={classes["preview-description"]}>
                {description}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Features;
