import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = props => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          how are you
          <i className={"fa fa-times " + classes.error} />
        </li>
        <li>
          <strong>2. </strong>
          how are you
          <i className={"fa fa-check " + classes.success} />
        </li>
      </ul>

      <p>правильно 4 з 4</p>

      <div>
        <button>повторити</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
