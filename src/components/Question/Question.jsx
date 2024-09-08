import React from "react";
import "./question.css";
import Radio from "../reusableComponents/Radio/Radio";

const Question = ({ questionObj, selectedOptions, setSelectedOptions}) => {

  const {options, question} = questionObj
  const _options = options.map((option, index) => ({label: option, value: option}))

  return (
    <div className="question-main-container">
      <p className="text-1">
        {question}
      </p>
      <Radio options={_options} selectedOptions = {selectedOptions}  setSelectedOptions = {setSelectedOptions}/>
    </div>
  );
};

export default Question;
