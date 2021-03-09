import React from "react";

export default function SubmitResults({
  answers,
  complete,
  setComplete,
  numberOfQuestions,
}) {
  const validateCompletedTest = () => {
    const arr = Object.values(answers);
    console.log("arr.length", arr.length);
    if (arr.length === numberOfQuestions) {
      setComplete(true);
    }
    console.log("numberOfQuestions", numberOfQuestions);
    console.log("COMPLETE", complete);
  };

  const calculateScore = () => {
    const arr = Object.values(answers);
    return arr.filter((answer) => answer === true).length;
  };

  return (
    <div className="results-buttons">
      <button className="results-button" onClick={validateCompletedTest}>
        Get Results
      </button>
      <button
        className="try-again-button"
        onClick={() => window.location.reload()}
      >
        Try Another Quiz
      </button>
      {!complete ? (
        <div>Please Complete the Test</div>
      ) : (
        <div>
          You scored {calculateScore()} / {numberOfQuestions}
        </div>
      )}
    </div>
  );
}
