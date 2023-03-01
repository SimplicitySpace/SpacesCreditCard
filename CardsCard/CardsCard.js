import React from "react";
import classes from "./CardsCard.module.css";

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
