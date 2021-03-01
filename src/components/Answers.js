import React from "react";
import checkmark from "../images/checkmark1.jpg";
import xmark from "../images/xmark.jpg";

export default function Answers({
  correct,
  incorrect1,
  incorrect2,
  incorrect3,
  answers,
  setAnswers,
  index,
  complete,
  setComplete,
}) {
  const correctAnswer = () => {
    setAnswers({ ...answers, [index]: true });
    console.log("ANSWERS", answers);
  };

  const incorrectAnswer = () => {
    setAnswers({ ...answers, [index]: false });
    console.log("ANSWERS", answers);
  };
  return (
    <div>
      {incorrect2 ? (
        <>
          <button className="correct" onClick={correctAnswer}>
            {correct}
          </button>
          <button className="incorrect" onClick={incorrectAnswer}>
            {incorrect1}
          </button>
          <button className="incorrect" onClick={incorrectAnswer}>
            {incorrect2}
          </button>
          <button className="incorrect" onClick={incorrectAnswer}>
            {incorrect3}
          </button>
          {complete ? (
            <div className="correct-answer">
              {" "}
              <p>Correct Answer: {correct}</p>
              <img className="checkmark" src={checkmark} />{" "}
            </div>
          ) : null}
        </>
      ) : (
        <>
          <button className="correct" onClick={correctAnswer}>
            {correct}
          </button>
          <button className="incorrect" onClick={incorrectAnswer}>
            {incorrect1}
          </button>
          {complete ? (
            <div className="correct-answer">
              {" "}
              <p>Correct Answer: {correct}</p>{" "}
              <img className="checkmark" src={checkmark} />{" "}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
