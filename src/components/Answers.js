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

  const buttonColor1 = () => {
    if (!complete) {
      if (buttonClicked[index] === "btn1") {
        return "buttonClicked";
      } else {
        return "buttonUnclicked";
      }
    } else if (complete) {
      if (buttonClicked[index] === "btn1" && answers[index] === true) {
        return "buttonTrue";
      } else if (buttonClicked[index] !== "btn1" && answers[index] === true) {
        return "buttonUnclicked";
      }
      if (buttonClicked[index] === "btn1" && answers[index] === false) {
        return "buttonFalse";
      } else if (buttonClicked[index] !== "btn1" && answers[index] === false) {
        return "buttonUnclicked";
      }
    }
  };

  const buttonColor2 = () => {
    if (!complete) {
      if (buttonClicked[index] === "btn2") {
        return "buttonClicked";
      } else {
        return "buttonUnclicked";
      }
    } else if (complete) {
      if (buttonClicked[index] === "btn2" && answers[index] === true) {
        return "buttonTrue";
      } else if (buttonClicked[index] !== "btn2" && answers[index] === true) {
        return "buttonUnclicked";
      }
      if (buttonClicked[index] === "btn2" && answers[index] === false) {
        return "buttonFalse";
      } else if (buttonClicked[index] !== "btn2" && answers[index] === false) {
        return "buttonUnclicked";
      }
    }
  };

  const buttonColor3 = () => {
    if (!complete) {
      if (buttonClicked[index] === "btn3") {
        return "buttonClicked";
      } else {
        return "buttonUnclicked";
      }
    } else if (complete) {
      if (buttonClicked[index] === "btn3" && answers[index] === true) {
        return "buttonTrue";
      } else if (buttonClicked[index] !== "btn3" && answers[index] === true) {
        return "buttonUnclicked";
      }
      if (buttonClicked[index] === "btn3" && answers[index] === false) {
        return "buttonFalse";
      } else if (buttonClicked[index] !== "btn3" && answers[index] === false) {
        return "buttonUnclicked";
      }
    }
  };

  const buttonColor4 = () => {
    if (!complete) {
      if (buttonClicked[index] === "btn4") {
        return "buttonClicked";
      } else {
        return "buttonUnclicked";
      }
    } else if (complete) {
      if (buttonClicked[index] === "btn4" && answers[index] === true) {
        return "buttonTrue";
      } else if (buttonClicked[index] !== "btn4" && answers[index] === true) {
        return "buttonUnclicked";
      }
      if (buttonClicked[index] === "btn4" && answers[index] === false) {
        return "buttonFalse";
      } else if (buttonClicked[index] !== "btn4" && answers[index] === false) {
        return "buttonUnclicked";
      }
    }
  };

  return (
    <div>
      {incorrect2 ? (
        <div className="four-buttons">
          <button
            className={buttonColor1()}
            value="btn1"
            onClick={correctAnswer}
          >
            {correct}
          </button>
          <button
            className={buttonColor2()}
            value="btn2"
            onClick={incorrectAnswer1}
          >
            {incorrect1}
          </button>
          <button
            className={buttonColor3()}
            value="btn3"
            onClick={incorrectAnswer2}
          >
            {incorrect2}
          </button>
          <button
            className={buttonColor4()}
            value="btn4"
            onClick={incorrectAnswer3}
          >
            {incorrect3}
          </button>
          {complete ? (
            <div className="correct-answer">
              {" "}
              <p>Correct Answer: {correct}</p>{" "}
              {answers[index] === true ? <>✅</> : <>❌</>}
            </div>
          ) : null}
        </div>
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
              {answers[index] === true ? <>✅</> : <>❌</>}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
