import { useState } from "react";

import Card from "../Component/Card.js";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.userslist}>
      <div className={classes.users}>
        <ul>
          {props.data.map((item) => (
            <li key={item.id}>{`${item.fullName} (${item.age} years old)`}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UsersList;
