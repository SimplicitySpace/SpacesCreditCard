import React, { useState } from "react";
import classes from "./Request.module.css";

function Request() {
  const [submitted, setSubmitted] = useState(null);
  const [form, setForm] = useState(true);
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameisValid, setEnteredNameisValid] = useState(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim() === "") {
      setEnteredNameisValid(false);
      return;
    }

    setSubmitted(!submitted);

    setForm(!form);
  };
  return (
    <div className={classes["request-block"]}>
      <div className={classes["request-left"]}>
        <div>
          <h3>Request a callback</h3>
          <p>
            Please fill out the form and press the submit button. <br />
            We will get back to you within 1-2 business days.
          </p>
        </div>
      </div>
      <div className={classes["request-right"]}>
        {form && (
          <form onSubmit={onSubmitHandler}>
            <input placeholder="Your Name *" type="text" value={enteredName} />
            <input placeholder="Your Email *" name="email" type="email" />
            <input placeholder="Your Comment *" type="text" />
            <div className={classes["form-btn"]}>
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
        {!enteredNameisValid && <p>Please enter a valid name</p>}
        {submitted && (
          <div className={classes.feedback}>
            <p>Thanks, Your Submission is being reviewed</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Request;
