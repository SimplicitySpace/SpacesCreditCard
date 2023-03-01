import React from "react";
import classes from "./PremiumCard.module.css";

function PremiumCard({ premium }) {
  return (
    <div>
      <div>
        {premium.map((items) => {
          const {
            cardtype,
            cardimg,
            cardcost,
            dot,
            features1,
            features2,
            features3,
            features4,
            features5,
            buttonText,
          } = items;
          return (
            <div className={classes.premiumcard}>
              <main>
                <div className={classes.sidefront}>
                  <div className={classes["cardname---img"]}>
                    <h3 className={classes["cardname---img--h3"]}>
                      {cardtype}
                    </h3>

                    <img src={cardimg} alt="sss" />
                  </div>

                  <div className={classes["premium--box"]}>
                    <div className={classes["dot---features"]}>
                      <span>{dot}</span>
                      <p>{features1}</p>
                    </div>
                    <div className={classes["dot---features"]}>
                      <span>{dot}</span>
                      <p>{features2}</p>
                    </div>{" "}
                    <div className={classes["dot---features"]}>
                      <span>{dot}</span>
                      <p>{features3}</p>
                    </div>
                    <div className={classes["dot---features"]}>
                      <span>{dot}</span>
                      <p>{features4}</p>
                    </div>
                    <div className={classes["dot---features"]}>
                      <span>{dot}</span>
                      <p>{features5}</p>
                    </div>{" "}
                    <div className={classes["dot---features"]}>
                      <span>{dot}</span>
                      <p>{features1}</p>
                    </div>
                  </div>
                </div>
                <div className={classes.sideback}>
                  <p>{cardcost}</p>

                  <button>{buttonText}</button>
                </div>
              </main>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PremiumCard;
