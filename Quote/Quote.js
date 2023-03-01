import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import classes from "./Quotes.module.css";

function Quote() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="fade-up" className={classes.quotes}>
      <div className={classes["quote-textbox"]}>
        <h4>
          We strive to always be at the center of the financial services
          industry
        </h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </span>
      </div>
      <div className={classes["quote-img"]}>
        <img
          src="https://res.cloudinary.com/dt9f36crx/image/upload/v1664926232/Portfolio%20Adidas/SpacesCreditCardImages/ceo_cw4j5c.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Quote;
