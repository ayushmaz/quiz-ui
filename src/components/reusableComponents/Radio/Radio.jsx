import React from "react";
import "./radio.css";
import radiocircle from "../../../assets/icons/radio-circle.svg";
import radiocirclechecked from "../../../assets/icons/radio-circle-checked.svg";

const Radio = ({ options, selectedOptions, setSelectedOptions }) => {
  const onRadioChange = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions((prev) => prev.filter((item) => item !== value));
    } else {
      setSelectedOptions((prev) => [...prev, value]);
    }
  };

  return (
    <form className="radio-group">
      {options.map((option, index) => {
        const isOptionSelected = selectedOptions.includes(option.value);
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
            <label>{option.label}</label>
          </div>
        );
      })}
    </form>
  );
};

export default Radio;
