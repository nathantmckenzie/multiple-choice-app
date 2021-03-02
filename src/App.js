import "./App.css";
import { useState, useEffect } from "react";
import Question from "./components/Question";
import Answers from "./components/Answers";
import SubmitResults from "./components/SubmitResults";

function App() {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState({});
  const [complete, setComplete] = useState(false);
  const [buttonClicked, setButtonClicked] = useState({});

  const getQuestions = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=5&category=9`
    );
    const data = await response.json();
    console.log("Data", data.results);
    setData(data.results);
  };

  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div className="App">
      <h1>Multiple Choice Quiz</h1>
      {data.map((question, index) => (
        <>
          <Question
            index={index}
            question={question.question}
            complete={complete}
            answers={answers}
          />
          <Answers
            index={index}
            answers={answers}
            setAnswers={setAnswers}
            correct={question.correct_answer}
            incorrect1={question.incorrect_answers[0]}
            incorrect2={question.incorrect_answers[1]}
            incorrect3={question.incorrect_answers[2]}
            complete={complete}
            setComplete={setComplete}
            buttonClicked={buttonClicked}
            setButtonClicked={setButtonClicked}
          />
        </>
      ))}
      <SubmitResults
        answers={answers}
        setAnswers={setAnswers}
        complete={complete}
        setComplete={setComplete}
      />
    </div>
  );
}

export default App;
