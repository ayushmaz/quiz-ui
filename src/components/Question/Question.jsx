import React from "react";
import "./question.css";
import Radio from "../reusableComponents/Radio/Radio";
import { decodeHtmlEntities } from "../../utils/utils";

const Question = ({ questionObj, selectedOptions, setSelectedOptions}) => {

  const {options, question} = questionObj
  const _options = options.map((option, index) => ({label: decodeHtmlEntities(option), value: option}))

  const q = "The Philadelphia Eagles &amp; The New England Patriots"
  return (
    <div className="question-main-container">
      <div className="text-1">
        {decodeHtmlEntities(question)}
      </div>
      <Radio options={_options} selectedOptions = {selectedOptions}  setSelectedOptions = {setSelectedOptions}/>
    </div>
  );
};

export default Question;
