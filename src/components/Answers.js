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
  buttonClicked,
  setButtonClicked,
}) {
  const correctAnswer = (e) => {
    setAnswers({ ...answers, [index]: true });
    setButtonClicked({ ...buttonClicked, [index]: e.target.value });
    console.log("ANSWERS", answers);
  };

  const incorrectAnswer1 = (e) => {
    setAnswers({ ...answers, [index]: false });
    setButtonClicked({ ...buttonClicked, [index]: e.target.value });
    console.log("ANSWERS", answers);
  };

  const incorrectAnswer2 = (e) => {
    setAnswers({ ...answers, [index]: false });
    setButtonClicked({ ...buttonClicked, [index]: e.target.value });
    console.log("ANSWERS", answers);
  };

  const incorrectAnswer3 = (e) => {
    setAnswers({ ...answers, [index]: false });
    setButtonClicked({ ...buttonClicked, [index]: e.target.value });
    console.log("ANSWERS", answers);
  };
  return (
    <div>
      {incorrect2 ? (
        <>
          <button
            className={
              buttonClicked[index] === "btn1" ? "buttonFalse" : "buttonTrue"
            }
            value="btn1"
            onClick={correctAnswer}
          >
            {correct}
          </button>
          <button
            className={
              buttonClicked[index] === "btn2" ? "buttonFalse" : "buttonTrue"
            }
            value="btn2"
            onClick={incorrectAnswer1}
          >
            {incorrect1}
          </button>
          <button
            className={
              buttonClicked[index] === "btn3" ? "buttonFalse" : "buttonTrue"
            }
            value="btn3"
            onClick={incorrectAnswer2}
          >
            {incorrect2}
          </button>
          <button
            className={
              buttonClicked[index] === "btn4" ? "buttonFalse" : "buttonTrue"
            }
            value="btn4"
            onClick={incorrectAnswer3}
          >
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
          <button
            className={
              buttonClicked[index] === "btn1" ? "buttonFalse" : "buttonTrue"
            }
            value="btn1"
            onClick={correctAnswer}
          >
            {correct}
          </button>
          <button
            className={
              buttonClicked[index] === "btn2" ? "buttonFalse" : "buttonTrue"
            }
            value="btn2"
            onClick={incorrectAnswer1}
          >
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
