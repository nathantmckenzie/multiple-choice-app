import React from "react";

export default function SubmitResults({ answers, complete, setComplete }) {
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
    <div className="results-buttons">
      <button className="results-button" onClick={validateCompletedTest}>
        Get Results
      </button>
      <button onClick={() => window.location.reload()}>Try Another Quiz</button>
      {!complete ? (
        <div>Please Complete the Test</div>
      ) : (
        <div>You scored {calculateScore()} / 5</div>
      )}
    </div>
  );
}
