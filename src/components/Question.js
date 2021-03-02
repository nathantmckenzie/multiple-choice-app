import React from "react";

export default function Question({ question, index, complete, answers }) {
  return (
    <div>
      <h2
        className={
          !complete ? null : answers[index] === true ? "green-text" : "red-text"
        }
      >
        Question {index + 1}:{" "}
        {question.replace("&quot;", '"').replace("&#039;", "'")}
      </h2>
    </div>
  );
}
