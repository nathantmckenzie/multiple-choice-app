import React from "react";

export default function SubmitResults({
  answers,
  setAnswers,
  complete,
  setComplete,
}) {
  const validateCompletedTest = () => {
    const arr = Object.values(answers);
    console.log("arr", arr);
    if (arr.length === 5) {
      setComplete(true);
    }
    console.log("COMPLETE", complete);
  };

  const calculateScore = () => {
    const arr = Object.values(answers);
    return arr.filter((answer) => answer === true).length;
  };

  return (
    <div>
      <button className="results-button" onClick={validateCompletedTest}>
        Get Results
      </button>
      {!complete ? (
        <div>COMPLETE THE DAMN TEST</div>
      ) : (
        <div>You scored {calculateScore()} / 5</div>
      )}
    </div>
  );
}
