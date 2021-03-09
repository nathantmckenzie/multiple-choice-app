import React from "react";

export default function SubmitResults({
  answers,
  complete,
  setComplete,
  numberOfQuestions,
  totalQuestions,
  setTotalQuestions,
  totalCorrect,
  setTotalCorrect,
}) {
  const validateCompletedTest = () => {
    const arr = Object.values(answers);
    console.log("arr.length", arr.length);
    if (arr.length === numberOfQuestions) {
      setComplete(true);
    }
    console.log("numberOfQuestions", numberOfQuestions);
    console.log("COMPLETE", complete);
    const correctAnswers = arr.filter((answer) => answer === true).length;
    setTotalCorrect([...totalCorrect, correctAnswers]);
    console.log("TOTAL Correct", totalCorrect);
  };

  const calculateScore = () => {
    const arr = Object.values(answers);
    const correctAnswers = arr.filter((answer) => answer === true).length;
    return correctAnswers;
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
