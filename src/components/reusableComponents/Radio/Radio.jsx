import React from "react";
import "./radio.css";
import radiocircle from "../../../assets/icons/radio-circle.svg";
import radiocirclechecked from "../../../assets/icons/radio-circle-checked.svg";

const Radio = ({ options }) => {
    const [selectedOption, setSelectedOption] = React.useState([]);
  const onRadioChange = (value) => {
    if (selectedOption.includes(value)) {
      setSelectedOption((prev) => prev.filter((item) => item !== value));
    } else {
      setSelectedOption((prev) => [...prev, value]);
    }
  };

  return (
    <form className="radio-group">
      {options.map((option, index) => {
        const isOptionSelected = selectedOption.includes(option.value);
        return (
          <div onClick={() => onRadioChange(option.value)} key={index} className={`multiselect-radio ${isOptionSelected && 'selected'}`}>
            <input
              type="checkbox"
              id={index}
              value={option.value}
              checked={isOptionSelected}
              onChange={(e) => onRadioChange(e.target.value)}
            />
            {isOptionSelected ? (
              <img className="icon" src={radiocirclechecked} alt="circle-checked" />
            ) : (
              <img className="icon" src={radiocircle} alt="circle" />
            )}
            <label htmlFor={index}>{option.label}</label>
          </div>
        );
      })}
    </form>
  );
};

export default Radio;
