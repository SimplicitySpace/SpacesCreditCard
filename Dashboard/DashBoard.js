import React, { useState, useEffect } from "react";
import classes from "./DashBoard.module.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";

function DashBoard() {
  const [counter, setCounter] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <div data-aos="fade-up" className={classes.background} id="dashboard">
        <div className={classes["dashbaord-right"]}>
          <h2>Track Record</h2>
          <article>
            <div className={classes.stats}>
              {counter && (
                <CountUp start={0} end={58} className={classes.statsn} />
              )}
              +
              <br />
              <span>Support Countires</span>
            </div>
            <div className={classes.stats}>
              {counter && (
                <CountUp start={0} end={40} className={classes.statsn} />
              )}
              k
              <br />
              <span>Support Countires</span>
            </div>
            <div className={classes.stats}>
              {counter && (
                <CountUp start={0} end={31} className={classes.statsn} />
              )}
              %
              <br />
              <span>Support Countires</span>
            </div>
            <div className={classes.stats}>
              {counter && (
                <CountUp start={0} end={21} className={classes.statsn} />
              )}
              %
              <br />
              <span>Support Countires</span>
            </div>
          </article>
        </div>
        <div className={classes["dashbaord-left"]}>
          <img
            src="https://res.cloudinary.com/dt9f36crx/image/upload/v1664893626/Portfolio%20Adidas/SpacesCreditCardImages/Spaces_12_q7kqww.png"
            alt=""
          />
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default DashBoard;
