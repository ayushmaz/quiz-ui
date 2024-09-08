import React from "react";
import Homepage from "../HomePage/Homepage";
import QuestionPage from "../QuestionPage/QuestionPage";
import Result from "../Result/Result";

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const onStartClicked = () => {
    setQuestionIndex(1);
  };

  const onStartAgain = () => {
    setQuestionIndex(0)
  }

  const questions = [
    {
      difficulty: "easy",
      category: "Sports",
      question: "Who won the UEFA Champions League in 2017?",
      options: [
        "Atletico Madrid",
        "AS Monaco FC",
        "Juventus F.C.",
        "Real Madrid C.F.",
      ],
    },
    {
      difficulty: "easy",
      category: "Sports",
      question: "Which country hosted the 2022 FIFA World Cup?",
      options: ["USA", "Japan", "Switzerland", "Qatar"],
    },
    {
      difficulty: "easy",
      category: "Sports",
      question: "What year did the New Orleans Saints win the Super Bowl?",
      options: ["2008", "2009", "2011", "2010"],
    },
  ];

  const renderMainScreen = () => {
    switch (questionIndex) {
      case 0:
        return <Homepage onStartClicked={onStartClicked} />;
      case questions.length + 1:
        return <Result onStartAgain={onStartAgain} />;
      default:
        return (
          <QuestionPage
            question={questions[questionIndex - 1]}
            setQuestionIndex={setQuestionIndex}
            totalQuestions={questions.length}
            questionIndex={questionIndex}
            key={questionIndex}
          />
        );
    }
  };
  return <>{renderMainScreen()}</>;
};

export default Quiz;
