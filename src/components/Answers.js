import React from "react";

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

  function shuffleQuestions() {
    const array = [1, 2, 3, 4];
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return (
    <div>
      {incorrect2 ? (
        <div className="four-buttons">
          <button
            className={buttonColor1()}
            value="btn1"
            onClick={complete ? null : correctAnswer}
          >
            {correct
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'")
              .replace(/&&amp;/g, "&")}
          </button>
          <button
            className={buttonColor2()}
            value="btn2"
            onClick={complete ? null : incorrectAnswer1}
          >
            {incorrect1
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'")
              .replace(/&&amp;/g, "&")}
          </button>
          <button
            className={buttonColor3()}
            value="btn3"
            onClick={complete ? null : incorrectAnswer2}
          >
            {incorrect2
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'")
              .replace(/&&amp;/g, "&")}
          </button>
          <button
            className={buttonColor4()}
            value="btn4"
            onClick={complete ? null : incorrectAnswer3}
          >
            {incorrect3
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'")
              .replace(/&&amp;/g, "&")}
          </button>
          {complete ? (
            <div className="correct-answer">
              {" "}
              <p>Correct Answer: {correct}</p>{" "}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="true-false">
          <button
            className={buttonColor1()}
            value="btn1"
            onClick={complete ? null : correctAnswer}
          >
            {correct
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'")
              .replace(/&&amp;/g, "&")}
          </button>
          <button
            className={buttonColor2()}
            value="btn2"
            onClick={complete ? null : incorrectAnswer1}
          >
            {incorrect1
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'")
              .replace(/&&amp;/g, "&")}
          </button>
          {complete ? (
            <div className="correct-answer">
              {" "}
              <p>Correct Answer: {correct}</p>{" "}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
