import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.carddiv}>
      <div className={`${classes.card} ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
