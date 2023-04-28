import { useState } from "react";

import classes from "./ErrorModal.module.css";

import Button from "../Component/Button.js";
import Card from "../Component/Card.js";

const ErrorModal = (props) => {
  return (
    <Card>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <h2>{props.title}</h2>
          </div>
          <p className={classes.content}>{props.message}</p>
          <div className={classes.actions}>
            <Button onClick={() => props.onConfirm()}>Okay</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ErrorModal;
