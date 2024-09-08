import React from "react";
import "./question.css";
import Radio from "../reusableComponents/Radio/Radio";

const Question = ({ question = "", options = [] }) => {
  const options_ = [
    {
      label: "Data Analysis",
      value: "Data Analysis",
    },
    {
      label: "User's feedback",
      value: "User's feedback",
    },
    {
      label: "Make a questionary",
      value: "Make a questionary",
    },
    {
      label: "Personal feeling",
      value: "Personal feeling",
    },
  ];

  return (
    <div className="question-main-container">
      <p className="text-1">
        How do you judge what should be added in the next version of the app?
      </p>
      <Radio options={options_}/>
    </div>
  );
};

export default Question;
