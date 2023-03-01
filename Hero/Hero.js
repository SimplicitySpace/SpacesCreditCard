import React from "react";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes["left-hero"]}>
        <span className={classes["hero-text"]}>
          Your One-Way Ticket to Financial Freedom
        </span>
        <h1>
          Get Your Personal{"\u00A0"}Credit
          <br /> Card Right Away
        </h1>
        <span className={classes["hero-more"]}>
          Your finances in your pocket Get your personal Credit Card now Rewards
          and benefits without the downsides of a credit card. Simplicity and
          transparency built right in. Leave money issue with us and focus on
          your core business.
        </span>
        <div>
          <button className={classes["hero--btn"]}>Learn More</button>
        </div>
      </div>
      <div className={classes["right-hero"]}>
        <img
          src="https://res.cloudinary.com/dt9f36crx/image/upload/v1664910238/Portfolio%20Adidas/SpacesCreditCardImages/Spaces_13_wdt7io.png"
          alt="cc"
        />
      </div>
    </div>
  );
}

export default Hero;
