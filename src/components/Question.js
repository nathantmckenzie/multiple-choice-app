import React from "react";

export default function Question({ question, index }) {
  return (
    <div>
      <h2>
        Question {index + 1}:{" "}
        {question.replace("&quot;", '"').replace("&#039;", "'")}
      </h2>
    </div>
  );
}
