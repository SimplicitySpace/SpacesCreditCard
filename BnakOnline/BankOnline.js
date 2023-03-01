import React, { useEffect } from "react";
import classes from "./BankOnline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function BankOnline({ bankOnline }) {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div
      data-aos="fade-right"
      id="bankonline"
      className={classes["bankonline-flex"]}
    >
      <div className={classes["bank-online-left"]}>
        <img
          src="https://res.cloudinary.com/dt9f36crx/image/upload/v1664893631/Portfolio%20Adidas/SpacesCreditCardImages/Spaces_11_scruvd.png"
          alt="mobile"
        />
      </div>
      <div className={classes["bank-online-right"]}>
        {bankOnline.map((items) => {
          const { dot, description } = items;
          return (
            <>
              <div className={classes["bankonline--textbox"]}>
                <span className={classes.dot}>{dot}</span>
                <span>{description}</span>
              </div>
            </>
          );
        })}
        <div className={classes["download-btn"]}>
          <button>App Store</button>
          <button> Play Store</button>
        </div>
      </div>
    </div>
  );
}

export default BankOnline;
