import React, { useRef, useState } from "react";

import Card from "../Component/Card.js";
import Button from "../Component/Button.js";
import UsersList from "./UsersList.jsx";
import ErrorModal from "./ErrorModal.jsx";

import classes from "./AddUser.module.css";

const AddUser = () => {
  const fullNameInput = useRef();
  const ageInput = useRef();

  const [usersList, setUsersList] = useState([]);
  //state ẩn hiện modal
  const [hide, setHide] = useState(true);
  const [error, setError] = useState({});

  const errorHandler = () => {
    setHide(true);
  };

  const addUserHandler = () => {
    if (fullNameInput.current.value === "" || ageInput.current.value === "") {
      setHide(false);
      setError({
        ...error,
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
    } else if (ageInput.current.value <= 0) {
      setHide(false);
      setError({
        ...error,
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
    } else {
      const oj = {
        id: Math.random().toString(),
        fullName: fullNameInput.current.value,
        age: ageInput.current.value,
      };
      setUsersList([...usersList, oj]);
      fullNameInput.current.value = "";
      ageInput.current.value = "";
      setHide(true);
      // console.log(userList);
    }
  };
  console.log(hide);
  return (
    <React.Fragment>
      <div className={classes.adduser}>
        <Card>
          <div className={classes.input}>
            <label className={classes.username}>Username</label>
            <input ref={fullNameInput} type="text" />
            <label>Age (Years)</label>
            <input ref={ageInput} type="number" />
          </div>
          <div className={classes.btn}>
            <Button onClick={addUserHandler}>Add User</Button>
          </div>
        </Card>
        <UsersList data={usersList} />
      </div>
      {!hide && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
          sState={setHide}
        />
      )}
    </React.Fragment>
  );
};

export default AddUser;
