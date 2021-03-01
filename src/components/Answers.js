import React from "react";

export default function Answers({
  correct,
  incorrect1,
  incorrect2,
  incorrect3,
  answers,
  setAnswers,
  index,
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
        </>
      ) : (
        <>
          <button className="correct" onClick={correctAnswer}>
            {correct}
          </button>
          <button className="incorrect" onClick={incorrectAnswer}>
            {incorrect1}
          </button>
        </>
      )}
    </div>
  );
}
