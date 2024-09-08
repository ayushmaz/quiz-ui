import React, { useEffect, useState } from "react";
import Homepage from "../HomePage/Homepage";
import QuestionPage from "../QuestionPage/QuestionPage";
import Result from "../Result/Result";
import { API_GET_QUESTIONS, API_SUBMIT_QUIZ } from "../../service/api";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [scoreCard, setScoreCard] = useState({
    totalScore: 0,
    correct: 0,
    incorrect: 0,
  });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionsLoading, setQuestionsLoading] = useState(false);

  const fetchQuestions = async () => {
    setQuestionsLoading(true);
    return API_GET_QUESTIONS()
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setQuestionsLoading(false);
      })
  };
  const onStartClicked = () => {
    setQuestionIndex(1);
  };

  const onStartAgain = () => {
    setQuestionIndex(0);
    fetchQuestions()
  };

  useEffect(() => {
    fetchQuestions()
  }, []);
  const onSubmit = () => {
      API_SUBMIT_QUIZ()
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
        return <Homepage onStartClicked={onStartClicked} questionsLoading={questionsLoading}/>;
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
