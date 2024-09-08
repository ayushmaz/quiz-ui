import React, { useEffect, useState } from "react";
import Homepage from "../HomePage/Homepage";
import QuestionPage from "../QuestionPage/QuestionPage";
import Result from "../Result/Result";
import axios from "axios";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [scoreCard, setScoreCard] = useState({
    totalScore: 0,
    correct: 0,
    incorrect: 0,
  });
  const [questionIndex, setQuestionIndex] = useState(0);

  const fetchQuestions = () => {
    axios
      .get("http://localhost:8000/questions", { withCredentials: true })
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onStartClicked = () => {
    fetchQuestions();
    setQuestionIndex(1);
  };

  const onStartAgain = () => {
    fetchQuestions();
    setQuestionIndex(0);
  };

  const onSubmit = () => {
    axios
      .post(`http://localhost:8000/submit`, null, { withCredentials: true })
      .then((res) => {
        setScoreCard(res.data);
        setQuestionIndex((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderMainScreen = () => {
    switch (questionIndex) {
      case 0:
        return <Homepage onStartClicked={onStartClicked} />;
      case questions.length + 1:
        return <Result onStartAgain={onStartAgain} scoreCard={scoreCard} />;
      default:
        return (
          <QuestionPage
            question={questions[questionIndex - 1]}
            setQuestionIndex={setQuestionIndex}
            totalQuestions={questions.length}
            questionIndex={questionIndex}
            onSubmit={onSubmit}
            key={questionIndex}
          />
        );
    }
  };
  return <>{renderMainScreen()}</>;
};

export default Quiz;
